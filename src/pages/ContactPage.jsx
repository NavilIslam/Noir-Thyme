import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { restaurantInfo } from "../data/restaurantInfo";
import MapVisualizer from "../components/MapVisualizer";

export default function ContactPage({ onOpenReservation, onOpenToast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Please write a message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onOpenToast) {
        onOpenToast("Message dispatched to the Noir & Thyme team");
      }
    }, 800);
  };

  return (
    <div className="pt-32 sm:pt-40 pb-24 text-[#FAF8F3]">
      {/* Header */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto text-center mb-16 sm:mb-24">
        <span className="text-xs uppercase tracking-[0.3em] text-[#9B6B43] font-medium block mb-3 font-sans">
          Location &amp; Inquiries
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F1E9DA] font-light leading-tight">
          Find &amp; Reach Us
        </h1>
        <p className="font-serif italic text-lg sm:text-xl text-[#B9AC98] mt-4 max-w-xl mx-auto">
          "Located on leafy Gulshan Avenue, offering an intimate respite in the heart of Dhaka."
        </p>
      </section>

      {/* Main Grid: Location Info + Message Form */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Details & Policies */}
          <div className="lg:col-span-5 space-y-10">
            {/* Address */}
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#9B6B43] font-medium block mb-2">
                Restaurant Address
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F1E9DA] mb-3">
                Gulshan Avenue Sanctuary
              </h2>
              <div className="space-y-1 text-sm text-[#B9AC98] font-sans leading-relaxed">
                <p className="text-[#FAF8F3] font-medium">{restaurantInfo.name}</p>
                <p>{restaurantInfo.address.line1}</p>
                <p>{restaurantInfo.address.line2}</p>
                <p>{restaurantInfo.address.city} {restaurantInfo.address.postal}, {restaurantInfo.address.country}</p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="space-y-3 hairline-t pt-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#9B6B43] font-medium block">
                Hours of Hospitality
              </span>
              <div className="space-y-2.5 text-xs sm:text-sm font-sans">
                {restaurantInfo.hours.map((h) => (
                  <div key={h.days} className="flex justify-between items-center text-[#8F877B]">
                    <span className="text-[#FAF8F3]">{h.days}</span>
                    <span className="font-mono text-[#B9AC98]">{h.times}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Lines */}
            <div className="space-y-3 hairline-t pt-6 font-sans text-xs sm:text-sm text-[#8F877B]">
              <span className="text-xs uppercase tracking-[0.25em] text-[#9B6B43] font-medium block">
                Direct Communications
              </span>
              <div className="space-y-2">
                <p>
                  <span className="text-[#FAF8F3]">Table Bookings:</span>{" "}
                  <a href={`tel:${restaurantInfo.contact.phone}`} className="hover:text-[#9B6B43] transition-colors">
                    {restaurantInfo.contact.phone}
                  </a>
                </p>
                <p>
                  <span className="text-[#FAF8F3]">Reception / Concierge:</span>{" "}
                  <a href={`tel:${restaurantInfo.contact.landline}`} className="hover:text-[#9B6B43] transition-colors">
                    {restaurantInfo.contact.landline}
                  </a>
                </p>
                <p>
                  <span className="text-[#FAF8F3]">General Desk:</span>{" "}
                  <a href={`mailto:${restaurantInfo.contact.email}`} className="hover:text-[#9B6B43] transition-colors">
                    {restaurantInfo.contact.email}
                  </a>
                </p>
                <p>
                  <span className="text-[#FAF8F3]">Private Events &amp; Salons:</span>{" "}
                  <a href={`mailto:${restaurantInfo.contact.reservationsEmail}`} className="hover:text-[#9B6B43] transition-colors">
                    {restaurantInfo.contact.reservationsEmail}
                  </a>
                </p>
              </div>
            </div>

            {/* Dining Etiquette & Valet */}
            <div className="bg-[#1C1915] border border-[#F1E9DA]/10 p-6 space-y-4 text-xs font-sans text-[#8F877B]">
              <h3 className="text-xs uppercase tracking-wider text-[#F1E9DA] font-semibold">
                Guest Policies
              </h3>
              <p>
                <strong className="text-[#FAF8F3]">Valet:</strong> {restaurantInfo.policies.valet}
              </p>
              <p>
                <strong className="text-[#FAF8F3]">Attire:</strong> {restaurantInfo.policies.dressCode}
              </p>
              <p>
                <strong className="text-[#FAF8F3]">Cellar Corkage:</strong> {restaurantInfo.policies.corkage}
              </p>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-[#1C1915] border border-[#F1E9DA]/10 p-8 sm:p-12">
            {!isSuccess ? (
              <div>
                <div className="mb-8">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#9B6B43] font-medium block mb-1">
                    Send a Message
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F1E9DA] font-light">
                    Direct Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8F877B] font-sans mt-2">
                    For private dining buyouts, sommelier inquiries, press requests, or special celebrations.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B9AC98] mb-2 font-sans">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Zara Ahmed"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-[#171512] border ${
                          errors.name ? "border-red-500/80" : "border-[#F1E9DA]/15"
                        } text-[#FAF8F3] px-4 py-3 text-sm focus:outline-none focus:border-[#9B6B43] transition-colors rounded-none placeholder-[#8F877B]/40`}
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
                        placeholder="e.g. zara@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-[#171512] border ${
                          errors.email ? "border-red-500/80" : "border-[#F1E9DA]/15"
                        } text-[#FAF8F3] px-4 py-3 text-sm focus:outline-none focus:border-[#9B6B43] transition-colors rounded-none placeholder-[#8F877B]/40`}
                      />
                      {errors.email && (
                        <span className="text-red-400 text-xs mt-1 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B9AC98] mb-2 font-sans">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+880 1XXX-XXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#171512] border border-[#F1E9DA]/15 text-[#FAF8F3] px-4 py-3 text-sm focus:outline-none focus:border-[#9B6B43] transition-colors rounded-none placeholder-[#8F877B]/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B9AC98] mb-2 font-sans">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#171512] border border-[#F1E9DA]/15 text-[#FAF8F3] px-4 py-3 text-sm focus:outline-none focus:border-[#9B6B43] transition-colors rounded-none appearance-none"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Private Dining Salon (6-14 Guests)">Private Dining Salon (6-14 Guests)</option>
                        <option value="Full Restaurant Buyout">Full Restaurant Buyout</option>
                        <option value="Sommelier & Wine Pairing">Sommelier &amp; Wine Pairing</option>
                        <option value="Press & Media">Press &amp; Media</option>
                        <option value="Careers in Kitchen & Floor">Careers in Kitchen &amp; Floor</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B9AC98] mb-2 font-sans">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Please share details regarding your inquiry, preferred dates, or group size..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full bg-[#171512] border ${
                        errors.message ? "border-red-500/80" : "border-[#F1E9DA]/15"
                      } text-[#FAF8F3] px-4 py-3 text-sm focus:outline-none focus:border-[#9B6B43] transition-colors rounded-none placeholder-[#8F877B]/40`}
                    />
                    {errors.message && (
                      <span className="text-red-400 text-xs mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#8F877B] font-sans">
                      Our host team typically responds within 4 business hours.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#9B6B43] hover:bg-[#B57F52] text-[#FAF8F3] px-8 py-3.5 text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="py-12 text-center space-y-6">
                <div className="w-14 h-14 bg-[#9B6B43]/20 border border-[#9B6B43] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-[#9B6B43]" />
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F1E9DA]">
                  Message Received
                </h3>
                <p className="text-sm text-[#B9AC98] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#FAF8F3]">{formData.name}</strong>. Our management and concierge team on Gulshan Avenue will review your request and reply shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "General Inquiry",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 border border-[#F1E9DA]/20 text-xs uppercase tracking-wider text-[#FAF8F3] hover:border-[#9B6B43] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map Visualizer Section */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <MapVisualizer onOpenToast={onOpenToast} />
      </section>
    </div>
  );
}
