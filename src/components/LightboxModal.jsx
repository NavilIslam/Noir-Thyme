import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export default function LightboxModal({ items, activeIndex, isOpen, onClose, onNavigate }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((activeIndex - 1 + items.length) % items.length);
      }
      if (e.key === "ArrowRight") {
        onNavigate((activeIndex + 1) % items.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, activeIndex, items.length, onClose, onNavigate]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[activeIndex];

  const handlePrev = (e) => {
    e.stopPropagation();
    onNavigate((activeIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onNavigate((activeIndex + 1) % items.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C0B0A]/95 backdrop-blur-lg select-none"
      onClick={onClose}
    >
      {/* Top Bar with Info & Close */}
      <div className="absolute top-0 inset-x-0 p-6 flex items-center justify-between z-20 pointer-events-none">
        <div className="text-xs uppercase tracking-[0.2em] text-[#B9AC98] font-sans">
          Noir &amp; Thyme · Imagery ({activeIndex + 1} / {items.length})
        </div>
        <button
          onClick={onClose}
          aria-label="Close image viewer"
          className="p-3 text-[#8F877B] hover:text-[#FAF8F3] transition-colors pointer-events-auto cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous image"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3.5 text-[#B9AC98] hover:text-[#FAF8F3] bg-[#171512]/60 hover:bg-[#211E19] border border-[#F1E9DA]/10 transition-all z-20 cursor-pointer hidden sm:block"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next image"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3.5 text-[#B9AC98] hover:text-[#FAF8F3] bg-[#171512]/60 hover:bg-[#211E19] border border-[#F1E9DA]/10 transition-all z-20 cursor-pointer hidden sm:block"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Stage */}
      <div
        className="relative max-w-5xl max-h-[80vh] mx-4 flex flex-col items-center justify-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden shadow-2xl border border-[#F1E9DA]/10 bg-[#171512]">
          <img
            src={currentItem.image}
            alt={currentItem.alt || currentItem.title}
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption & Metadata */}
        <div className="w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-left">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#F1E9DA]">
              {currentItem.title}
            </h4>
            <p className="text-xs text-[#8F877B] font-sans mt-0.5 max-w-xl">
              {currentItem.caption}
            </p>
          </div>
          {currentItem.location && (
            <div className="flex items-center gap-1.5 text-xs text-[#9B6B43] tracking-wider uppercase font-mono shrink-0">
              <MapPin className="w-3.5 h-3.5" />
              <span>{currentItem.location}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
