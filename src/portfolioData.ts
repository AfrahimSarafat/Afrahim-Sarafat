export interface ServiceItem {
  id: string;
  number?: string;
  tag: string;
  title: string;
  description: string;
  iconName: string;
  category?: "graphic-design" | "video-editing";
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: "product" | "brand" | "editorial" | "social" | "presentation";
  categoryLabel: string;
  imageUrl: string;
  description: string;
  role: string;
  deliverables: string[];
  link?: string;
}

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  type: "short-form" | "long-form";
  typeLabel: string;
  aspectRatio: "9:16" | "16:9";
  thumbnailUrl: string;
  youtubeUrl: string;
  client?: string;
  description: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export interface ProfileData {
  name: string;
  firstName: string;
  lastNameAccent: string;
  initials: string;
  role: string;
  availability: string;
  intro: string;
  heroImage: string;
  yearsExperience: number;
  aboutHeading: string;
  aboutLead: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  studioLocation: string;
  studioImage: string;
  stats: {
    yearsFreelancing: number;
    projectsShipped: number;
    happyClients: number;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    whatsappUrl?: string;
    dribbbleUrl?: string;
    instagramUrl: string;
    linkedinUrl: string;
    xUrl?: string;
    behanceUrl: string;
    youtubeUrl: string;
    facebookUrl: string;
  };
}

export const INITIAL_PROFILE: ProfileData = {
  name: "Afrahim Sarafat",
  firstName: "Afrahim",
  lastNameAccent: "Sarafat.",
  initials: "AS",
  role: "Graphic Designer & Video Editor",
  availability: "Available for Projects",
  intro:
    "I create bold visuals and engaging videos that help brands, businesses, and creators communicate with clarity, build a stronger presence, and stand out in a crowded digital world.",
  heroImage:
    "https://i.ibb.co/DHvB5K2D/Chat-GPT-Image-Jul-28-2026-04-36-21-PM.png",
  yearsExperience: 8,
  aboutHeading: "I turn ideas into bold visuals and engaging stories.",
  aboutLead:
    "I'm Afrahim Sarafat, a Graphic Designer & Video Editor focused on creating clear, engaging, and visually compelling content. I combine design and video to help brands, businesses, and creators communicate their ideas with confidence.",
  aboutParagraph1:
    "My work spans visual identity, social media design, presentation design, video editing, motion graphics, and promotional content. I care about strong composition, thoughtful typography, clean visuals, and editing that keeps the story moving.",
  aboutParagraph2:
    "I believe good visual work should do more than look good — it should communicate, connect, and leave a lasting impression. Whether I'm designing a visual or editing a video, I focus on turning ideas into polished experiences that feel intentional and memorable.",
  studioLocation: "",
  studioImage: "https://i.ibb.co/2YC2T9jk/afra.png",
  stats: {
    yearsFreelancing: 7,
    projectsShipped: 52,
    happyClients: 22,
  },
  contact: {
    email: "hmsarafat6@gmail.com",
    phone: "+8801608-201844",
    location: "Dhaka, Bangladesh",
    whatsappUrl: "https://wa.me/8801608201844",
    dribbbleUrl: "https://dribbble.com",
    instagramUrl: "https://www.instagram.com/afrahim_sarafat/",
    linkedinUrl: "https://www.linkedin.com/in/afrahim-sarafat-3b6348437/",
    xUrl: "https://x.com",
    behanceUrl: "https://www.behance.net/hmsharafat",
    youtubeUrl: "https://www.youtube.com/@dreamongraphic",
    facebookUrl: "https://www.facebook.com/share/1EBGJ4XRRo/",
  },
};

export const TOOLS_LIST = [
  { name: "Adobe Premiere Pro", category: "Video Editing" },
  { name: "Adobe After Effect", category: "Motion Graphics" },
  { name: "Adobe Illustrator", category: "Vector Design" },
  { name: "Adobe Photoshop", category: "Image Editing" },
];

