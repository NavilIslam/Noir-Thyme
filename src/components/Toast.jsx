import React, { useEffect } from "react";
import { CheckCircle, Info, X } from "lucide-react";

export default function Toast({ message, type = "success", onClose, duration = 4000 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-md bg-[#211E19] border border-[#9B6B43]/40 text-[#FAF8F3] px-5 py-4 shadow-2xl shadow-black/80 flex items-start gap-3 transition-all transform animate-fade-in"
    >
      {type === "success" ? (
        <CheckCircle className="w-5 h-5 text-[#9B6B43] shrink-0 mt-0.5" />
      ) : (
        <Info className="w-5 h-5 text-[#B9AC98] shrink-0 mt-0.5" />
      )}
      <div className="text-sm font-sans flex-1 leading-relaxed">
        {message}
      </div>
      <button
        onClick={onClose}
        aria-label="Dismiss notification"
        className="text-[#8F877B] hover:text-[#FAF8F3] transition-colors p-1"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
