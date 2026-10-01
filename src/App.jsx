import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReservationModal from "./components/ReservationModal";
import LightboxModal from "./components/LightboxModal";
import Toast from "./components/Toast";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

import { galleryItems } from "./data/galleryData";

export default function App() {
  // Sync state with URL hash
  const getRouteFromHash = () => {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    if (["home", "menu", "about", "gallery", "contact"].includes(hash)) {
      return hash;
    }
    return "home";
  };

  const [currentRoute, setCurrentRoute] = useState(getRouteFromHash);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState({ isOpen: false, activeIndex: 0 });
  const [toastMessage, setToastMessage] = useState(null);

  // Handle hash changes & browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (hash === "reserve") {
        setReservationModalOpen(true);
      } else if (["home", "menu", "about", "gallery", "contact"].includes(hash)) {
        setCurrentRoute(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (route) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenReservation = () => {
    setReservationModalOpen(true);
  };

  const handleOpenLightbox = (index) => {
    setLightboxState({
      isOpen: true,
      activeIndex: index,
    });
  };

  const handleReservationSuccess = (data) => {
    setToastMessage(`Reservation confirmed for ${data.name} on ${data.date} (${data.reference})`);
  };

  const handleToastNotification = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-[#171512] text-[#FAF8F3] flex flex-col justify-between selection:bg-[#9B6B43] selection:text-[#FAF8F3] relative font-sans">
      {/* Editorial Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenReservation={handleOpenReservation}
      />

      {/* Main Page Stage */}
      <main className="flex-grow">
        {currentRoute === "home" && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenReservation={handleOpenReservation}
            onOpenLightbox={handleOpenLightbox}
            onOpenToast={handleToastNotification}
          />
        )}
        {currentRoute === "menu" && (
          <MenuPage
            onOpenReservation={handleOpenReservation}
          />
        )}
        {currentRoute === "about" && (
          <AboutPage
            onOpenReservation={handleOpenReservation}
            onNavigate={handleNavigate}
          />
        )}
        {currentRoute === "gallery" && (
          <GalleryPage
            onOpenLightbox={handleOpenLightbox}
          />
        )}
        {currentRoute === "contact" && (
          <ContactPage
            onOpenReservation={handleOpenReservation}
            onOpenToast={handleToastNotification}
          />
        )}
      </main>

      {/* Spacious Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenReservation={handleOpenReservation}
      />

      {/* Global Interactive Reservation Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
        onReservationSuccess={handleReservationSuccess}
      />

      {/* Fullscreen Editorial Lightbox */}
      <LightboxModal
        items={galleryItems}
        activeIndex={lightboxState.activeIndex}
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ ...lightboxState, isOpen: false })}
        onNavigate={(newIndex) => setLightboxState({ ...lightboxState, activeIndex: newIndex })}
      />

      {/* Toast Notification Alert */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
