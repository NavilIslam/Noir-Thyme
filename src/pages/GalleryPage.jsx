import React, { useState } from "react";
import { Maximize2, MapPin } from "lucide-react";
import { galleryItems, galleryCategories } from "../data/galleryData";

export default function GalleryPage({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-32 sm:pt-40 pb-24 text-[#FAF8F3]">
      {/* Header */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto text-center mb-16 animate-fade-slide-up">
        <span className="text-xs uppercase tracking-[0.3em] text-[#9B6B43] font-medium block mb-3 font-sans">
          Atmosphere &amp; Plates
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F1E9DA] font-light leading-tight">
          Visual Curation
        </h1>
        <p className="font-serif italic text-lg sm:text-xl text-[#B9AC98] mt-4 max-w-xl mx-auto">
          "A glimpse into our kitchen hearth, dining salons, cellar reserves, and seasonal plates."
        </p>
      </section>

      {/* Category Tabs (Clean wrapping, no cutoff on left/right) */}
      <div className="sticky top-20 z-30 bg-[#171512]/95 backdrop-blur-md hairline-b py-3 px-4 sm:px-8 lg:px-12 mb-12">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 py-1">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-5 py-2 text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "tab-btn-active"
                    : "text-[#8F877B] hover:text-[#FAF8F3] hover:bg-[#211E19] border border-[#F1E9DA]/5"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Masonry Asymmetric Grid with Staggered Fade-in on filter change */}
      <section
        key={activeCategory}
        className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto animate-fade-slide-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px] sm:auto-rows-[320px]">
          {filteredItems.map((item, idx) => {
            const globalIndex = galleryItems.findIndex((g) => g.id === item.id);

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(globalIndex >= 0 ? globalIndex : 0)}
                className={`group relative editorial-img-wrap bg-[#1C1915] cursor-pointer overflow-hidden border border-[#F1E9DA]/10 transition-all duration-500 hover:border-[#9B6B43]/50 shadow-lg ${
                  item.aspect === "landscape" && "md:col-span-2 md:row-span-1"
                } ${item.aspect === "portrait" && "row-span-2"} ${
                  item.aspect === "square" && "row-span-1"
                } ${idx < 6 ? `delay-${(idx % 6) + 1}` : ""}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-700 transform group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171512]/95 via-[#171512]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Top Corner Icon */}
                <div className="absolute top-4 right-4 p-2 bg-[#171512]/80 border border-[#F1E9DA]/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
                  <Maximize2 className="w-4 h-4 text-[#F1E9DA]" />
                </div>

                {/* Bottom Caption & Details */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
                  {item.location && (
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#9B6B43] font-mono mb-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  )}

                  <h3 className="font-serif text-xl sm:text-2xl text-[#F1E9DA] font-medium leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#8F877B] font-sans mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Photography */}
        <div className="mt-16 text-center text-xs text-[#8F877B] font-sans">
          <span>Click any photograph to view high-resolution editorial format with keyboard navigation (← / → / Esc).</span>
        </div>
      </section>
    </div>
  );
}
