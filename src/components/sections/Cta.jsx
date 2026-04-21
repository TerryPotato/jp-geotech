import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

function Cta() {
  // Estados para controlar el botón y el mensaje de éxito
  let [enviado, setEnviado] = useState(false);
  let [cargando, setCargando] = useState(false);

  // Función que envía los datos a Netlify sin recargar la página
  function handleSubmit(evento) {
    evento.preventDefault(); // Evita que la página se recargue
    setCargando(true);

    let miFormulario = evento.target;
    let formData = new FormData(miFormulario);

    // Convertimos los datos al formato que Netlify entiende
    let datosURL = new URLSearchParams(formData).toString();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: datosURL,
    })
      .then(function() {
        setEnviado(true);
        setCargando(false);
        miFormulario.reset(); // Limpia los campos
      })
      .catch(function(error) {
        alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
        setCargando(false);
      });
  }

  return (
    <section className="py-12 px-6 pb-24 bg-brand-bg">
      <div className="max-w-6xl mx-auto">
        
        {/* Tarjeta CTA principal - Ahora en dos columnas para computadoras */}
        <div className="bg-brand-forest rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-2xl border border-brand-forest/80 flex flex-col md:flex-row gap-12 items-center">
          
          {/* Efecto de resplandor dorado */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-golden/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

          {/* Columna Izquierda: Textos y Contacto Directo */}
          <div className="relative z-10 flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              ¿Listo para empezar?
            </h2>
            
            <p className="text-white/90 font-body text-lg mb-8">
              Únete a la nueva generación de expertos forestales. Escríbeme y respondo en menos de 24 horas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5">
              <a 
                href="https://wa.me/529231104368"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-white hover:bg-brand-canvas text-brand-forest px-8 py-3.5 rounded-2xl font-heading font-bold text-lg transition-colors shadow-lg w-full sm:w-auto text-center"
              >
                WhatsApp Directo
              </a>
              
              <a 
                href="mailto:chucho1506.jpc@gmail.com" 
                className="flex items-center justify-center gap-2 text-white hover:text-brand-golden font-body font-medium transition-colors w-full sm:w-auto"
              >
                <Mail size={20} />
                chucho1506.jpc@gmail.com
              </a>
            </div>
          </div>

          {/* Columna Derecha: Formulario de Netlify */}
          <div className="relative z-10 w-full md:w-[400px] bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/10">
            {enviado ? (
              // Mensaje de éxito que aparece cuando se envía el formulario
              <div className="text-center py-8">
                <div className="flex justify-center mb-4 text-brand-golden">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-white font-heading font-bold text-2xl mb-2">¡Mensaje enviado!</h3>
                <p className="text-white/70 font-body text-sm">Me pondré en contacto contigo muy pronto.</p>
              </div>
            ) : (
              // El formulario real
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Campos ocultos requeridos por Netlify */}
                <input type="hidden" name="form-name" value="contacto" />
                <input type="hidden" name="bot-field" />

                <div>
                  <label className="sr-only" htmlFor="nombre">Tu Nombre</label>
                  <input 
                    type="text" 
                    id="nombre"
                    name="nombre" 
                    required 
                    placeholder="Tu nombre completo"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white rounded-xl px-4 py-3 outline-none focus:border-brand-golden transition-colors"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="correo">Tu Correo</label>
                  <input 
                    type="email" 
                    id="correo"
                    name="correo" 
                    required 
                    placeholder="Tu correo electrónico"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white rounded-xl px-4 py-3 outline-none focus:border-brand-golden transition-colors"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="mensaje">Mensaje</label>
                  <textarea 
                    id="mensaje"
                    name="mensaje" 
                    required 
                    rows="3"
                    placeholder="¿En qué te puedo ayudar?"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white rounded-xl px-4 py-3 outline-none focus:border-brand-golden transition-colors resize-none"
                  ></textarea>
                </div>

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