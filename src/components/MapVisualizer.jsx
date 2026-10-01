import React from "react";
import { MapPin, Navigation, Car, Compass } from "lucide-react";
import { restaurantInfo } from "../data/restaurantInfo";

export default function MapVisualizer({ onOpenToast }) {
  const handleOpenGoogleMaps = () => {
    const query = encodeURIComponent("Gulshan Avenue, Road 134, Dhaka 1212, Bangladesh");
    window.open(`https://maps.google.com/?q=${query}`, "_blank");
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("House 18, Road 134, Gulshan Avenue, Gulshan-2, Dhaka 1212");
    if (onOpenToast) {
      onOpenToast("Address copied to clipboard");
    }
  };

  return (
    <div className="relative bg-[#1A1814] border border-[#F1E9DA]/10 overflow-hidden">
      {/* Visual Architectural Map Graphic */}
      <div className="relative h-80 sm:h-96 w-full bg-[#13110E] overflow-hidden flex items-center justify-center">
        {/* Subtle grid lines mimicking architectural blueprint */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#9B6B43 1px, transparent 1px), radial-gradient(#F1E9DA 1px, #13110E 1px)`,
            backgroundSize: `40px 40px`,
            backgroundPosition: `0 0, 20px 20px`
          }}
        />

        {/* Abstract road vectors */}
        <svg
          className="absolute inset-0 w-full h-full opacity-35"
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
        >
          {/* Main Gulshan Avenue */}
          <path
            d="M 100 400 L 400 0"
            stroke="#9B6B43"
            strokeWidth="5"
            strokeDasharray="8,4"
            fill="none"
          />
          {/* Road 134 intersecting */}
          <path
            d="M 150 150 L 750 250"
            stroke="#F1E9DA"
            strokeWidth="3"
            strokeOpacity="0.4"
            fill="none"
          />
          {/* Secondary streets */}
          <path
            d="M 300 350 L 600 50"
            stroke="#8F877B"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            fill="none"
          />
          <path
            d="M 50 200 L 500 380"
            stroke="#8F877B"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            fill="none"
          />
          {/* Gulshan Lake curved contour */}
          <path
            d="M 550 400 C 620 280, 680 180, 780 0"
            stroke="#3B4856"
            strokeWidth="24"
            strokeOpacity="0.35"
            fill="none"
          />
        </svg>

        {/* Pin Location for Noir & Thyme */}
        <div className="relative z-10 flex flex-col items-center animate-pulse">
          <div className="w-12 h-12 bg-[#9B6B43] rounded-full flex items-center justify-center text-[#FAF8F3] shadow-2xl border-2 border-[#FAF8F3]/30">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="mt-2 bg-[#171512]/95 border border-[#9B6B43]/50 px-3 py-1 text-center shadow-xl">
            <span className="font-serif text-sm text-[#F1E9DA] font-medium block">
              Noir &amp; Thyme
            </span>
            <span className="text-[10px] text-[#9B6B43] uppercase tracking-wider block font-sans">
              Gulshan-2 · Road 134
            </span>
          </div>
        </div>

        {/* Water / Lake Label */}
        <div className="absolute right-8 top-8 text-[11px] uppercase tracking-[0.25em] text-[#8F877B]/60 font-mono">
          Gulshan Lake Basin
        </div>

        {/* GPS Coordinates watermark */}
        <div className="absolute left-6 bottom-6 flex items-center gap-2 text-xs font-mono text-[#8F877B] bg-[#171512]/80 px-3 py-1.5 border border-[#F1E9DA]/10 backdrop-blur-sm">
          <Compass className="w-3.5 h-3.5 text-[#9B6B43]" />
          <span>{restaurantInfo.address.coordinates}</span>
        </div>
      </div>

      {/* Map Action Banner */}
      <div className="p-6 sm:p-8 bg-[#1E1B16] hairline-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#9B6B43] font-semibold mb-1">
            <Car className="w-4 h-4" />
            <span>Porte-Cochère &amp; Valet</span>
          </div>
          <p className="text-xs sm:text-sm text-[#8F877B] font-sans max-w-lg leading-relaxed">
            Private valet attendants welcome guests at the main gates on Road 134. Accessible from Gulshan-2 Circle within 3 minutes.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleCopyAddress}
            className="px-4 py-2.5 text-xs uppercase tracking-[0.15em] border border-[#F1E9DA]/20 text-[#FAF8F3] hover:border-[#9B6B43] hover:text-[#9B6B43] transition-colors"
          >
            Copy Address
          </button>
          <button
            onClick={handleOpenGoogleMaps}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.15em] bg-[#9B6B43] hover:bg-[#B57F52] text-[#FAF8F3] transition-colors font-medium cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open in Maps</span>
          </button>
        </div>
      </div>
    </div>
  );
}
