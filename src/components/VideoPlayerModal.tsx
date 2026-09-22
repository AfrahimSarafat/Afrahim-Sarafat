import React, { useEffect } from "react";
import { X, ExternalLink, Play, Sparkles } from "lucide-react";
import { VideoItem } from "../portfolioData";

interface VideoPlayerModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ video, onClose }) => {
  useEffect(() => {
    if (!video) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [video, onClose]);

  if (!video) return null;

  const isShort = video.type === "short-form";

  return (
    <div
      id="video-player-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#091712]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full ${
          isShort ? "max-w-md" : "max-w-4xl"
        } bg-[#11241d] text-[#f7f4ec] rounded-3xl overflow-hidden shadow-2xl border border-[#234b3d] my-auto animate-in zoom-in-95 duration-200 flex flex-col`}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#1c3a30] bg-[#0c1c16]">
          <div className="flex items-center gap-2 truncate pr-4">
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider ${
                isShort
                  ? "bg-[#d98d12] text-[#0e261f]"
                  : "bg-[#275d4a] text-[#85e6be]"
              }`}
            >
              <Play className="w-3 h-3 fill-current" />
              {isShort ? "Short-Form (9:16)" : "Long-Form (16:9)"}
            </span>
            <span className="text-xs text-[#8ea79b] truncate font-medium">
              {video.client || "YouTube Video"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={video.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18362b] hover:bg-[#d98d12] hover:text-[#0e261f] text-xs font-semibold text-[#c8d9d0] transition-colors"
              title="Open video on YouTube"
            >
              <span>YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#18362b] text-[#f7f4ec] hover:bg-[#d98d12] hover:text-[#0e261f] flex items-center justify-center transition-colors shadow-sm"
              aria-label="Close video player"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Embed */}
        <div
          className={`relative w-full bg-black flex items-center justify-center ${
            isShort ? "aspect-[9/16] max-h-[72vh]" : "aspect-[16/9]"
          }`}
        >
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Footer Info */}
        <div className="p-5 sm:p-6 bg-[#0e241c] text-left space-y-3">
          <h3 className="font-display font-bold text-lg sm:text-xl text-[#f7f4ec] leading-snug">
            {video.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#92a99c] leading-relaxed">
            {video.description}
          </p>

          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#1a382d]">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#637d70] mr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#d98d12]" /> Skills:
            </span>
            {video.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-[#163327] border border-[#214737] text-[11px] font-medium text-[#b5cbbf]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
