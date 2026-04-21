import React from 'react';
import { MapPin } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md fixed w-full top-0 z-50 shadow-sm border-b border-brand-canvas">
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl tracking-tight text-brand-deep font-heading">JP GeoTech</span>
      </div>
      
      {/* Enlaces de escritorio */}
      <div className="hidden md:flex gap-6 text-sm font-medium text-brand-deep/70">
        <a href="#programa" className="hover:text-brand-forest transition-colors">Programa</a>
        <a href="#beneficios" className="hover:text-brand-forest transition-colors">Beneficios</a>
        <a href="#instructor" className="hover:text-brand-forest transition-colors">Instructor</a>
        <a href="#metodologia" className="hover:text-brand-forest transition-colors">Metodología</a>
      </div>

      {/* Botón de inscripción con el color Golden Hour (Primary Action) */}
      <a 
        href="https://wa.link/dqfuog" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#27654b] hover:bg-[#1f4a3b] text-white px-6 py-2 rounded-md font-heading font-semibold transition-colors text-sm shadow-sm"
      >
        Inscribirse
      </a>
    </nav>
  );
};

export default Navbar;