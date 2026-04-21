import React from 'react';
import { Mail } from 'lucide-react';

const WHATSAPP_ICON_URL = 'https://cdn-icons-png.flaticon.com/512/733/733585.png';

function Cta() {
  return (
    <section className="py-12 px-6 pb-24 bg-brand-bg">
      <div className="max-w-5xl mx-auto">
        
        {/* Tarjeta CTA principal */}
        <div className="bg-gradient-to-r from-[#206A4F] to-[#003124] rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl border border-brand-forest/80">
          
          {/* Efecto de resplandor dorado en la esquina */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-golden/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              ¿Listo para empezar?
            </h2>
            
            <p className="text-white/90 font-body text-lg md:text-xl mb-3">
              Únete a la nueva generación de expertos forestales tecnológicos.
            </p>
            
            <p className="text-white/80 font-body text-base md:text-lg mb-10">
              ¿Tienes dudas sobre el curso? Escríbeme, respondo en menos de 24 horas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Botón de WhatsApp Blanco */}
              <a 
                href="https://wa.link/dqfuog"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-white hover:bg-brand-canvas text-brand-forest px-8 py-3.5 rounded-2xl font-heading font-bold text-lg transition-colors shadow-lg inline-flex items-center gap-3"
              >
                <img src={WHATSAPP_ICON_URL} alt="WhatsApp" className="w-6 h-6 object-contain" />
                WhatsApp
              </a>
              
              {/* Enlace de correo */}
              <a 
                href="mailto:chucho1506.jpc@gmail.com" 
                className="flex items-center gap-2 text-white hover:text-brand-golden font-body font-medium transition-colors"
              >
                <Mail size={20} />
                chucho1506.jpc@gmail.com
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Cta;