import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Título de la sección */}
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-forest text-center mb-20">
          Acceso en 3 pasos
        </h2>

        {/* Contenedor de los pasos con línea conectora */}
        <div className="relative">
          
          {/* Línea horizontal (Solo visible en computadoras) */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-gray-200 z-0"></div>

          {/* Grid de Pasos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <div className="flex flex-col items-center">
              {/* Círculo numerado */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold font-heading mb-6 shadow-lg"
                style={{ backgroundColor: "var(--color-soft-green)" }}
              >
                1
              </div>

              {/* Título del paso */}
              <h3 className="text-xl font-bold font-heading text-gray-deep text-center mb-3">
                Contáctame
              </h3>

              {/* Descripción */}
              <p className="text-gray-deep/80 font-body text-center text-sm leading-relaxed max-w-[280px]">
                Escríbeme por WhatsApp o correo para solicitar tu acceso al programa.
              </p>
            </div>

            <div className="flex flex-col items-center">
              {/* Círculo numerado */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold font-heading mb-6 shadow-lg"
                style={{ backgroundColor: "var(--color-brand-forest)" }}
              >
                2
              </div>

              {/* Título del paso */}
              <h3 className="text-xl font-bold font-heading text-gray-deep text-center mb-3">
                Recibe el enlace
              </h3>

              {/* Descripción */}
              <p className="text-gray-deep/80 font-body text-center text-sm leading-relaxed max-w-[280px]">
                Te enviaré el acceso a la plataforma con las clases en YouTube privado y el material de apoyo.
              </p>
            </div>

            <div className="flex flex-col items-center">
              {/* Círculo numerado */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold font-heading mb-6 shadow-lg"
                style={{ backgroundColor: "var(--color-brand-orange)" }}
              >
                3
              </div>

              {/* Título del paso */}
              <h3 className="text-xl font-bold font-heading text-gray-deep text-center mb-3">
                Aprende a tu ritmo
              </h3>

              {/* Descripción */}
              <p className="text-gray-deep/80 font-body text-center text-sm leading-relaxed max-w-[280px]">
                Accede de por vida a las clases y realiza el proyecto a tu conveniencia.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;