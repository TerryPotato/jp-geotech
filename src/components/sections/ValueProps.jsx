import React from 'react';
import { Map, Cloud, Wand2, ChartColumnIncreasing  } from 'lucide-react';

const ValueProp = () => {
  return (
    <section id="beneficios" className="py-24 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado de la sección */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-forest leading-tight">
            No es un tutorial genérico. Es un proyecto real, de principio a fin.
          </h2>
          {/* Línea decorativa dorada */}
          <div className="w-32 h-1.5 bg-brand-golden mt-6"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Tarjeta 1: Datos Reales (Ocupa 2 columnas en compu) */}
          <div className="md:col-span-2 bg-white text-gray-deep rounded-2xl p-6 md:p-8 shadow-sm border border-brand-canvas/50">
            <div className="w-14 h-14 bg-soft-green/40 rounded-lg flex items-center justify-center text-brand-forest mb-5">
              <Map size={36} strokeWidth={2} />
            </div>
            <h3 className="text-[1.35rem] font-bold font-heading text-gray-deep mb-3.5">
              Datos reales de dron (.TIF)
            </h3>
            <p className="font-body text-[1rem] leading-relaxed">
              Trabajaremos con ortomosaicos georreferenciados reales, aprendiendo a procesar formatos SIG estándar para obtener resultados aplicables al mundo profesional.
            </p>
          </div>

          {/* Tarjeta 2: Herramientas Gratuitas (Ocupa 1 columna) */}
          <div className="md:col-span-1 bg-linear-to-r from-[#00514A] to-[#006B63] text-white rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center text-white mb-5 backdrop-blur-sm">
              <Cloud size={36} strokeWidth={2} />
            </div>
            <h3 className="text-[1.35rem] font-bold font-heading mb-3.5">
              Herramientas gratuitas
            </h3>
            <p className="font-body text-[1rem] leading-relaxed">
              Utilizaremos la potencia de Google Colab para procesamiento en la nube y Roboflow para gestión de datos, sin gastar un solo euro en licencias.
            </p>
          </div>

          {/* Tarjeta 3: Etiquetado Inteligente (Ocupa 1 columna) */}
          <div className="md:col-span-1 bg-brand-orange text-white rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-14 h-14 bg-brown/20 rounded-lg flex items-center justify-center text-brown mb-5">
              <Wand2 size={36} strokeWidth={2} />
            </div>
            <h3 className="text-[1.35rem] font-bold font-heading mb-3.5">
              Etiquetado inteligente
            </h3>
            <p className="font-body text-[1rem] leading-relaxed">
              Aprende técnicas de Box Prompting para acelerar el etiquetado de miles de árboles mediante asistencia de modelos pre-entrenados.
            </p>
          </div>

          {/* Tarjeta 4: Resultado Profesional (Ocupa 2 columnas, diseño horizontal) */}
          <div className="md:col-span-2 bg-white text-gray-deep rounded-2xl p-6 md:p-8 shadow-sm border border-brand-canvas/50 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-[7.2rem] h-[7.2rem] shrink-0 bg-brand-forest/10 rounded-xl flex items-center justify-center text-brand-forest">
              <ChartColumnIncreasing size={43} strokeWidth={2.4} />
            </div>
            <div>
              <h3 className="text-[1.35rem] font-bold font-heading mb-3.5">
                Resultado profesional (.gpkg) & Flujo completo
              </h3>
              <p className="font-body text-[1rem] leading-relaxed">
                No te quedas en la imagen. Exportamos las detecciones a GeoPackage para que puedas abrirlas en QGIS o ArcGIS Pro inmediatamente. Cubrimos desde la imagen cruda hasta el mapa final.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProp;