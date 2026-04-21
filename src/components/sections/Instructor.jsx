import React from 'react';
import { BadgeCheck, GraduationCap } from 'lucide-react';
// Deja esta importación lista para cuando subas la foto real de Jesús
import instructorImg from '../../assets/user.png';

function Instructor() {
  return (
    <section id="instructor" className="py-24 px-6 bg-brand-bg">
      <div className="max-w-5xl mx-auto">
        
        {/* Tarjeta principal (Card) */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-sm border border-brand-canvas/50 flex flex-col md:flex-row items-center gap-10 md:gap-14">
          
          {/* Columna Izquierda: Círculo de la foto */}
          <div className="shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#E5E5E5] overflow-hidden flex items-center justify-center shadow-inner">
              <img 
                src={instructorImg} 
                alt="Ing. Jesús Prados Coronado" 
                className="w-full h-full object-cover"
                // Fallback genérico si no encuentra la imagen local
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://ui-avatars.com/api/?name=Jesus+Prados&background=000&color=fff&size=256";
                }}
              />
            </div>
          </div>

          {/* Columna Derecha: Información del Instructor */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-forest mb-2">
              Conoce a tu Instructor
            </h2>
            
            <h3 className="text-xl font-heading font-bold text-[#8C591A] mb-6">
              Ing. Jesús Prados Coronado
            </h3>
            
            <p className="text-gray-deep/80 font-body text-base md:text-lg leading-relaxed mb-8">
              Ingeniero Forestal con más de 8 años de experiencia. Especialista en SIG, drones y automatización. Ha supervisado inventarios forestales en Veracruz y diseña modelos de IA para detección de árboles en proyectos reales para diversas instituciones y empresas.
            </p>

            {/* Pastillas de experiencia (Badges) */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2 bg-brand-tan px-4 py-2 rounded-full">
                <BadgeCheck size={18} className="text-brand-forest" strokeWidth={2} />
                <span className="font-heading font-bold text-sm text-brand-deep">8+ Años Exp.</span>
              </div>
              
              <div className="flex items-center gap-2 bg-brand-tan px-4 py-2 rounded-full">
                <GraduationCap size={18} className="text-brand-forest" strokeWidth={2} />
                <span className="font-heading font-bold text-sm text-brand-deep">Experto en Geo-AI</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Instructor;