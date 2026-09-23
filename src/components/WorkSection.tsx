import React, { useState, useRef, useEffect } from "react";
import {
  ArrowUpRight,
  Play,
  Film,
  Layers,
  Palette,
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Maximize2,
} from "lucide-react";
import { ProjectItem, VideoItem, PROJECTS_LIST, VIDEOS_LIST } from "../portfolioData";
import { VideoPlayerModal } from "./VideoPlayerModal";

interface WorkSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onSelectVideo?: (video: VideoItem) => void;
}

type MainFilter = "all" | "graphic-design" | "video-editing";
type VideoSubFilter = "all-videos" | "short-form" | "long-form";

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject, onSelectVideo }) => {
  const [mainFilter, setMainFilter] = useState<MainFilter>("all");
  const [videoSubFilter, setVideoSubFilter] = useState<VideoSubFilter>("all-videos");
  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null);

  // Refs for smooth horizontal scrolling
  const shortVideosRef = useRef<HTMLDivElement>(null);
  const longVideosRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);

  const handleVideoClick = (video: VideoItem) => {
    setActiveModalVideo(video);
    if (onSelectVideo) onSelectVideo(video);
  };

  const scrollContainer = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right", amount = 360) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  const shortVideos = VIDEOS_LIST.filter((v) => v.type === "short-form");
  const longVideos = VIDEOS_LIST.filter((v) => v.type === "long-form");

  return (
    <section id="work" className="py-24 md:py-32 bg-[#ece7d9]" aria-labelledby="work-h">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Two Distinct Titles */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6 text-left">
          <div className="space-y-3.5 max-w-2xl">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#d98d12]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#687971]">
                Portfolio &amp; Selected Works
              </span>
            </div>

            {/* Title 1: Main Title */}
            <h2
              id="work-h"
              className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#11241d] tracking-tight leading-[1.15]"
            >
              Crafting Bold Visuals &amp; Engaging Stories
            </h2>

            {/* Title 2: Secondary Descriptive Title */}
            <p className="text-base sm:text-lg text-[#4f6158] leading-relaxed">
              Explore my featured works across brand identity, social media creatives, short-form reels, and long-form video edits crafted to communicate with impact.
            </p>
          </div>

          {/* Primary Filter Tabs: All Works, Graphic Design, Video Editing */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-[#dfd8c5] border border-[#d2c9b4] self-start">
            <button
              type="button"
              role="tab"
              aria-selected={mainFilter === "all"}
              onClick={() => setMainFilter("all")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-display font-bold transition-all ${
                mainFilter === "all"
                  ? "bg-[#0e261f] text-[#f7f4ec] shadow-sm"
                  : "text-[#3f5147] hover:text-[#11241d] hover:bg-[#d5ccb6]/60"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Works</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={mainFilter === "graphic-design"}
              onClick={() => setMainFilter("graphic-design")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-display font-bold transition-all ${
                mainFilter === "graphic-design"
                  ? "bg-[#0e261f] text-[#f7f4ec] shadow-sm"
                  : "text-[#3f5147] hover:text-[#11241d] hover:bg-[#d5ccb6]/60"
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Graphic Design</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={mainFilter === "video-editing"}
              onClick={() => setMainFilter("video-editing")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-display font-bold transition-all ${
                mainFilter === "video-editing"
                  ? "bg-[#0e261f] text-[#f7f4ec] shadow-sm"
                  : "text-[#3f5147] hover:text-[#11241d] hover:bg-[#d5ccb6]/60"
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Video Editing</span>
              <span className="w-2 h-2 rounded-full bg-[#d98d12]" />
            </button>
          </div>
        </div>

        {/* Sub-Filter for Video Editing */}
        {mainFilter === "video-editing" && (
          <div className="mb-10 p-3 rounded-2xl bg-[#e3dcce] border border-[#d2c9b4] flex flex-wrap items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1f382e] pl-2">
              <Film className="w-4 h-4 text-[#d98d12]" />
              <span>Video Formats:</span>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                type="button"
                onClick={() => setVideoSubFilter("all-videos")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-display font-bold transition-all ${
                  videoSubFilter === "all-videos"
                    ? "bg-[#0e261f] text-[#f7f4ec] shadow-sm"
                    : "bg-[#ece6d5] text-[#3f5147] hover:text-[#11241d] hover:bg-[#dad2be]"
                }`}
              >
                All Videos ({VIDEOS_LIST.length})
              </button>

              <button
                type="button"
                onClick={() => setVideoSubFilter("short-form")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-display font-bold transition-all ${
                  videoSubFilter === "short-form"
                    ? "bg-[#d98d12] text-[#0e261f] shadow-sm"
                    : "bg-[#ece6d5] text-[#3f5147] hover:text-[#11241d] hover:bg-[#dad2be]"
                }`}
              >
                <span>Short-Form</span>
                <span className="px-1.5 py-0.2 rounded-full bg-black/10 text-[10px]">
                  {shortVideos.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setVideoSubFilter("long-form")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-display font-bold transition-all ${
                  videoSubFilter === "long-form"
                    ? "bg-[#d98d12] text-[#0e261f] shadow-sm"
                    : "bg-[#ece6d5] text-[#3f5147] hover:text-[#11241d] hover:bg-[#dad2be]"
                }`}
              >
                <span>Long-Form</span>
                <span className="px-1.5 py-0.2 rounded-full bg-black/10 text-[10px]">
                  {longVideos.length}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW 1: "ALL WORKS" TAB
            Rows: 
            1. Short-Form Videos (Single Row Slider with Left/Right Arrows)
            2. Long-Form Videos (Single Row Slider with Left/Right Arrows)
            3. Graphic Design (Single Row Slider with Left/Right Arrows)
            ======================================================== */}
        {mainFilter === "all" && (
          <div className="space-y-16 text-left">
            {/* 1. Short-Form Videos Row */}
            <div className="relative">
              {/* Header with Title & Arrow Controls */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#d8d0bd]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d98d12]" />
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#11241d]">
                    Short-Form Video Edits (9:16)
                  </h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#ded6c2] text-[#3d5045]">
                    {shortVideos.length} Reels
                  </span>
                </div>

                {/* Arrow Navigation Controls */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-[#6c8075] hidden sm:inline">
                    Scroll horizontally
                  </span>
                  <button
                    type="button"
                    onClick={() => scrollContainer(shortVideosRef, "left", 320)}
                    className="w-8 h-8 rounded-full bg-[#dfd8c5] hover:bg-[#0e261f] text-[#11241d] hover:text-white border border-[#cfc5b0] flex items-center justify-center transition-all shadow-sm"
                    aria-label="Scroll Short-Form Videos Left"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollContainer(shortVideosRef, "right", 320)}
                    className="w-8 h-8 rounded-full bg-[#dfd8c5] hover:bg-[#0e261f] text-[#11241d] hover:text-white border border-[#cfc5b0] flex items-center justify-center transition-all shadow-sm"
                    aria-label="Scroll Short-Form Videos Right"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Single Row Slider */}
              <div className="relative group">
                {/* Floating Side Arrow: Left */}
                <button
                  type="button"
                  onClick={() => scrollContainer(shortVideosRef, "left", 320)}
                  className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0e261f]/90 hover:bg-[#d98d12] text-white hover:text-[#0e261f] shadow-xl border border-white/20 hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous short videos"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Horizontal Scroll Track (Single Line) */}
                <div
                  ref={shortVideosRef}
                  className="flex flex-nowrap overflow-x-auto no-scrollbar scroll-smooth gap-4 sm:gap-5 pb-3 pt-1 -mx-1 px-1"
                >
                  {shortVideos.map((video) => (
                    <div
                      key={video.id}
                      className="w-[200px] sm:w-[240px] md:w-[260px] flex-shrink-0"
                    >
                      <VideoCard video={video} onPlay={() => handleVideoClick(video)} />
                    </div>
                  ))}
                </div>

                {/* Floating Side Arrow: Right */}
                <button
                  type="button"
                  onClick={() => scrollContainer(shortVideosRef, "right", 320)}
                  className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0e261f]/90 hover:bg-[#d98d12] text-white hover:text-[#0e261f] shadow-xl border border-white/20 hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next short videos"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 2. Long-Form Videos Row */}
            <div className="relative">
              {/* Header with Title & Arrow Controls */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#d8d0bd]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1b4436]" />
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#11241d]">
                    Long-Form Video Production (16:9)
                  </h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#ded6c2] text-[#3d5045]">
                    {longVideos.length} Videos
                  </span>
                </div>

                {/* Arrow Navigation Controls */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-[#6c8075] hidden sm:inline">
                    Scroll horizontally
                  </span>
                  <button
                    type="button"
                    onClick={() => scrollContainer(longVideosRef, "left", 420)}
                    className="w-8 h-8 rounded-full bg-[#dfd8c5] hover:bg-[#0e261f] text-[#11241d] hover:text-white border border-[#cfc5b0] flex items-center justify-center transition-all shadow-sm"
                    aria-label="Scroll Long-Form Videos Left"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollContainer(longVideosRef, "right", 420)}
                    className="w-8 h-8 rounded-full bg-[#dfd8c5] hover:bg-[#0e261f] text-[#11241d] hover:text-white border border-[#cfc5b0] flex items-center justify-center transition-all shadow-sm"
                    aria-label="Scroll Long-Form Videos Right"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Single Row Slider */}
              <div className="relative group">
                {/* Floating Side Arrow: Left */}
                <button
                  type="button"
                  onClick={() => scrollContainer(longVideosRef, "left", 420)}
                  className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0e261f]/90 hover:bg-[#d98d12] text-white hover:text-[#0e261f] shadow-xl border border-white/20 hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous long videos"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Horizontal Scroll Track (Single Line) */}
                <div
                  ref={longVideosRef}
                  className="flex flex-nowrap overflow-x-auto no-scrollbar scroll-smooth gap-4 sm:gap-6 pb-3 pt-1 -mx-1 px-1"
                >
                  {longVideos.map((video) => (
                    <div
                      key={video.id}
                      className="w-[280px] sm:w-[380px] md:w-[460px] flex-shrink-0"
                    >
                      <VideoCard video={video} onPlay={() => handleVideoClick(video)} />
                    </div>
                  ))}
                </div>

                {/* Floating Side Arrow: Right */}
                <button
                  type="button"
                  onClick={() => scrollContainer(longVideosRef, "right", 420)}
                  className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0e261f]/90 hover:bg-[#d98d12] text-white hover:text-[#0e261f] shadow-xl border border-white/20 hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next long videos"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 3. Graphic Design Works Row */}
            <div className="relative">
              {/* Header with Title & Arrow Controls */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#d8d0bd]">
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-[#d98d12]" />
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#11241d]">
                    Graphic Design &amp; Brand Visuals
                  </h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#ded6c2] text-[#3d5045]">
                    {PROJECTS_LIST.length} Projects
                  </span>
                </div>

                {/* Arrow Navigation Controls */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-[#6c8075] hidden sm:inline">
                    Scroll horizontally
                  </span>
                  <button
                    type="button"
                    onClick={() => scrollContainer(graphicDesignRef, "left", 340)}
                    className="w-8 h-8 rounded-full bg-[#dfd8c5] hover:bg-[#0e261f] text-[#11241d] hover:text-white border border-[#cfc5b0] flex items-center justify-center transition-all shadow-sm"
                    aria-label="Scroll Graphic Design Left"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollContainer(graphicDesignRef, "right", 340)}
                    className="w-8 h-8 rounded-full bg-[#dfd8c5] hover:bg-[#0e261f] text-[#11241d] hover:text-white border border-[#cfc5b0] flex items-center justify-center transition-all shadow-sm"
                    aria-label="Scroll Graphic Design Right"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Single Row Slider */}
              <div className="relative group">
                {/* Floating Side Arrow: Left */}
                <button
                  type="button"
                  onClick={() => scrollContainer(graphicDesignRef, "left", 340)}
                  className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0e261f]/90 hover:bg-[#d98d12] text-white hover:text-[#0e261f] shadow-xl border border-white/20 hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous graphic designs"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Horizontal Scroll Track (Single Line) */}
                <div
                  ref={graphicDesignRef}
                  className="flex flex-nowrap overflow-x-auto no-scrollbar scroll-smooth gap-4 sm:gap-6 pb-3 pt-1 -mx-1 px-1"
                >
                  {PROJECTS_LIST.map((project) => (
                    <div
                      key={project.id}
                      className="w-[240px] sm:w-[290px] md:w-[320px] flex-shrink-0"
                    >
                      <GraphicDesignCard
                        project={project}
                        onClick={() => onSelectProject(project)}
                      />
                    </div>
                  ))}
                </div>

                {/* Floating Side Arrow: Right */}
                <button
                  type="button"
                  onClick={() => scrollContainer(graphicDesignRef, "right", 340)}
                  className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0e261f]/90 hover:bg-[#d98d12] text-white hover:text-[#0e261f] shadow-xl border border-white/20 hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next graphic designs"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW 2: "GRAPHIC DESIGN" ONLY TAB
            ======================================================== */}
        {mainFilter === "graphic-design" && (
          <div className="space-y-6 text-left animate-in fade-in duration-300">
            {/* Header with Arrow Controls */}
            <div className="flex items-center justify-between pb-2 border-b border-[#d8d0bd]">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-[#d98d12]" />
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#11241d]">
                  Selected Graphic Design Works
                </h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#ded6c2] text-[#3d5045]">
                  {PROJECTS_LIST.length} Projects
                </span>
              </div>

              {/* Arrow Navigation Controls */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-medium text-[#6c8075] hidden sm:inline">
                  Slide designs
                </span>
                <button
                  type="button"
                  onClick={() => scrollContainer(graphicDesignRef, "left", 340)}
                  className="w-9 h-9 rounded-full bg-[#dfd8c5] hover:bg-[#0e261f] text-[#11241d] hover:text-white border border-[#cfc5b0] flex items-center justify-center transition-all shadow-sm"
                  aria-label="Scroll Graphic Design Left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollContainer(graphicDesignRef, "right", 340)}
                  className="w-9 h-9 rounded-full bg-[#dfd8c5] hover:bg-[#0e261f] text-[#11241d] hover:text-white border border-[#cfc5b0] flex items-center justify-center transition-all shadow-sm"
                  aria-label="Scroll Graphic Design Right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Single Row Slider with Floating Arrow Controls */}
            <div className="relative group">
              <button
                type="button"
                onClick={() => scrollContainer(graphicDesignRef, "left", 340)}
                className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0e261f]/90 hover:bg-[#d98d12] text-white hover:text-[#0e261f] shadow-xl border border-white/20 hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous graphic designs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div
                ref={graphicDesignRef}
                className="flex flex-nowrap overflow-x-auto no-scrollbar scroll-smooth gap-5 sm:gap-6 pb-4 pt-1 -mx-1 px-1"
              >
                {PROJECTS_LIST.map((project) => (
                  <div
                    key={project.id}
                    className="w-[260px] sm:w-[320px] md:w-[350px] flex-shrink-0"
                  >
                    <GraphicDesignCard
                      project={project}
                      onClick={() => onSelectProject(project)}
                    />
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollContainer(graphicDesignRef, "right", 340)}
                className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0e261f]/90 hover:bg-[#d98d12] text-white hover:text-[#0e261f] shadow-xl border border-white/20 hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next graphic designs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW 3: "VIDEO EDITING" TAB
            ======================================================== */}
        {mainFilter === "video-editing" && (
          <div className="space-y-14 animate-in fade-in duration-300 text-left">
            {/* Short-Form Row */}
            {(videoSubFilter === "all-videos" || videoSubFilter === "short-form") && (
              <div className="relative">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#d8d0bd]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d98d12]" />
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#11241d]">
                      Short-Form Motion &amp; Reels (9:16)
                    </h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#ded6c2] text-[#3d5045]">
                      {shortVideos.length} Reels
                    </span>
                  </div>

                  {/* Header Arrows */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium text-[#6c8075] hidden sm:inline">
                      Slide reels
                    </span>
                    <button
                      type="button"
                      onClick={() => scrollContainer(shortVideosRef, "left", 320)}
                      className="w-8 h-8 rounded-full bg-[#dfd8c5] hover:bg-[#0e261f] text-[#11241d] hover:text-white border border-[#cfc5b0] flex items-center justify-center transition-all shadow-sm"
                      aria-label="Scroll Short Videos Left"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollContainer(shortVideosRef, "right", 320)}
                      className="w-8 h-8 rounded-full bg-[#dfd8c5] hover:bg-[#0e261f] text-[#11241d] hover:text-white border border-[#cfc5b0] flex items-center justify-center transition-all shadow-sm"
                      aria-label="Scroll Short Videos Right"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="relative group">
                  <button
                    type="button"
                    onClick={() => scrollContainer(shortVideosRef, "left", 320)}
                    className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0e261f]/90 hover:bg-[#d98d12] text-white hover:text-[#0e261f] shadow-xl border border-white/20 hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Previous shorts"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div
                    ref={shortVideosRef}
                    className="flex flex-nowrap overflow-x-auto no-scrollbar scroll-smooth gap-4 sm:gap-5 pb-3 pt-1 -mx-1 px-1"
                  >
                    {shortVideos.map((video) => (
                      <div
                        key={video.id}
                        className="w-[200px] sm:w-[240px] md:w-[260px] flex-shrink-0"
                      >
                        <VideoCard video={video} onPlay={() => handleVideoClick(video)} />
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollContainer(shortVideosRef, "right", 320)}
                    className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0e261f]/90 hover:bg-[#d98d12] text-white hover:text-[#0e261f] shadow-xl border border-white/20 hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Next shorts"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Long-Form Row */}
            {(videoSubFilter === "all-videos" || videoSubFilter === "long-form") && (
              <div className="relative">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#d8d0bd]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1b4436]" />
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#11241d]">
                      Long-Form Video Production &amp; Documentaries (16:9)
                    </h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#ded6c2] text-[#3d5045]">
                      {longVideos.length} Videos
                    </span>
                  </div>

                  {/* Header Arrows */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium text-[#6c8075] hidden sm:inline">
                      Slide videos
                    </span>
                    <button
                      type="button"
                      onClick={() => scrollContainer(longVideosRef, "left", 420)}
                      className="w-8 h-8 rounded-full bg-[#dfd8c5] hover:bg-[#0e261f] text-[#11241d] hover:text-white border border-[#cfc5b0] flex items-center justify-center transition-all shadow-sm"
                      aria-label="Scroll Long Videos Left"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollContainer(longVideosRef, "right", 420)}
                      className="w-8 h-8 rounded-full bg-[#dfd8c5] hover:bg-[#0e261f] text-[#11241d] hover:text-white border border-[#cfc5b0] flex items-center justify-center transition-all shadow-sm"
                      aria-label="Scroll Long Videos Right"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="relative group">
                  <button
                    type="button"
                    onClick={() => scrollContainer(longVideosRef, "left", 420)}
                    className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0e261f]/90 hover:bg-[#d98d12] text-white hover:text-[#0e261f] shadow-xl border border-white/20 hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Previous long videos"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div
                    ref={longVideosRef}
                    className="flex flex-nowrap overflow-x-auto no-scrollbar scroll-smooth gap-4 sm:gap-6 pb-3 pt-1 -mx-1 px-1"
                  >
                    {longVideos.map((video) => (
                      <div
                        key={video.id}
                        className="w-[280px] sm:w-[380px] md:w-[460px] flex-shrink-0"
                      >
                        <VideoCard video={video} onPlay={() => handleVideoClick(video)} />
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollContainer(longVideosRef, "right", 420)}
                    className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0e261f]/90 hover:bg-[#d98d12] text-white hover:text-[#0e261f] shadow-xl border border-white/20 hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Next long videos"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Video Player Modal */}
      <VideoPlayerModal
        video={activeModalVideo}
        onClose={() => setActiveModalVideo(null)}
      />
    </section>
  );
};

// ========================================================
// Sub-Component: Video Card with Cursor Hover & Mobile In-View Autoplay
// ========================================================
interface VideoCardProps {
  video: VideoItem;
  onPlay: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onPlay }) => {
  const isShort = video.type === "short-form";
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const cardRef = useRef<HTMLElement>(null);
  const hoverTimeoutRef = useRef<number | null>(null);

  // Mobile / Tablet view: Play automatically when video scrolls into view
  useEffect(() => {
    const cardEl = cardRef.current;
    if (!cardEl) return;

    // Detect if device is touch or mobile/tablet screen
    const isMobileOrTablet = () => {
      if (typeof window === "undefined") return false;
      return (
        window.innerWidth < 1024 ||
        window.matchMedia("(hover: none)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
      );
    };

    if (!isMobileOrTablet()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setIsInView(true);
          } else if (entry.intersectionRatio < 0.25) {
            setIsInView(false);
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75],
        rootMargin: "0px",
      }
    );

    observer.observe(cardEl);
    return () => {
      observer.disconnect();
    };
  }, []);

  // Desktop view: Play automatically when cursor hovers
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
    }
    // 100ms debounce to prevent flashing when casually moving cursor across screen
    hoverTimeoutRef.current = window.setTimeout(() => {
      setIsHovered(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
    }
    setIsHovered(false);
  };

  const isPlaying = isHovered || isInView;

  return (
    <article
      ref={cardRef}
      onClick={onPlay}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-2xl overflow-hidden bg-[#0d221a] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-[#1b3d30]/60 ${
        isShort ? "aspect-[9/15]" : "aspect-[16/10]"
      }`}
    >
      {/* Thumbnail Image (always present in background for instant fallback) */}
      <img
        src={video.thumbnailUrl}
        alt={video.title}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out ${
          isPlaying ? "opacity-0 scale-100" : "opacity-100 group-hover:scale-105"
        }`}
        loading="lazy"
        referrerPolicy="no-referrer"
      />

      {/* Autoplay Video Iframe (Runs on Hover for PC, or when in display for Mobile/Tablet) */}
      {isPlaying && (
        <div className="absolute inset-0 w-full h-full bg-black overflow-hidden z-0">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&mute=${
              isMuted ? 1 : 0
            }&loop=1&playlist=${video.youtubeId}&playsinline=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1`}
            title={video.title}
            className="w-full h-full border-0 pointer-events-none scale-[1.03]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="eager"
          />
        </div>
      )}

      {/* Gradient Overlays */}
      <div
        className={`absolute inset-0 bg-gradient-to-t transition-all duration-300 z-10 pointer-events-none ${
          isPlaying
            ? "from-[#081711]/90 via-transparent to-black/40"
            : "from-[#081711]/95 via-[#081711]/50 to-black/30 group-hover:via-[#081711]/40"
        }`}
      />

      {/* Top Bar with Badge, Audio Mute Toggle, Fullscreen Expand & YouTube link */}
      <div className="relative z-20 p-3 sm:p-4 flex items-center justify-between w-full">
        {isPlaying ? (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500 text-white shadow-md animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            Playing
          </span>
        ) : (
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider ${
              isShort
                ? "bg-[#d98d12] text-[#0e261f]"
                : "bg-[#1b4335] text-[#9aedd0]"
            }`}
          >
            <Play className="w-2.5 h-2.5 fill-current" />
            {isShort ? "Shorts · 9:16" : "Long-Form · 16:9"}
          </span>
        )}

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          {/* Audio Mute/Unmute Toggle (visible when playing) */}
          {isPlaying && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMuted(!isMuted);
              }}
              className="w-7 h-7 rounded-full bg-black/60 hover:bg-[#d98d12] text-white hover:text-[#0e261f] flex items-center justify-center transition-colors shadow-md backdrop-blur-sm"
              title={isMuted ? "Sound is off (Click to unmute)" : "Sound is on (Click to mute)"}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#d98d12]" />}
            </button>
          )}

          {/* Fullscreen Modal Expand Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPlay();
            }}
            className="w-7 h-7 rounded-full bg-black/60 hover:bg-[#d98d12] text-white hover:text-[#0e261f] flex items-center justify-center transition-colors shadow-md backdrop-blur-sm"
            title="Expand video modal"
            aria-label="Expand video"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>

          {/* YouTube Link */}
          <a
            href={video.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-7 h-7 rounded-full bg-black/60 hover:bg-[#d98d12] text-white hover:text-[#0e261f] flex items-center justify-center transition-colors shadow-md backdrop-blur-sm"
            title="Open in YouTube"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Centered Golden Play Button (visible when not playing) */}
      {!isPlaying && (
        <div className="relative z-10 my-auto flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#d98d12] text-[#0e261f] flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-[#f0a62d] transition-all duration-300">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
          </div>
        </div>
      )}

      {/* Spacer when playing */}
      {isPlaying && <div className="my-auto" />}

      {/* Bottom Info */}
      <div className="relative z-20 p-3 sm:p-4 text-left space-y-1 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
        <h4 className="font-display font-bold text-xs sm:text-sm text-[#f7f4ec] group-hover:text-[#f8edd6] transition-colors line-clamp-2 leading-snug">
          {video.title}
        </h4>

        <div className="flex items-center gap-1.5 pt-0.5 text-[10px] sm:text-[11px] text-[#96ad9f]">
          <Sparkles className="w-3 h-3 text-[#d98d12] shrink-0" />
          <span className="truncate">{video.tags.slice(0, 2).join(" · ")}</span>
        </div>
      </div>
    </article>
  );
};

// ========================================================
// Sub-Component: Graphic Design Card
// ========================================================
interface GraphicDesignCardProps {
  project: ProjectItem;
  onClick: () => void;
}

const GraphicDesignCard: React.FC<GraphicDesignCardProps> = ({ project, onClick }) => {
  return (
    <article
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden bg-[#0d221b] aspect-[4/5] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 select-none text-left border border-[#1b3d30]/50"
    >
      {/* Image */}
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
        referrerPolicy="no-referrer"
      />

      {/* Gradient Scrim & Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#091b15]/95 via-[#091b15]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

      {/* Floating Top Right Arrow */}
      <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-[#0e261f]/80 backdrop-blur-sm border border-white/20 text-[#f7f4ec] flex items-center justify-center group-hover:bg-[#d98d12] group-hover:text-[#0e261f] transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm">
        <ArrowUpRight className="w-3.5 h-3.5" />
      </div>

      {/* Bottom Project Info */}
      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
        <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-[#d98d12] mb-1">
          {project.categoryLabel}
        </span>
        <h3 className="font-display font-bold text-sm sm:text-base text-[#f7f4ec] group-hover:text-[#f8edd6] transition-colors line-clamp-2 leading-snug">
          {project.title}
        </h3>
      </div>
    </article>
  );
};
