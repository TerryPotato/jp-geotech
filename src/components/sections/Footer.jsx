import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';
import logo from '../../assets/logo geotech.svg';
import { CONTACT } from '../../config/contact';

function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-canvas border-t border-brand-deep/10 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Marca del Cliente */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="JP GeoTech logo" className="h-10 w-auto" />
              <h4 className="font-heading font-bold text-xl text-brand-forest">JP GeoTech</h4>
            </div>
            <p className="text-brand-deep/60 text-sm font-body leading-relaxed">
              Soluciones avanzadas en Ingeniería Forestal, SIG y monitoreo con drones potenciados por IA.
            </p>
          </div>

          {/* Columna 2: Contacto del Cliente */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-brand-deep/40">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-gray-deep/70 hover:text-brand-forest transition-colors text-sm">
                  <Mail size={16} />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-deep/70 hover:text-brand-forest transition-colors text-sm">
                  <img src={linkedin} alt="LinkedIn" className="w-4 h-4 object-contain" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-deep/70 hover:text-brand-forest transition-colors text-xs leading-snug">
                  <img src={whatsapp} alt="WhatsApp" className="w-4 h-4 object-contain" />
                  {CONTACT.whatsappNumber}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Tu marca personal y CTA */}
          <div className="bg-brand-forest/5 p-6 rounded-2xl border border-brand-forest/10 space-y-4">
            <h4 className="font-heading font-bold text-brand-forest text-sm uppercase tracking-widest">Desarrollo Web</h4>
            <p className="text-brand-deep/80 text-sm font-body">
              Diseñado y desarrollado por <span className="font-bold">Pamela Prados</span>.
            </p>
            <div className="pt-2">
              <p className="text-xs text-brand-deep/60 mb-3 italic">¿Quieres que diseñe tu página?</p>
              <a
                href="https://wa.link/oqlxii"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-deep/50 hover:text-brand-forest transition-colors font-heading font-bold text-sm"
              >
                Contacto de desarrollo disponible bajo solicitud
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* Línea final de Copyright */}
        <div className="pt-8 border-t border-brand-deep/5 text-center">
          <p className="text-brand-deep/40 text-xs font-body">
            &copy; {currentYear} JP GeoTech · Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;