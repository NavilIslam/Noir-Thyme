import React from "react";
import { ArrowRight, Flame, Clock, Heart, Shield, Compass } from "lucide-react";
import { chefInfo, storyTimeline, philosophyPillars } from "../data/storyData";

export default function AboutPage({ onOpenReservation, onNavigate }) {
  return (
    <div className="pt-32 sm:pt-40 pb-24 text-[#FAF8F3]">
      {/* 1. Page Header */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto text-center mb-20 sm:mb-28">
        <span className="text-xs uppercase tracking-[0.3em] text-[#9B6B43] font-medium block mb-3 font-sans">
          Origin &amp; Craft · Gulshan Avenue
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F1E9DA] font-light leading-tight">
          Food without hurry.
        </h1>
        <p className="font-serif italic text-lg sm:text-xl text-[#B9AC98] mt-4 max-w-xl mx-auto">
          "A quiet sanctuary in Dhaka where cooking is guided by season, fire, and honest ingredients."
        </p>
      </section>

      {/* 2. Hero Image Composition */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto mb-24 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 editorial-img-wrap bg-[#171512]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85"
              alt="Dining room at Noir & Thyme"
              className="w-full h-80 sm:h-[500px] object-cover filter brightness-90 contrast-[1.05]"
            />
          </div>
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9B6B43] font-mono block">
              The Dining Room
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F1E9DA]">
              48 seats. One seating window per evening.
            </h3>
            <p className="text-xs sm:text-sm text-[#8F877B] font-sans leading-relaxed">
              We designed our dining space so that guests never feel the anxiety of a turning table. When you take your seat, it remains yours for the entirety of the evening.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Our Philosophy Pillars */}
      <section className="py-20 sm:py-28 bg-[#1B1814] px-6 sm:px-10 lg:px-16 hairline-y mb-24 sm:mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#9B6B43] font-medium block mb-2">
              Our Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F1E9DA] font-light">
              The Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {philosophyPillars.map((pillar) => (
              <div key={pillar.number} className="space-y-4">
                <span className="font-serif text-4xl text-[#9B6B43] font-light block">
                  {pillar.number}
                </span>
                <h3 className="font-serif text-2xl text-[#F1E9DA]">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8F877B] font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Chef Arman Rahman & The Kitchen */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto mb-24 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 editorial-img-wrap bg-[#1C1915]">
            <img
              src={chefInfo.portrait}
              alt="Chef Arman Rahman"
              className="w-full h-96 sm:h-[560px] object-cover object-top filter brightness-95"
            />
            <div className="p-4 bg-[#1C1915] hairline-t text-xs text-[#8F877B] flex justify-between">
              <span>{chefInfo.name}</span>
              <span className="text-[#9B6B43]">{chefInfo.role}</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#9B6B43] font-medium block">
              The Culinary Craft
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F1E9DA] font-light">
              Chef Arman Rahman
            </h2>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8F877B] block">
              {chefInfo.experience}
            </span>

            <blockquote className="font-serif italic text-xl text-[#F1E9DA] border-l-2 border-[#9B6B43] pl-6 py-1">
              "{chefInfo.quote}"
            </blockquote>

            <div className="space-y-4 text-xs sm:text-sm text-[#B9AC98] font-sans leading-relaxed">
              {chefInfo.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Editorial Milestone Timeline (2023 - 2026) */}
      <section className="py-20 sm:py-28 bg-[#171512] px-6 sm:px-10 lg:px-16 hairline-b mb-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-[#9B6B43] font-medium block mb-2">
              Chronology
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F1E9DA] font-light">
              The Journey to Opening
            </h2>
            <p className="text-xs sm:text-sm text-[#8F877B] font-sans mt-3">
              How four years of devotion and research brought Noir &amp; Thyme to Dhaka.
            </p>
          </div>

          {/* Timeline List (Refined Editorial Style, not SaaS) */}
          <div className="space-y-12">
            {storyTimeline.map((item, idx) => (
              <div
                key={item.year}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start hairline-b pb-8"
              >
                <div className="md:col-span-3">
                  <span className="font-serif text-3xl sm:text-4xl text-[#9B6B43] font-light block">
                    {item.year}
                  </span>
                </div>
                <div className="md:col-span-9 space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F1E9DA]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8F877B] font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Sourcing & The Land */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#9B6B43] font-medium block">
              Producers &amp; Terroir
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F1E9DA] font-light">
              Respecting the farmers and fishermen.
            </h2>
            <p className="text-xs sm:text-sm text-[#B9AC98] font-sans leading-relaxed">
              Every vegetable on our plate has a name and a grower behind it. From small-batch tea leaves sourced from Sreemangal to fresh Bay of Bengal octopus delivered on crushed ice within hours of catch, we celebrate the true bounty of the region.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate("menu")}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#9B6B43] hover:text-[#FAF8F3] transition-colors"
              >
                <span>View Current Seasonal Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="editorial-img-wrap bg-[#1C1915]">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85"
              alt="Fresh hand-rolled pasta and seasonal ingredients"
              className="w-full h-80 sm:h-96 object-cover filter brightness-90"
            />
          </div>
        </div>
      </section>

      {/* 7. Bottom Call to Action */}
      <section className="text-center px-6 pt-16 hairline-t">
        <h3 className="font-serif text-3xl sm:text-4xl text-[#F1E9DA] mb-4">
          Experience an evening with us
        </h3>
        <p className="text-xs sm:text-sm text-[#8F877B] max-w-md mx-auto mb-8 font-sans">
          Reservations open 30 days in advance for both indoor salon seating and hearthside counter.
        </p>
        <button
          onClick={onOpenReservation}
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#9B6B43] hover:bg-[#B57F52] text-[#FAF8F3] text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all"
        >
          <span>Reserve Your Table</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
}
