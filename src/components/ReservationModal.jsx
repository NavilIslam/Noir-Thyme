import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, Users, Utensils, Check, ArrowRight, Sparkles } from "lucide-react";

export default function ReservationModal({ isOpen, onClose, onReservationSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "19:00",
    guests: "2",
    seating: "Main Dining Salon",
    specialRequests: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  // Set default minimum date to today
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsConfirmed(false);
      setErrors({});
      // Set default date to tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setFormData((prev) => ({
        ...prev,
        date: prev.date || tomorrow.toISOString().split("T")[0],
      }));
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please provide your full name";
    if (!formData.email.trim()) {
      newErrors.email = "Please provide your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please provide a contact phone number";
    }
    if (!formData.date) {
      newErrors.date = "Please select a preferred date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury booking reservation engine
    setTimeout(() => {
      const generatedRef = "NT-" + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(generatedRef);
      setIsSubmitting(false);
      setIsConfirmed(true);
      if (onReservationSuccess) {
        onReservationSuccess({
          ...formData,
          reference: generatedRef,
        });
      }
    }, 900);
  };

  const timeSlots = [
    "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
  ];

  const seatingOptions = [
    { id: "Main Dining Salon", label: "Main Dining Salon", note: "Spacious tables under low warm lighting" },
    { id: "Hearthside Chef's Counter", label: "Chef's Counter", note: "Front-row view of the live fire hearth (Max 4 guests)" },
    { id: "Courtyard Veranda", label: "Courtyard Veranda", note: "Open-air garden dining surrounded by foliage" },
    { id: "Salon Privé", label: "Salon Privé (Private Room)", note: "Dedicated sanctuary for 6–14 guests" }
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-[#0F0E0C]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#1D1A16] border border-[#F1E9DA]/10 text-[#FAF8F3] shadow-2xl p-6 sm:p-10 my-8 z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close reservation modal"
          className="absolute top-6 right-6 p-2 text-[#8F877B] hover:text-[#FAF8F3] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isConfirmed ? (
          <div>
            {/* Header */}
            <div className="mb-8 text-center sm:text-left">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#9B6B43] font-medium block mb-2">
                Table Reservation · Gulshan Avenue
              </span>
              <h2
                id="reservation-modal-title"
                className="font-serif text-3xl sm:text-4xl text-[#F1E9DA] font-normal leading-tight"
              >
                An Intimate Table
              </h2>
              <p className="text-sm text-[#8F877B] mt-2 font-sans">
                We accept reservations up to 30 days in advance. Each table is reserved exclusively for your party for the evening.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Guests, Date, Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B9AC98] mb-2 font-sans">
                    Party Size
                  </label>
                  <div className="relative">
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#171512] border border-[#F1E9DA]/15 text-[#FAF8F3] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#9B6B43] transition-colors rounded-none appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                      <option value="9+">9+ (Private Dining)</option>
                    </select>
                    <Users className="w-4 h-4 text-[#8F877B] absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B9AC98] mb-2 font-sans">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={today}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full bg-[#171512] border ${
                        errors.date ? "border-red-500/80" : "border-[#F1E9DA]/15"
                      } text-[#FAF8F3] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#9B6B43] transition-colors rounded-none`}
                    />
                  </div>
                  {errors.date && (
                    <span className="text-red-400 text-xs mt-1 block">{errors.date}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B9AC98] mb-2 font-sans">
                    Seating Time
                  </label>
                  <div className="relative">
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#171512] border border-[#F1E9DA]/15 text-[#FAF8F3] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#9B6B43] transition-colors rounded-none appearance-none"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    <Clock className="w-4 h-4 text-[#8F877B] absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 2: Seating Area Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B9AC98] mb-2 font-sans">
                  Atmosphere &amp; Seating Area
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {seatingOptions.map((option) => (
                    <button
                      type="button"
                      key={option.id}
                      onClick={() => setFormData({ ...formData, seating: option.id })}
                      className={`text-left p-3 border transition-all text-xs ${
                        formData.seating === option.id
                          ? "border-[#9B6B43] bg-[#26211B] text-[#F1E9DA]"
                          : "border-[#F1E9DA]/10 bg-[#171512]/60 text-[#8F877B] hover:border-[#F1E9DA]/25 hover:text-[#FAF8F3]"
                      }`}
                    >
                      <span className="font-medium block text-sm mb-0.5 text-[#F1E9DA]">
                        {option.label}
                      </span>
                      <span className="text-[11px] block text-[#8F877B] leading-tight">
                        {option.note}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 3: Guest Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B9AC98] mb-2 font-sans">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tariq Chowdhury"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-[#171512] border ${
                      errors.name ? "border-red-500/80" : "border-[#F1E9DA]/15"
                    } text-[#FAF8F3] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#9B6B43] placeholder-[#8F877B]/40 transition-colors rounded-none`}
                  />
                  {errors.name && (
                    <span className="text-red-400 text-xs mt-1 block">{errors.name}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B9AC98] mb-2 font-sans">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. tariq@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-[#171512] border ${
                      errors.email ? "border-red-500/80" : "border-[#F1E9DA]/15"
                    } text-[#FAF8F3] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#9B6B43] placeholder-[#8F877B]/40 transition-colors rounded-none`}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs mt-1 block">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Row 4: Phone & Dietary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B9AC98] mb-2 font-sans">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+880 17XX-XXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-[#171512] border ${
                      errors.phone ? "border-red-500/80" : "border-[#F1E9DA]/15"
                    } text-[#FAF8F3] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#9B6B43] placeholder-[#8F877B]/40 transition-colors rounded-none`}
                  />
                  {errors.phone && (
                    <span className="text-red-400 text-xs mt-1 block">{errors.phone}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B9AC98] mb-2 font-sans">
                    Dietary Notes / Special Occasion
                  </label>
                  <input
                    type="text"
                    placeholder="Allergies, anniversary, wine preferences..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full bg-[#171512] border border-[#F1E9DA]/15 text-[#FAF8F3] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#9B6B43] placeholder-[#8F877B]/40 transition-colors rounded-none"
                  />
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 hairline-t">
                <div className="text-xs text-[#8F877B]">
                  No deposit required. Valet parking available on arrival.
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#9B6B43] hover:bg-[#B57F52] text-[#FAF8F3] px-8 py-3.5 text-xs font-sans uppercase tracking-[0.15em] font-medium transition-all group cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Securing Table...</span>
                  ) : (
                    <>
                      <span>Request Reservation</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-[#9B6B43]/20 border border-[#9B6B43] mx-auto flex items-center justify-center mb-6">
              <Check className="w-7 h-7 text-[#9B6B43]" />
            </div>

            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9B6B43] font-medium block mb-2">
              Reservation Request Received
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F1E9DA] mb-3">
              Your Table Awaits
            </h3>
            <p className="text-sm text-[#B9AC98] max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <strong className="text-[#FAF8F3]">{formData.name}</strong>. Our host team at Gulshan Avenue has received your request and will send a confirmation via email &amp; SMS shortly.
            </p>

            <div className="bg-[#171512] border border-[#F1E9DA]/10 p-5 max-w-md mx-auto text-left mb-8 space-y-2 text-xs">
              <div className="flex justify-between text-[#8F877B]">
                <span>Booking Reference:</span>
                <span className="font-mono text-[#F1E9DA] font-semibold">{bookingRef}</span>
              </div>
              <div className="flex justify-between text-[#8F877B]">
                <span>Date &amp; Time:</span>
                <span className="text-[#FAF8F3]">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between text-[#8F877B]">
                <span>Party Size:</span>
                <span className="text-[#FAF8F3]">{formData.guests} Guests</span>
              </div>
              <div className="flex justify-between text-[#8F877B]">
                <span>Area:</span>
                <span className="text-[#FAF8F3]">{formData.seating}</span>
              </div>
              {formData.specialRequests && (
                <div className="flex justify-between text-[#8F877B] pt-2 hairline-t">
                  <span>Note:</span>
                  <span className="text-[#B9AC98] text-right italic">{formData.specialRequests}</span>
                </div>
              )}
            </div>

            <button
              onClick={onClose}
              className="inline-flex items-center justify-center bg-[#9B6B43] hover:bg-[#B57F52] text-[#FAF8F3] px-8 py-3 text-xs uppercase tracking-[0.15em] font-medium transition-colors"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