export const GRAPHIC_DESIGN_SERVICES: ServiceItem[] = [
  {
    id: "brand-visual-identity",
    number: "01",
    tag: "01 — Brand & Visual Identity",
    title: "Brand & Visual Identity",
    description:
      "Logo, branding, typography, color systems and visual guidelines designed to give your brand a clear and consistent presence.",
    iconName: "Palette",
    category: "graphic-design",
  },
  {
    id: "social-marketing-design",
    number: "02",
    tag: "02 — Social & Marketing Design",
    title: "Social & Marketing Design",
    description:
      "Scroll-stopping social content, advertising creatives and promotional visuals built for digital platforms.",
    iconName: "Megaphone",
    category: "graphic-design",
  },
  {
    id: "creative-presentation-design",
    number: "03",
    tag: "03 — Creative & Presentation Design",
    title: "Creative & Presentation Design",
    description:
      "Presentations, pitch decks, posters, thumbnails and other polished visual assets designed to communicate ideas clearly.",
    iconName: "Presentation",
    category: "graphic-design",
  },
];

export const VIDEO_EDITING_SERVICES: ServiceItem[] = [
  {
    id: "short-form-content",
    number: "04",
    tag: "04 — Short-Form Content",
    title: "Short-Form Content",
    description:
      "Engaging edits for Reels, Shorts and social media — built around strong pacing, clean visuals and attention-grabbing moments.",
    iconName: "Film",
    category: "video-editing",
  },
  {
    id: "motion-graphics-animation",
    number: "05",
    tag: "05 — Motion Graphics & Animation",
    title: "Motion Graphics & Animation",
    description:
      "Dynamic motion graphics, kinetic typography, logo animation and visual effects that bring ideas to life.",
    iconName: "Sparkles",
    category: "video-editing",
  },
  {
    id: "commercial-brand-video",
    number: "06",
    tag: "06 — Commercial & Brand Video",
    title: "Commercial & Brand Video",
    description:
      "Polished product videos, promotional content, brand films and commercial edits designed to communicate with impact.",
    iconName: "Video",
    category: "video-editing",
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  ...GRAPHIC_DESIGN_SERVICES,
  ...VIDEO_EDITING_SERVICES,
];

export const VIDEOS_LIST: VideoItem[] = [
  {
    id: "short-1",
    youtubeId: "auaUOH8uKX0",
    title: "Cold Coffee | Cinematic Product Motion Graphics",
    type: "short-form",
    typeLabel: "Short-Form · Motion Graphics",
    aspectRatio: "9:16",
    thumbnailUrl: "https://i.ytimg.com/vi/auaUOH8uKX0/hqdefault.jpg",
    youtubeUrl: "https://youtube.com/shorts/auaUOH8uKX0",
    client: "Product Commercial",
    description:
      "Cinematic beverage motion graphics with dynamic transitions, liquid splash highlights, and commercial pacing in Premiere Pro.",
    tags: ["Motion Graphics", "Premiere Pro", "Product Video", "Shorts"],
  },
  {
    id: "short-2",
    youtubeId: "Gh6E_CAnwMc",
    title: "Food Motion Graphics | Smooth Motion Design",
    type: "short-form",
    typeLabel: "Short-Form · Food Commercial",
    aspectRatio: "9:16",
    thumbnailUrl: "https://i.ytimg.com/vi/Gh6E_CAnwMc/hqdefault.jpg",
    youtubeUrl: "https://youtube.com/shorts/Gh6E_CAnwMc",
    client: "Food & Restaurant Promo",
    description:
      "Smooth food advertisement motion design with punchy pacing, mouthwatering visual hierarchy, and kinetic typography in Premiere Pro.",
    tags: ["Food Ads", "Motion Design", "Pacing", "Shorts"],
  },
  {
    id: "short-3",
    youtubeId: "LXxdbKLUNsM",
    title: "Milma Juice — Smooth Product Animation",
    type: "short-form",
    typeLabel: "Short-Form · Product Animation",
    aspectRatio: "9:16",
    thumbnailUrl: "https://i.ytimg.com/vi/LXxdbKLUNsM/hqdefault.jpg",
    youtubeUrl: "https://youtube.com/shorts/LXxdbKLUNsM",
    client: "Beverage Brand",
    description:
      "Engaging beverage product animation, dynamic text reveals, juice splash accents, and brand color grading.",
    tags: ["Product Animation", "Visual Design", "Reels", "Shorts"],
  },
  {
    id: "short-4",
    youtubeId: "6HjKQ680RXo",
    title: "One Decision Can Change Your Next 5 Years",
    type: "short-form",
    typeLabel: "Short-Form · Storytelling Reel",
    aspectRatio: "9:16",
    thumbnailUrl: "https://i.ytimg.com/vi/6HjKQ680RXo/hqdefault.jpg",
    youtubeUrl: "https://youtube.com/shorts/6HjKQ680RXo",
    client: "Motivational & Personal Brand",
    description:
      "Inspirational storytelling reel featuring rhythmic sound design, synchronized animated captions, and atmospheric color grading.",
    tags: ["Storytelling", "Captions", "Sound Design", "Shorts"],
  },
  {
    id: "short-5",
    youtubeId: "IP6B6zWU9Kc",
    title: "Documentary Motion Graphics",
    type: "short-form",
    typeLabel: "Short-Form · Documentary Motion",
    aspectRatio: "9:16",
    thumbnailUrl: "https://i.ytimg.com/vi/IP6B6zWU9Kc/hqdefault.jpg",
    youtubeUrl: "https://youtube.com/shorts/IP6B6zWU9Kc",
    client: "Historical & Documentary",
    description:
      "Documentary archival motion design featuring 2.5D parallax photo animation, paper textures, and historical film grain.",
    tags: ["Documentary", "Parallax", "Archival", "Shorts"],
  },
  {
    id: "long-1",
    youtubeId: "KkPZ8yY7EXY",
    title: "Al Qamar Academy Project — Video Editing & Production",
    type: "long-form",
    typeLabel: "Long-Form · Documentary Edit",
    aspectRatio: "16:9",
    thumbnailUrl: "https://i.ytimg.com/vi/KkPZ8yY7EXY/hqdefault.jpg",
    youtubeUrl: "https://youtu.be/KkPZ8yY7EXY",
    client: "Al Qamar Academy",
    description:
      "In-depth documentary and institutional project video featuring multi-speaker interview pacing, contextual B-roll, and clean lower thirds.",
    tags: ["Long-Form", "Documentary", "Educational", "Video Editing"],
  },
  {
    id: "long-2",
    youtubeId: "Amyqk2GPKYI",
    title: "Why Students Want to Learn Video Editing | As-Sunnah",
    type: "long-form",
    typeLabel: "Long-Form · Talk Show & Interview",
    aspectRatio: "16:9",
    thumbnailUrl: "https://i.ytimg.com/vi/Amyqk2GPKYI/hqdefault.jpg",
    youtubeUrl: "https://youtu.be/Amyqk2GPKYI",
    client: "As-Sunnah Foundation / Media",
    description:
      "Comprehensive talk show and discussion edit featuring audio balancing, cinematic color tones, engaging cutaways, and seamless flow.",
    tags: ["Long-Form", "Interview", "As-Sunnah", "Color Grading"],
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "ginger-ad-post",
    title: "Ginger Beverage — Creative Social Ad",
    client: "Ginger Health & Beverage",
    category: "social",
    categoryLabel: "Graphic Design · Social Ad",
    imageUrl: "https://i.postimg.cc/ncBVZ8v3/6-8-2026-ginger-ad-post.png",
    description:
      "Creative advertising poster for ginger beverage highlighting fresh natural ingredients, vibrant splash effects, and clean brand typography.",
    role: "Graphic Designer & Art Director",
    deliverables: ["Social Media Ad", "Creative Retouching", "Visual Hierarchy", "Typography Layout"],
  },
  {
    id: "watch-ad-design",
    title: "Luxury Watch — Commercial Product Ad",
    client: "Horology & Luxury Goods",
    category: "brand",
    categoryLabel: "Graphic Design · Product Ad",
    imageUrl: "https://i.postimg.cc/P5HX56yj/7-8-2026-watch-ad-design.png",
    description:
      "High-end luxury wristwatch advertisement design featuring cinematic studio lighting, brushed metallic textures, and premium dark aesthetic.",
    role: "Product Visual Designer",
    deliverables: ["Product Ad Design", "Lighting & Shadows", "Luxury Branding", "Ad Banner"],
  },
  {
    id: "chicken-curry-katsu",
    title: "Chicken Curry Katsu — Restaurant Food Ad",
    client: "Asian Culinary Restaurant",
    category: "social",
    categoryLabel: "Graphic Design · Food Promo",
    imageUrl: "https://i.postimg.cc/zfcYKpCN/8-8-2026-Chicken-Curry-Katsu.png",
    description:
      "Mouthwatering culinary social media creative showcasing hot Chicken Curry Katsu with bold appetizing color contrast, discount badge, and order CTA.",
    role: "Food & Social Media Designer",
    deliverables: ["Food Promotion Post", "Menu Creative", "Social Media Graphics", "Color Grading"],
  },
  {
    id: "this-or-that",
    title: "This or That — Interactive Engagement Post",
    client: "Creative Brand & Community",
    category: "social",
    categoryLabel: "Graphic Design · Social Engagement",
    imageUrl: "https://i.postimg.cc/fLSnKXCJ/8-8-2026-This-That.png",
    description:
      "Split-screen interactive comparison banner designed for high social media community engagement, opinion voting, and brand interaction.",
    role: "Social Media Creative Designer",
    deliverables: ["Interactive Post Design", "Engagement Graphic", "Community Carousel", "Split-Screen Layout"],
  },
  {
    id: "can-cover-design",
    title: "Beverage Can Packaging & Label Design",
    client: "Refresh Beverage Co.",
    category: "brand",
    categoryLabel: "Graphic Design · Packaging",
    imageUrl: "https://i.postimg.cc/gJLFDRsx/9-8-2026-can-cover-project-design.png",
    description:
      "Full wrap-around beverage can label design and packaging mockup with modern geometric patterns, bold logotype, and flavor accents.",
    role: "Packaging & Label Designer",
    deliverables: ["Packaging Label Design", "3D Can Mockup", "Print Die-Line", "Flavor Identity"],
  },
  {
    id: "burger-food-design",
    title: "Gourmet Burger — Delicious Food Poster",
    client: "Fast Food & Gourmet Diner",
    category: "social",
    categoryLabel: "Graphic Design · Restaurant Ad",
    imageUrl: "https://i.postimg.cc/85fQHW4s/9-8-2026-Food-design.png",
    description:
      "Eye-catching promotional food creative featuring stacked gourmet burgers, sizzling elements, punchy typography, and energetic promotional badges.",
    role: "Visual Commercial Designer",
    deliverables: ["Food Ad Poster", "Billboard & Banner", "Instagram Post", "Special Offer Creative"],
  },
  {
    id: "mini-big-chips",
    title: "Mini Big Chips — Snack Packaging & Promo",
    client: "Crispy Snack Foods",
    category: "brand",
    categoryLabel: "Graphic Design · Snack Branding",
    imageUrl: "https://i.postimg.cc/9Mw5pTb4/9-8-2026-mini-big-chips.png",
    description:
      "Vibrant snack food package design and promotional campaign creative with bold punchy colors, mascot styling, and appetizing crunch visuals.",
    role: "Packaging & Visual Designer",
    deliverables: ["Snack Packaging", "Campaign Ad", "Typography Art", "Social Media Launch"],
  },
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: "tomas",
    quote:
      "Afrahim joined for six weeks and left us with a product that finally felt finished. He asks the questions nobody else on the team thinks to ask — and then quietly answers them in the design.",
    author: "Tomás Rocha",
    role: "Co-founder",
    company: "Halo",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "ingrid",
    quote:
      "Our brand went from a folder of mismatched files to a system the whole company actually uses. Marketing, product, and sales finally look like the same company. Worth every euro.",
    author: "Ingrid Halvorsen",
    role: "Head of Design",
    company: "Terra",
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "daniel",
    quote:
      "I've hired a lot of freelancers. Afrahim is the rare one who makes the whole team better while he's here. Calm, sharp, generous with feedback. We rebooked him before the first project even wrapped.",
    author: "Daniel Osei",
    role: "VP Product",
    company: "Beacon",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
];
