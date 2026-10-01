import React, { useState } from "react";
import { ArrowRight, Sparkles, Wine, Flame, Leaf, Fish, Coffee } from "lucide-react";
import { fullMenuItems, menuCategories } from "../data/menuData";

export default function MenuPage({ onOpenReservation }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categoryHeadings = {
    "small-plates": {
      title: "Small Plates & Beginnings",
      intro: "Light, expressive starters designed to awaken the palate before the wood fire.",
    },
    garden: {
      title: "From The Garden",
      intro: "Seasonal produce, wild foraged mushrooms, and slow-churned heritage dairy.",
    },
    sea: {
      title: "From The Sea",
      intro: "Wild-caught coastal fish and shellfish prepared over binchotan coal and light fumets.",
    },
    grill: {
      title: "From The Grill & Embers",
      intro: "Prime meats and heritage poultry lacquered in natural jus and wood smoke.",
    },
    dessert: {
      title: "Dessert & Sweet Endings",
      intro: "Restrained sweets highlighting dark chocolates, seasonal orchard fruits, and floral honeys.",
    },
    drinks: {
      title: "Cellar & Signature Bar",
      intro: "Botanical cocktails, old-world natural wines, and rare zero-proof infusions.",
    },
  };

  const categoriesToRender = selectedCategory === "all"
    ? ["small-plates", "garden", "sea", "grill", "dessert", "drinks"]
    : [selectedCategory];

  return (
    <div className="pt-32 sm:pt-40 pb-24 text-[#FAF8F3]">
      {/* Page Hero */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto text-center mb-16 sm:mb-20 animate-fade-slide-up">
        <span className="text-xs uppercase tracking-[0.3em] text-[#9B6B43] font-medium block mb-3 font-sans">
          Seasonal Dining · Autumn / Winter
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F1E9DA] font-light leading-tight">
          The Menu
        </h1>
        <p className="font-serif italic text-lg sm:text-xl text-[#B9AC98] mt-4 max-w-xl mx-auto">
          "Seasonal ingredients. Thoughtful combinations. Nothing unnecessary."
        </p>
        <p className="text-xs sm:text-sm text-[#8F877B] font-sans mt-3 max-w-lg mx-auto leading-relaxed">
          Our kitchen prepares each element daily from scratch. Prices include service charge. Please notify our team of any severe dietary requirements.
        </p>

        {/* Tasting Menu Highlight Banner */}
        <div className="mt-10 p-6 bg-[#1D1A16] border border-[#9B6B43]/40 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl animate-shimmer-glow">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#9B6B43]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#F1E9DA] font-semibold">
                Chef's 7-Course Blind Tasting
              </span>
            </div>
            <p className="text-xs text-[#8F877B] font-sans">
              An unscripted seasonal progression crafted daily by Chef Arman Rahman. Optional natural wine pairing.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="font-mono text-xl text-[#F1E9DA] font-medium">৳ 11,500 <span className="text-xs text-[#8F877B] font-sans">/ Guest</span></span>
            <button
              onClick={onOpenReservation}
              className="px-5 py-2.5 bg-[#9B6B43] hover:bg-[#B57F52] text-[#FAF8F3] text-xs uppercase tracking-wider transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
            >
              Book Tasting
            </button>
          </div>
        </div>
      </section>

      {/* Category Tabs Filter (Fully responsive, no cut-off on left/right, no scrollbars) */}
      <div className="sticky top-20 z-30 bg-[#171512]/95 backdrop-blur-md hairline-b py-3 px-4 sm:px-8 lg:px-12 mb-16">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 py-1">
          {menuCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
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

      {/* Menu Categorized Items Container with Staggered Transition Animation */}
      <section
        key={selectedCategory}
        className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto space-y-20 animate-fade-slide-up"
      >
        {categoriesToRender.map((catKey) => {
          const categoryMeta = categoryHeadings[catKey] || { title: catKey, intro: "" };
          const items = fullMenuItems.filter((item) => item.category === catKey);

          if (items.length === 0) return null;

          return (
            <div key={catKey} className="space-y-8">
              {/* Category Header */}
              <div className="hairline-b pb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#9B6B43] font-mono block mb-1">
                  Category
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F1E9DA] font-light">
                  {categoryMeta.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#8F877B] font-sans mt-1">
                  {categoryMeta.intro}
                </p>
              </div>

              {/* Items List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {items.map((item, itemIdx) => (
                  <article
                    key={item.id}
                    className={`space-y-2.5 hairline-b pb-6 group transition-all duration-300 hover:translate-x-1 ${
                      itemIdx < 4 ? `delay-${itemIdx + 1}` : ""
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-serif text-xl sm:text-2xl text-[#F1E9DA] group-hover:text-[#FAF8F3] transition-colors font-medium">
                        {item.name}
                      </h3>
                      <span className="font-mono text-base text-[#9B6B43] shrink-0 font-medium group-hover:text-[#FAF8F3] transition-colors">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#B9AC98]/80 font-sans leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-1">
                      {item.pairing ? (
                        <span className="text-xs text-[#8F877B] italic font-serif flex items-center gap-1.5">
                          <Wine className="w-3.5 h-3.5 text-[#9B6B43]" />
                          <span>{item.pairing}</span>
                        </span>
                      ) : <span />}

                      {item.dietary && item.dietary.length > 0 && (
                        <div className="flex items-center gap-1.5">
                          {item.dietary.map((d) => (
                            <span
                              key={d}
                              className="text-[9px] uppercase tracking-wider text-[#8F877B] font-mono border border-[#F1E9DA]/10 px-1.5 py-0.5"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Dietary & Sourcing Footer Notes */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto mt-24 pt-12 hairline-t text-xs text-[#8F877B] font-sans">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#F1E9DA] font-medium mb-2">
              Dietary Provisions
            </h4>
            <p className="leading-relaxed">
              V: Vegetarian · VG: Vegan · GF: Gluten-Free · DF: Dairy-Free. We take severe allergies with utmost care.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#F1E9DA] font-medium mb-2">
              Artisan Farmers &amp; Sea
            </h4>
            <p className="leading-relaxed">
              All seafood is sustainably hook-and-line harvested. Greens and micro-herbs delivered daily from Sylhet &amp; Sreemangal gardens.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#F1E9DA] font-medium mb-2">
              Sommelier Cellar
            </h4>
            <p className="leading-relaxed">
              Our cellar accommodates 280+ labels spanning biodynamic, low-intervention and classic grand crus.
            </p>
          </div>
        </div>

        {/* CTA to Reserve */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenReservation}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#9B6B43] hover:bg-[#B57F52] text-[#FAF8F3] text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all duration-300 transform hover:scale-[1.02]"
          >
            <span>Reserve a Table for Dinner</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
