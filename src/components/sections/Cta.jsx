import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT } from '../../config/contact';

const WHATSAPP_ICON_URL = 'https://cdn-icons-png.flaticon.com/512/733/733585.png';

function Cta() {
  // Estados para el formulario
  let [enviado, setEnviado] = useState(false);
  let [cargando, setCargando] = useState(false);

  // Función para enviar los datos a Netlify
  function enviarFormulario(evento) {
    evento.preventDefault();
    setCargando(true);

    let formulario = evento.target;
    let datos = new FormData(formulario);
    let cuerpo = new URLSearchParams(datos).toString();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: cuerpo,
    })
      .then(function() {
        setEnviado(true);
        setCargando(false);
        formulario.reset();
      })
      .catch(function() {
        alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
        setCargando(false);
      });
  }

  return (
    <section className="py-12 px-6 pb-24 bg-brand-bg">
      <div className="max-w-6xl mx-auto">
        
        {/* Tarjeta CTA principal - Manteniendo tu degradado exacto */}
        <div className="bg-gradient-to-r from-[#206A4F] to-[#003124] rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-2xl border border-brand-forest/80 flex flex-col md:flex-row gap-12 items-center">
          
          {/* Efecto de resplandor dorado en la esquina */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-golden/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

          {/* Columna Izquierda: Tus textos y botones originales */}
          <div className="relative z-10 flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              ¿Listo para empezar?
            </h2>
            
            <p className="text-white/90 font-body text-lg md:text-xl mb-3">
              Únete a la nueva generación de expertos forestales tecnológicos.
            </p>
            
            <p className="text-white/80 font-body text-base md:text-lg mb-10">
              ¿Tienes dudas sobre el curso? Escríbeme, respondo en menos de 24 horas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
              {/* Botón de WhatsApp Blanco con tu link y tu ícono */}
              <a 
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-white hover:bg-brand-canvas text-brand-forest px-8 py-3.5 rounded-2xl font-heading font-bold text-lg transition-colors shadow-lg inline-flex items-center justify-center gap-3 w-full sm:w-auto"
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
                {CONTACT.email}
              </a>
            </div>
          </div>

          {/* Columna Derecha: Formulario de Netlify */}
          <div className="relative z-10 w-full md:w-[400px] bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/10">
            {enviado ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-4 text-brand-golden">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-white font-heading font-bold text-2xl mb-2">¡Mensaje enviado!</h3>
                <p className="text-white/70 font-body text-sm">Me pondré en contacto contigo muy pronto.</p>
              </div>
            ) : (
              <form onSubmit={enviarFormulario} className="flex flex-col gap-4">
                <input type="hidden" name="form-name" value="contacto" />
                <input type="hidden" name="bot-field" />

                <input 
                  type="text" 
                  name="nombre" 
                  required 
                  placeholder="Tu nombre completo"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-xl px-4 py-3 outline-none focus:border-brand-golden transition-colors"
                />

                <input 
                  type="email" 
                  name="correo" 
                  required 
                  placeholder="Tu correo electrónico"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-xl px-4 py-3 outline-none focus:border-brand-golden transition-colors"
                />

                <textarea 
                  name="mensaje" 
                  required 
                  rows="3"
                  placeholder="¿En qué te puedo ayudar?"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-xl px-4 py-3 outline-none focus:border-brand-golden transition-colors resize-none"
                ></textarea>

                <button 
                  type="submit" 
                  disabled={cargando}
                  className="bg-brand-golden hover:bg-[#E59114] text-[#003124] font-heading font-bold text-base px-6 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mt-2 disabled:opacity-70"
                >
                  {cargando ? 'Enviando...' : (
                    <>
                      Enviar mensaje <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Cta;