import React from "react";
import { ArrowUpRight, MapPin, Mail, Phone, Clock } from "lucide-react";
import { restaurantInfo } from "../data/restaurantInfo";

export default function Footer({ onNavigate, onOpenReservation }) {
  const handleNav = (route) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#14120F] text-[#FAF8F3] hairline-t relative overflow-hidden">
      {/* Decorative hairline grid element */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-20 pb-12">
        {/* Top Branding Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 hairline-b">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#9B6B43] font-medium block">
              {restaurantInfo.est}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F1E9DA] tracking-[0.1em] font-light uppercase">
              Noir &amp; Thyme
            </h2>
            <p className="font-serif italic text-xl text-[#B9AC98] max-w-md">
              "{restaurantInfo.tagline}"
            </p>
            <p className="text-sm text-[#8F877B] max-w-md font-sans leading-relaxed">
              Modern European cooking shaped by seasonal ingredients, local character, and a quiet respect for patient craftsmanship.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-3 bg-[#9B6B43] hover:bg-[#B57F52] text-[#FAF8F3] px-6 py-3 text-xs uppercase tracking-[0.18em] font-medium transition-colors"
              >
                <span>Book an Intimate Table</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#B9AC98] font-sans font-semibold">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm font-sans">
              {[
                { label: "Home", route: "home" },
                { label: "Seasonal Menu", route: "menu" },
                { label: "Our Story & Chef", route: "about" },
                { label: "Visual Gallery", route: "gallery" },
                { label: "Find & Contact Us", route: "contact" },
              ].map((item) => (
                <li key={item.route}>
                  <button
                    onClick={() => handleNav(item.route)}
                    className="text-[#8F877B] hover:text-[#F1E9DA] transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-4 space-y-4 font-sans text-sm">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#B9AC98] font-semibold">
              Gulshan Destination
            </h3>
            
            <div className="space-y-3 text-[#8F877B]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9B6B43] shrink-0 mt-1" />
                <div>
                  <p className="text-[#FAF8F3] font-medium">{restaurantInfo.address.line1}</p>
                  <p>{restaurantInfo.address.line2}</p>
                  <p>{restaurantInfo.address.city} {restaurantInfo.address.postal}, {restaurantInfo.address.country}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Clock className="w-4 h-4 text-[#9B6B43] shrink-0 mt-1" />
                <div className="text-xs space-y-1">
                  <p><span className="text-[#FAF8F3]">Mon — Thu:</span> 5:30 PM — 11:00 PM</p>
                  <p><span className="text-[#FAF8F3]">Fri — Sat:</span> 5:30 PM — 12:00 AM</p>
                  <p><span className="text-[#8F877B]">Sun: Closed for culinary R&amp;D</span></p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Phone className="w-4 h-4 text-[#9B6B43] shrink-0" />
                <a href={`tel:${restaurantInfo.contact.phone}`} className="hover:text-[#FAF8F3] transition-colors">
                  {restaurantInfo.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#9B6B43] shrink-0" />
                <a href={`mailto:${restaurantInfo.contact.email}`} className="hover:text-[#FAF8F3] transition-colors">
                  {restaurantInfo.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F877B] font-sans">
          <div className="flex items-center space-x-6">
            <span>© 2026 Noir &amp; Thyme. All rights reserved.</span>
            <span className="hidden sm:inline text-[#9B6B43]">·</span>
            <span className="hidden sm:inline">Gulshan Avenue, Dhaka</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="italic font-serif text-sm text-[#B9AC98]">
              Designed with intention.
            </span>
            <div className="flex items-center space-x-4">
              {restaurantInfo.social.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FAF8F3] transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
