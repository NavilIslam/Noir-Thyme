import React, { useState, useEffect } from "react";
import { Menu as MenuIcon, X, ArrowRight, Calendar } from "lucide-react";

export default function Navbar({ currentRoute, onNavigate, onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", route: "home" },
    { label: "Menu", route: "menu" },
    { label: "About", route: "about" },
    { label: "Gallery", route: "gallery" },
    { label: "Contact", route: "contact" },
  ];

  const handleLinkClick = (route) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#171512]/92 backdrop-blur-md py-4 shadow-lg shadow-black/20"
            : "bg-gradient-to-b from-[#171512]/90 via-[#171512]/50 to-transparent py-6 sm:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo / Brand Mark */}
          <button
            onClick={() => handleLinkClick("home")}
            className="group text-left cursor-pointer focus:outline-none"
            aria-label="Noir and Thyme Homepage"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] text-[#F1E9DA] uppercase font-light block group-hover:text-[#FAF8F3] transition-colors">
              Noir &amp; Thyme
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#9B6B43] block mt-0.5 font-sans font-medium">
              Gulshan · Dhaka
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-9">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleLinkClick(link.route)}
                  className={`text-xs uppercase tracking-[0.2em] font-sans transition-all py-1 cursor-pointer ${
                    isActive
                      ? "text-[#F1E9DA] font-semibold tracking-[0.24em]"
                      : "text-[#8F877B] hover:text-[#FAF8F3]"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Action on Right */}
          <div className="hidden md:flex items-center space-x-5">
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-sans font-medium border border-[#9B6B43] text-[#F1E9DA] hover:bg-[#9B6B43] hover:text-[#FAF8F3] transition-all duration-300 group cursor-pointer"
            >
              <span>Reserve a Table</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={onOpenReservation}
              className="px-3.5 py-1.5 text-[11px] uppercase tracking-[0.12em] border border-[#9B6B43] text-[#F1E9DA] hover:bg-[#9B6B43] transition-colors"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              className="p-2 text-[#F1E9DA] hover:text-[#FAF8F3] transition-colors"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#171512] flex flex-col justify-between p-8 text-[#FAF8F3] animate-fade-in"
        >
          {/* Top Bar inside mobile menu */}
          <div className="flex items-center justify-between hairline-b pb-6">
            <div>
              <span className="font-serif text-2xl tracking-[0.18em] text-[#F1E9DA] uppercase">
                Noir &amp; Thyme
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#9B6B43] block mt-1">
                Dhaka · Est. 2026
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="p-2 text-[#8F877B] hover:text-[#FAF8F3] transition-colors"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="my-auto space-y-6 text-left">
            {navLinks.map((link, idx) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleLinkClick(link.route)}
                  className="group block w-full text-left cursor-pointer"
                >
                  <div className="flex items-baseline space-x-4">
                    <span className="text-xs font-mono text-[#9B6B43]">
                      0{idx + 1}
                    </span>
                    <span
                      className={`font-serif text-3xl sm:text-4xl transition-colors ${
                        isActive
                          ? "text-[#F1E9DA] font-semibold italic"
                          : "text-[#8F877B] group-hover:text-[#FAF8F3]"
                      }`}
                    >
                      {link.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Bottom actions & info */}
          <div className="space-y-6 hairline-t pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full inline-flex items-center justify-center gap-3 bg-[#9B6B43] hover:bg-[#B57F52] text-[#FAF8F3] py-3.5 text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>

            <div className="text-xs text-[#8F877B] flex justify-between font-sans">
              <span>Road 134, Gulshan Avenue, Dhaka</span>
              <span className="text-[#9B6B43]">5:30 PM — Midnight</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
