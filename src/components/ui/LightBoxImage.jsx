import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const LightboxImage = ({ src, alt, className }) => {
  // Estado para controlar si la imagen está expandida o no
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. Imagen pequeña (Thumbnail) */}
      <div className="relative group">
        <img
          src={src}
          alt={alt}
          onClick={() => setIsOpen(true)}
          className={`cursor-zoom-in transition-transform hover:scale-[1.02] shadow-sm ${className}`}
        />

        <div className="pointer-events-none absolute right-2 bottom-2 inline-flex items-center gap-1.5 rounded-full bg-brand-deep/80 px-2.5 py-1 text-[11px] font-heading font-semibold text-white backdrop-blur-sm">
          <ZoomIn size={13} strokeWidth={2.4} />
          Click para ampliar
        </div>
      </div>

      {/* 2. Overlay oscuro y la imagen en grande (Modal) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-brand-deep/95 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out transition-opacity"
          onClick={() => setIsOpen(false)} // Se cierra al hacer clic en el fondo oscuro
        >
          {/* Botón de cerrar (esquina superior derecha) */}
          <button
            className="absolute top-6 right-6 text-white hover:text-brand-golden transition-colors z-50"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar imagen"
          >
            <X size={36} strokeWidth={2} />
          </button>

          {/* Imagen expandida */}
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()} // Evita que se cierre si haces clic directamente en la foto
          />
        </div>
      )}
    </>
  );
};

export default LightboxImage;