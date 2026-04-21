import React from 'react';
const WHATSAPP_ICON_URL = 'https://cdn-icons-png.flaticon.com/512/733/733585.png';

function FloatingWhatsappButton() {
  return (
    <a
      href="https://wa.link/dqfuog"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-60 w-14 h-14 rounded-full bg-white shadow-xl border border-brand-canvas/80 flex items-center justify-center hover:scale-105 hover:shadow-2xl transition-transform duration-200"
    >
      <img src={WHATSAPP_ICON_URL} alt="WhatsApp" className="w-8 h-8 object-contain" />
    </a>
  );
}

export default FloatingWhatsappButton;