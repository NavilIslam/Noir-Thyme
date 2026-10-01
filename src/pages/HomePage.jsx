import React from "react";
import { ArrowRight, ArrowDown, Phone, Clock, MapPin, Sparkles, Utensils, Award } from "lucide-react";
import { signatureDishes, fullMenuItems } from "../data/menuData";
import { chefInfo, storyTimeline } from "../data/storyData";
import { galleryItems } from "../data/galleryData";
import { restaurantInfo } from "../data/restaurantInfo";
import MapVisualizer from "../components/MapVisualizer";

export default function HomePage({ onNavigate, onOpenReservation, onOpenLightbox, onOpenToast }) {
  // Preview 4 items for gallery section
  const previewGallery = galleryItems.slice(0, 4);

  return (
    <div className="space-y-0 text-[#FAF8F3]">
      {/* 1. HERO SECTION (Edge-to-Edge Editorial) */}
      <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Background Photography with Dark Mood Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
            alt="Noir & Thyme interior dining atmosphere"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1] scale-105 transform animate-ambient-zoom"
          />
          {/* Subtle Warm Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#171512] via-[#171512]/40 to-[#171512]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#171512]/30 to-[#171512]/90" />
        </div>

        {/* Top Eyebrow in Hero */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 sm:pt-16 animate-fade-slide-up">
          <div className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.3em] text-[#9B6B43] font-medium font-sans mb-6">
            <span className="w-8 h-[1px] bg-[#9B6B43]" />
            <span>{restaurantInfo.est}</span>
          </div>

          {/* Large Serif Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F1E9DA] font-light leading-[1.08] tracking-tight max-w-4xl">
            An intimate table. <br />
            <span className="italic font-normal text-[#FAF8F3]">Thoughtful food.</span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-8 text-base sm:text-lg md:text-xl text-[#B9AC98] max-w-xl font-sans font-light leading-relaxed">
            Contemporary European cooking shaped by seasonal ingredients, local character, and a little curiosity.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <button
              onClick={() => onNavigate("menu")}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FAF8F3] text-[#171512] hover:bg-[#F1E9DA] text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all duration-300 group cursor-pointer"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenReservation}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-[#F1E9DA]/40 text-[#F1E9DA] hover:border-[#9B6B43] hover:text-[#9B6B43] text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer"
            >
              <span>Reserve a Table</span>
            </button>
          </div>
        </div>

        {/* Bottom Scroll Indicator & Coordinates */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-16 flex items-end justify-between text-xs text-[#8F877B] font-sans">
          <div className="flex items-center space-x-3">
            <ArrowDown className="w-4 h-4 text-[#9B6B43] animate-bounce" />
            <span className="uppercase tracking-[0.2em] text-[10px]">Scroll to discover</span>
          </div>

          <div className="hidden sm:block text-right">
            <span className="text-[#B9AC98] block font-mono text-[11px]">23.7925° N, 90.4162° E</span>
            <span className="text-[10px] uppercase tracking-wider text-[#8F877B]">Gulshan Avenue, Dhaka</span>
          </div>
        </div>
      </section>


      {/* 2. INTRODUCTION / EDITORIAL PHILOSOPHY (Asymmetric Layout) */}
      <section className="py-24 sm:py-32 bg-[#171512] px-6 sm:px-10 lg:px-16 hairline-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Small Section Label */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#9B6B43] font-medium block">
                The Restaurant
              </span>
              <div className="w-12 h-[1px] bg-[#9B6B43]/50" />
              <p className="text-xs uppercase tracking-widest text-[#8F877B] font-mono">
                Dhaka · Modern European
              </p>
            </div>

            {/* Right: Large Heading + Supporting Manifesto */}
            <div className="lg:col-span-8 space-y-8">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F1E9DA] font-light leading-tight">
                Food made with patience. <br />
                <span className="italic">Served without ceremony.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#B9AC98] font-sans text-sm sm:text-base leading-relaxed">
                <p>
                  At Noir &amp; Thyme, we believe that great dining should feel like an intimate sanctuary. We do not chase fleeting kitchen trends or hide ingredients behind elaborate theatrics. Every dish is a study in quiet balance.
                </p>
                <p>
                  Rooted on Gulshan Avenue, our kitchen works in sync with local growers, artisan fishermen, and European botanical purveyors to bring honest, fire-kissed cooking to your table.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-[#F1E9DA]">
                <button
                  onClick={() => onNavigate("about")}
                  className="inline-flex items-center gap-2 text-[#9B6B43] hover:text-[#F1E9DA] transition-colors group cursor-pointer"
                >
                  <span>Our Philosophy &amp; Story</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 3. SIGNATURE DISHES (01, 02, 03 Large Editorial Layout) */}
      <section className="py-24 sm:py-32 bg-[#1C1915] px-6 sm:px-10 lg:px-16 hairline-b">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#9B6B43] font-medium block mb-3">
                Signature Plates
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F1E9DA] font-light">
                From our kitchen
              </h2>
            </div>
            <p className="text-sm text-[#8F877B] max-w-sm font-sans leading-relaxed">
              Three dishes that capture our devotion to live charcoal, slow fermentation, and honest produce.
            </p>
          </div>

          {/* Dishes List: Editorial Non-card Layout */}
          <div className="space-y-20 sm:space-y-28">
            {signatureDishes.map((dish, idx) => (
              <div
                key={dish.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Component */}
                <div
                  className={`lg:col-span-7 editorial-img-wrap relative bg-[#171512] ${
                    idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <img
                    src={dish.image}
                    alt={dish.alt}
                    className="w-full h-80 sm:h-[480px] object-cover filter brightness-90 contrast-[1.05]"
                  />
                  <div className="absolute top-4 left-4 bg-[#171512]/80 backdrop-blur-sm border border-[#F1E9DA]/10 px-3 py-1 text-[11px] font-mono text-[#F1E9DA]">
                    {dish.pairing}
                  </div>
                </div>

                {/* Typography & Details */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-baseline justify-between hairline-b pb-4">
                    <span className="font-serif text-4xl sm:text-5xl text-[#9B6B43] font-light">
                      {dish.index}
                    </span>
                    <span className="font-mono text-xl sm:text-2xl text-[#F1E9DA]">
                      {dish.price}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F1E9DA] font-normal tracking-wide uppercase">
                      {dish.name}
                    </h3>
                    <p className="text-sm font-serif italic text-[#B9AC98] mt-2">
                      {dish.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#8F877B] font-sans leading-relaxed">
                    {dish.description}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    {dish.dietary.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-widest text-[#B9AC98] border border-[#F1E9DA]/15 px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full Menu Link */}
          <div className="mt-20 text-center">
            <button
              onClick={() => onNavigate("menu")}
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-sans text-[#F1E9DA] hover:text-[#9B6B43] transition-colors cursor-pointer group"
            >
              <span>Explore Complete Seasonal Menu</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </section>


      {/* 4. MENU PREVIEW (Spacious Editorial Typography) */}
      <section className="py-24 sm:py-32 bg-[#171512] px-6 sm:px-10 lg:px-16 hairline-b">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-[#9B6B43] font-medium block mb-3">
              Seasonal Selection
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F1E9DA] font-light">
              The menu changes with the season.
            </h2>
            <p className="text-sm text-[#8F877B] font-sans mt-4 leading-relaxed">
              We present a deliberate curation across small plates, garden harvest, coastal seafood, and hardwood fire cuts.
            </p>
          </div>

          {/* Menu Highlights List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
            {fullMenuItems.slice(0, 6).map((item) => (
              <div key={item.id} className="hairline-b pb-6 space-y-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F1E9DA] font-medium">
                    {item.name}
                  </h3>
                  <span className="font-mono text-sm sm:text-base text-[#9B6B43] ml-4 shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs text-[#8F877B] font-sans leading-relaxed">
                  {item.description}
                </p>
                {item.pairing && (
                  <p className="text-[11px] text-[#B9AC98] italic font-serif">
                    Pairing: {item.pairing}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => onNavigate("menu")}
              className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#9B6B43] text-[#FAF8F3] hover:bg-[#9B6B43] text-xs uppercase tracking-[0.18em] font-medium transition-all"
            >
              <span>View Full Menu &amp; Cellar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>


      {/* 5. STORY / ABOUT PREVIEW (A Room Made for Lingering) */}
      <section className="py-24 sm:py-32 bg-[#1B1814] px-6 sm:px-10 lg:px-16 hairline-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image (45% width on desktop) */}
            <div className="lg:col-span-5 editorial-img-wrap bg-[#171512]">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85"
                alt="Intimate candlelit dining room at Noir & Thyme"
                className="w-full h-96 sm:h-[520px] object-cover filter brightness-90 contrast-[1.05]"
              />
            </div>

            {/* Editorial Story (55% width) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#9B6B43] font-medium block">
                Atmosphere &amp; Space
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F1E9DA] font-light leading-tight">
                A room made for lingering.
              </h2>
              
              <div className="space-y-4 text-[#B9AC98] font-sans text-sm sm:text-base leading-relaxed">
                <p>
                  Noir &amp; Thyme began with a simple idea: create a place where good food doesn't need to hurry. In a bustling metropolis like Dhaka, we wanted to carve out an intentional pocket of calm.
                </p>
                <p>
                  Designed with reclaimed timber, hand-honed basalt stone, and acoustically tuned warm surfaces, our dining room keeps noise gentle and conversations intimate. We book our tables generously so you are never rushed for the next seating.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate("about")}
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#9B6B43] hover:text-[#FAF8F3] transition-colors group cursor-pointer"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 6. CHEF INTRODUCTION SECTION */}
      <section className="py-24 sm:py-32 bg-[#171512] px-6 sm:px-10 lg:px-16 hairline-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Chef Text Info */}
            <div className="lg:col-span-6 space-y-6 lg:order-1">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-[#9B6B43] font-medium block">
                  Chef &amp; Founder
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#F1E9DA] font-light">
                  {chefInfo.name}
                </h2>
                <span className="text-xs uppercase tracking-[0.25em] text-[#8F877B] font-mono block">
                  {chefInfo.experience}
                </span>
              </div>

              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#F1E9DA] border-l-2 border-[#9B6B43] pl-6 py-1 leading-relaxed">
                "{chefInfo.quote}"
              </blockquote>

              <div className="space-y-4 text-sm text-[#B9AC98] font-sans leading-relaxed">
                {chefInfo.bioParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate("about")}
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#9B6B43] hover:text-[#FAF8F3] transition-colors"
                >
                  <span>Read Full Chef Profile &amp; Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chef Portrait Photo */}
            <div className="lg:col-span-6 lg:order-2 editorial-img-wrap bg-[#1C1915]">
              <img
                src={chefInfo.portrait}
                alt={`Chef ${chefInfo.name} at work in the kitchen`}
                className="w-full h-96 sm:h-[540px] object-cover object-top filter brightness-95"
              />
              <div className="p-4 bg-[#1C1915] hairline-t flex items-center justify-between text-xs text-[#8F877B]">
                <span>Open Flame Hearth Kitchen</span>
                <span className="text-[#9B6B43]">Gulshan Avenue</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 7. MASONRY GALLERY SNEAK PEEK */}
      <section className="py-24 sm:py-32 bg-[#1B1814] px-6 sm:px-10 lg:px-16 hairline-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#9B6B43] font-medium block mb-2">
                Visual Curation
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F1E9DA] font-light">
                Moments &amp; Texture
              </h2>
            </div>

            <button
              onClick={() => onNavigate("gallery")}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#FAF8F3] hover:text-[#9B6B43] transition-colors"
            >
              <span>View Full Gallery (10 Plates &amp; Spaces)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Asymmetric Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {previewGallery.map((item, idx) => {
              const colSpan = idx === 0 ? "md:col-span-7" : idx === 1 ? "md:col-span-5" : idx === 2 ? "md:col-span-5" : "md:col-span-7";
              return (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox(idx)}
                  className={`${colSpan} group relative editorial-img-wrap cursor-pointer bg-[#171512] h-72 sm:h-96`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171512]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#9B6B43] font-mono block">
                        {item.location}
                      </span>
                      <h4 className="font-serif text-lg sm:text-xl text-[#F1E9DA] font-medium">
                        {item.title}
                      </h4>
                    </div>
                    <span className="text-xs text-[#8F877B] group-hover:text-[#FAF8F3] transition-colors font-mono">
                      Expand +
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* 8. RESERVATION CTA (Dramatic Full-Width Background) */}
      <section className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=85"
            alt="Noir & Thyme evening terrace ambiance"
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171512] via-[#171512]/75 to-[#171512]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[#9B6B43] font-medium block">
            Reservations &amp; Gatherings
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl text-[#F1E9DA] font-light leading-tight">
            Your table is waiting.
          </h2>

          <p className="text-base sm:text-lg text-[#B9AC98] max-w-xl mx-auto font-sans leading-relaxed">
            Join us for dinner, conversation, and a menu that changes with the season. We look forward to welcoming you to Gulshan Avenue.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#9B6B43] hover:bg-[#B57F52] text-[#FAF8F3] text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all duration-300 group cursor-pointer"
            >
              <span>Reserve a Table</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href={`tel:${restaurantInfo.contact.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#F1E9DA]/30 text-[#F1E9DA] hover:border-[#F1E9DA] hover:text-[#FAF8F3] text-xs font-sans uppercase tracking-[0.18em] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#9B6B43]" />
              <span>Call {restaurantInfo.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>


      {/* 9. LOCATION & HOURS SECTION */}
      <section className="py-24 sm:py-32 bg-[#171512] px-6 sm:px-10 lg:px-16 hairline-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Hours & Location Details */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#9B6B43] font-medium block mb-2">
                  Visit Us
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F1E9DA] font-light">
                  Gulshan Avenue, Dhaka
                </h2>
              </div>

              {/* Address card */}
              <div className="space-y-2 text-sm text-[#B9AC98] font-sans">
                <p className="font-medium text-[#FAF8F3]">{restaurantInfo.name}</p>
                <p>{restaurantInfo.address.line1}</p>
                <p>{restaurantInfo.address.line2}</p>
                <p>{restaurantInfo.address.city} {restaurantInfo.address.postal}, {restaurantInfo.address.country}</p>
              </div>

              {/* Operating Hours Table */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#FAF8F3] font-sans font-semibold hairline-b pb-2">
                  Dining Hours
                </h3>
                <div className="space-y-3 font-sans text-xs sm:text-sm">
                  {restaurantInfo.hours.map((h) => (
                    <div key={h.days} className="flex justify-between items-center text-[#8F877B]">
                      <span className="text-[#FAF8F3]">{h.days}</span>
                      <span className="font-mono text-[#B9AC98]">{h.times}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Direct */}
              <div className="space-y-2 text-xs font-sans text-[#8F877B] pt-4 hairline-t">
                <p>Telephone: <a href={`tel:${restaurantInfo.contact.phone}`} className="text-[#FAF8F3] hover:underline">{restaurantInfo.contact.phone}</a></p>
                <p>Inquiries: <a href={`mailto:${restaurantInfo.contact.email}`} className="text-[#FAF8F3] hover:underline">{restaurantInfo.contact.email}</a></p>
              </div>
            </div>

            {/* Right: Map Visualizer */}
            <div className="lg:col-span-7">
              <MapVisualizer onOpenToast={onOpenToast} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
