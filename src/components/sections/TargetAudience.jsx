import React from 'react';
import { UserCog, Plane, Trees, IdCard } from 'lucide-react';

const TargetAudience = () => {
  return (
    <section className="py-24 px-6 bg-brand-tan">
      <div className="max-w-6xl mx-auto">
        
        {/* Título de la sección */}
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-deep text-center mb-8">
          ¿Este curso es para ti?
        </h2>

        {/* Banner de barrera de entrada */}
        <div className="bg-brand-forest/5 border border-brand-forest/10 rounded-2xl p-6 md:p-3 max-w-4xl mx-auto mb-16 text-center shadow-[inset_0_2px_12px_rgba(16,83,57,0.12)]">
          <p className="text-brand-forest font-heading font-semibold text-lg md:text-xl leading-relaxed">
            No necesitas experiencia previa en inteligencia artificial ni en programación. 
            Solo necesitas una cuenta de Google y ganas de aprender.
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-8 text-center shadow-sm border-t-4 border-brand-forest border-b border-l border-r border-b-brand-canvas/50 border-l-brand-canvas/50 border-r-brand-canvas/50">
            {/* Ícono */}
            <div className="flex justify-center mb-5 text-gray-deep">
              <UserCog size={40} strokeWidth={1.5} />
            </div>

            {/* Título */}
            <h3 className="text-xl font-bold font-heading text-gray-deep mb-3">
              Estudiantes de Ingeniería
            </h3>

            {/* Descripción */}
            <p className="text-gray-deep/70 font-body text-sm leading-relaxed">
              Potencia tu perfil académico con habilidades de IA aplicada.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm border-t-4 border-[#7A4C11] border-b border-l border-r border-b-brand-canvas/50 border-l-brand-canvas/50 border-r-brand-canvas/50">
            {/* Ícono */}
            <div className="flex justify-center mb-5 text-[#7A4C11]">
              <Plane size={40} strokeWidth={1.5} />
            </div>

            {/* Título */}
            <h3 className="text-xl font-bold font-heading text-gray-deep mb-3">
              Operadores de dron
            </h3>

            {/* Descripción */}
            <p className="text-gray-deep/70 font-body text-sm leading-relaxed">
              Agrega servicios de análisis de datos a tus vuelos.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm border-t-4 border-brand-orange border-b border-l border-r border-b-brand-canvas/50 border-l-brand-canvas/50 border-r-brand-canvas/50">
            {/* Ícono */}
            <div className="flex justify-center mb-5 text-brand-orange">
              <Trees size={40} strokeWidth={1.5} />
            </div>

            {/* Título */}
            <h3 className="text-xl font-bold font-heading text-gray-deep mb-3">
              Ingenieros forestales
            </h3>

            {/* Descripción */}
            <p className="text-gray-deep/70 font-body text-sm leading-relaxed">
              Automatiza inventarios y monitoreo de sanidad forestal.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm border-t-4 border-soft-green border-b border-l border-r border-b-brand-canvas/50 border-l-brand-canvas/50 border-r-brand-canvas/50">
            {/* Ícono */}
            <div className="flex justify-center mb-5 text-soft-green">
              <IdCard size={40} strokeWidth={1.5} />
            </div>

            {/* Título */}
            <h3 className="text-xl font-bold font-heading text-gray-deep mb-3">
              Profesionistas del sector
            </h3>

            {/* Descripción */}
            <p className="text-gray-deep/70 font-body text-sm leading-relaxed">
              Moderniza tus flujos de trabajo con tecnología GIS avanzada.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TargetAudience;