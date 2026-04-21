import React from 'react';
import LightboxImage from '../ui/LightBoxImage';

import proceso1 from '../../assets/proceso 1.jpeg';
import proceso2 from '../../assets/proceso 2.jpeg';
import proceso3 from '../../assets/proceso 3.jpeg';
import proceso4 from '../../assets/proceso 4.jpeg';
import proceso5 from '../../assets/proceso 5.jpeg';

function CourseContent() {
  let capitulos = [
    {
      id: "01",
      titulo: "Configuración del entorno y preparación de datos",
      descripcion: "Conecta herramientas en la nube y prepara tus imágenes aéreas fragmentando ortomosaicos para el entrenamiento del modelo.",
      herramientas: "Google Colab · Python",
      colorBg: "#7A4C11",
      colorTextoNum: "#FFFFFF",
      colorBadgeBg: "#F0E4D8",
      imagen: proceso1,
      altImagen: "Proceso 1 del curso"
    },
    {
      id: "02",
      titulo: "Etiquetado asistido en Roboflow",
      descripcion: "Usa IA para ayudarte a identificar y etiquetar copas de forma masiva, reduciendo drásticamente el tiempo de preparación del dataset.",
      herramientas: "Roboflow · Box Prompting",
      colorBg: "#F6A962",
      colorTextoNum: "#003124",
      colorBadgeBg: "#FDF0E3",
      imagen: proceso2,
      altImagen: "Proceso 2 del curso"
    },
    {
      id: "03",
      titulo: "Entrenamiento del modelo YOLOv8",
      descripcion: "Lanza el proceso de entrenamiento utilizando la arquitectura YOLOv8, ajustando los parámetros para detección de objetos en alta resolución.",
      herramientas: "YOLOv8 · GPU Cloud",
      colorBg: "#4BE5CA",
      colorTextoNum: "#003124",
      colorBadgeBg: "#E3FAF5",
      imagen: proceso3,
      altImagen: "Proceso 3 del curso"
    },
    {
      id: "04",
      titulo: "Evaluación estadística y diagnóstico",
      descripcion: "Interpreta los gráficos de precisión y pérdida para asegurar que tu modelo sea confiable antes de aplicarlo en el campo.",
      herramientas: "Métricas YOLO · mAP",
      colorBg: "#A4E4B8",
      colorTextoNum: "#003124",
      colorBadgeBg: "#EEF9F2",
      imagen: proceso4,
      altImagen: "Proceso 4 del curso"
    },
    {
      id: "05",
      titulo: "Inferencia e integración con SIG",
      descripcion: "Exporta tus detecciones a coordenadas reales y visualízalas en tu software SIG favorito para análisis territorial final.",
      herramientas: "GeoPackage · QGIS",
      colorBg: "#FA9A1B",
      colorTextoNum: "#003124",
      colorBadgeBg: "#FEF1E0",
      imagen: proceso5,
      altImagen: "Proceso 5 del curso"
    }
  ];

  return (
    <section id="programa" className="py-24 px-6 bg-brand-bg">
      <div className="max-w-4xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-forest leading-tight mb-4">
            ¿Qué aprenderás? <br className="hidden md:block" />
            5 capítulos, 1 proyecto completo
          </h2>
          <p className="text-gray-deep/90 font-body text-lg max-w-2xl mx-auto">
            Un viaje desde los fundamentos hasta la integración avanzada de Visión Artificial en flujos de trabajo SIG.
          </p>
        </div>

        {/* Línea de tiempo (Timeline) */}
        <div className="flex flex-col gap-8">
          {capitulos.map((cap) => (
            <div key={cap.id} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 w-full">
              
              {/* Círculo con el número */}
              <div 
                className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-heading text-xl md:text-2xl font-bold shadow-sm z-10 mx-auto md:mx-0"
                style={{ backgroundColor: cap.colorBg, color: cap.colorTextoNum }}
              >
                {cap.id}
              </div>

              {/* Tarjeta de contenido */}
              <div className="flex-1 bg-brand-canvas/60 rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col md:flex-row md:items-center gap-4 shadow-sm border border-brand-canvas/80">
                {/* Borde lateral de color */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-2" 
                  style={{ backgroundColor: cap.colorBg }}
                ></div>

                <div className="flex-1 flex flex-col gap-3">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <h3 className="text-xl md:text-2xl font-bold font-heading text-brand-forest pr-4">
                      {cap.titulo}
                    </h3>
                    
                    {/* Etiqueta de Herramientas (Badge) */}
                    <div 
                      className="self-start px-3 py-1 rounded-full text-[11px] md:text-xs font-bold font-heading tracking-wide shrink-0"
                      style={{ backgroundColor: cap.colorBadgeBg, color: cap.colorBg === '#7A4C11' ? cap.colorBg : '#003124' }}
                    >
                      {cap.herramientas}
                    </div>
                  </div>

                  <p className="text-brand-deep/75 font-body text-[15px] md:text-base leading-relaxed">
                    {cap.descripcion}
                  </p>
                </div>

                <LightboxImage
                  src={cap.imagen}
                  alt={cap.altImagen}
                  className="w-full md:w-44 h-36 md:h-32 object-cover rounded-2xl shrink-0"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CourseContent;