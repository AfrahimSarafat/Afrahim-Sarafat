import express from "express";
import compression from "compression";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

// Enable gzip/deflate response compression for high-speed page loading
app.use(compression());

// Increase limit to handle base64 reference images for remixing
app.use(express.json({ limit: "25mb" }));

// Initialize Gemini SDK with User-Agent header as required
function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured. Please add it to your environment variables or Secrets.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// API Health Check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
  });
});

// Single variation generation helper
async function generateSingleVariation(
  ai: GoogleGenAI,
  modelName: string,
  promptText: string,
  aspectRatio: string,
  imageSize: string,
  referenceImage?: string,
  variationIndex: number = 0
): Promise<{ url: string; modelUsed: string; prompt: string; seed: number }> {
  const seed = Math.floor(Math.random() * 10000000) + variationIndex * 1337;
  const parts: any[] = [];

  if (referenceImage && referenceImage.startsWith("data:image")) {
    const mimeMatch = referenceImage.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
    const mimeType = mimeMatch ? mimeMatch[1] : "image/png";
    const data = mimeMatch ? mimeMatch[2] : referenceImage.replace(/^data:image\/\w+;base64,/, "");

    parts.push({
      inlineData: {
        mimeType,
        data,
      },
    });

    parts.push({
      text: `Remix and re-imagine this reference image into a new wallpaper variation with vibe: "${promptText}". Maintain the thematic aesthetic, color harmony, and mood of the reference while generating a unique artistic variation #${variationIndex + 1}. High resolution, phone wallpaper quality, clean visual framing.`,
    });
  } else {
    // Slight stylistic prompt nuance across the 4 variations for richer diversity
    const variationFlavors = [
      "cinematic depth and balanced framing",
      "rich atmospheric lighting and mood",
      "intricate details and stylized textures",
      "bold contrasting tones and poetic atmosphere",
    ];
    const flavor = variationFlavors[variationIndex % variationFlavors.length];

    parts.push({
      text: `Phone wallpaper, aspect ratio ${aspectRatio}. Vibe: "${promptText}". Focus on ${flavor}. Clean composition, wallpaper background aesthetics, vibrant visual appeal, masterpiece quality.`,
    });
  }

  // Model fallback chain
  const candidateModels = [
    modelName,
    modelName.replace("-preview", ""),
    "gemini-3.1-flash-image",
    "gemini-3-pro-image",
    "gemini-3.1-flash-lite-image",
  ];

  let lastError: any = null;

  for (const candidate of candidateModels) {
    try {
      const response = await ai.models.generateContent({
        model: candidate,
        contents: { parts },
        config: {
          seed,
          imageConfig: {
            aspectRatio: (aspectRatio as any) || "9:16",
            imageSize: (imageSize as any) || "1K",
          },
        },
      });

      const candidateObj = response.candidates?.[0];
      if (candidateObj?.content?.parts) {
        for (const part of candidateObj.content.parts) {
          if (part.inlineData?.data) {
            const mime = part.inlineData.mimeType || "image/png";
            return {
              url: `data:${mime};base64,${part.inlineData.data}`,
              modelUsed: candidate,
              prompt: promptText,
              seed,
            };
          }
        }
      }
    } catch (err: any) {
      lastError = err;
      console.warn(`Attempt with model ${candidate} failed:`, err?.message || err);
      // Try next model candidate in chain
    }
  }

  throw lastError || new Error(`No image data returned from image generation model`);
}

// Generate 4 variations
app.post("/api/generate-wallpapers", async (req, res) => {
  try {
    const {
      prompt,
      aspectRatio = "9:16",
      imageSize = "1K",
      quality = "general",
      referenceImage,
      count = 4,
    } = req.body;

    if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
      return res.status(400).json({ error: "Please provide a vibe description or prompt." });
    }

    const ai = getGeminiClient();

    // Use requested models: gemini-3-pro-image-preview for studio quality,
    // gemini-3.1-flash-image-preview for general quality
    const primaryModel =
      quality === "studio" ? "gemini-3-pro-image-preview" : "gemini-3.1-flash-image-preview";

    const targetCount = Math.min(Math.max(Number(count) || 4, 1), 4);
    const variationPromises: Promise<any>[] = [];

    for (let i = 0; i < targetCount; i++) {
      variationPromises.push(
        generateSingleVariation(
          ai,
          primaryModel,
          prompt.trim(),
          aspectRatio,
          imageSize,
          referenceImage,
          i
        )
      );
    }

    const results = await Promise.allSettled(variationPromises);
    const successfulVariations = results
      .filter((r): r is PromiseFulfilledResult<any> => r.status === "fulfilled")
      .map((r, index) => ({
        id: `var-${Date.now()}-${index}`,
        url: r.value.url,
        modelUsed: r.value.modelUsed,
        prompt: r.value.prompt,
        seed: r.value.seed,
        aspectRatio,
        imageSize,
        createdAt: new Date().toISOString(),
      }));

    if (successfulVariations.length === 0) {
      const firstRejection = results.find(
        (r): r is PromiseRejectedResult => r.status === "rejected"
      );
      const errMsg = firstRejection?.reason?.message || "Failed to generate wallpaper variations.";
      return res.status(500).json({
        error: errMsg,
        detail: "All image generation attempts encountered an issue. Please try again with a different vibe or model setting.",
      });
    }

    res.json({
      variations: successfulVariations,
      count: successfulVariations.length,
      requestedCount: targetCount,
      aspectRatio,
      imageSize,
      quality,
      modelUsed: successfulVariations[0]?.modelUsed || primaryModel,
      isRemix: Boolean(referenceImage),
    });
  } catch (error: any) {
    console.error("Wallpaper generation error:", error);
    res.status(500).json({
      error: error?.message || "Internal server error while generating wallpapers",
    });
  }
});

// Vite & Static middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(
      express.static(distPath, {
        maxAge: "1y",
        immutable: true,
        setHeaders: (res, filePath) => {
          if (filePath.endsWith(".html") || filePath.endsWith("index.html")) {
            res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
          }
        },
      })
    );
    app.get("*", (_req, res) => {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
