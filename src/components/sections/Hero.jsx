import React from 'react';
import { PlayCircle } from 'lucide-react';
// Importamos las imágenes desde tu carpeta local
import bgImage from '../../assets/images/background.png';
import dronImage from '../../assets/images/dron.png';
import { CONTACT } from '../../config/contact';

const Hero = () => {
  return (
    <section id='home'
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Capa para aclarar un poco el fondo si la imagen original es muy oscura */}
      <div className="absolute inset-0 bg-brand-bg/60 backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Columna Izquierda: Textos y CTA */}
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 text-s text-brand-brown font-bold bg-[#FD9D1A]/20 px-3 py-1.5 rounded-full">
            TECNOLOGÍA DE VANGUARDIA
          </div>
          
          {/* Título Principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-[1.1]">
            <span className="text-brand-forest block mb-2">Detecta árboles</span>
            <span className="text-brand-forest block mb-2">desde el aire con</span>
            <span className="text-brand-brown block">Inteligencia</span>
            <span className="text-brand-brown block">Artificial</span>
            <span className="text-brand-brown block">y Drones</span>
          </h1>
          
          {/* Párrafo */}
          <p className="text-gray-soft text-base md:text-lg font-body max-w-lg leading-relaxed">
            Aprende a entrenar un modelo YOLOv8 para detectar y contar copas de árboles en imágenes aéreas. Sin experiencia previa en IA. Herramientas 100% gratuitas.
          </p>
          
          {/* Botones */}
          <div className="flex flex-col sm:flex-row items-center gap-5 pt-3">
            <a 
              href={CONTACT.whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-orange hover:bg-brand-brown/80 text-white px-8 py-3.5 rounded-lg font-heading font-semibold transition-all shadow-lg shadow-brand-golden/30 w-full sm:w-auto text-center"
            >
              Quiero inscribirme
            </a>
            
            <button className="flex items-center gap-2 text-brand-forest font-heading font-semibold hover:text-brand-deep transition-colors group">
              <PlayCircle size={24} className="group-hover:scale-110 transition-transform" />
              Ver en acción
            </button>
          </div>
        </div>

        {/* Columna Derecha: Imagen del Dron con Boundings */}
        <div className="relative mt-8 md:mt-0 px-4 md:px-0 md:max-w-[92%] md:ml-auto">
          <div className="relative transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* Imagen Principal */}
            <img 
              src={dronImage} 
              alt="Dron sobrevolando bosque con IA" 
              className="w-[90%] mx-auto h-auto object-cover aspect-4/5 md:aspect-3/4"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;