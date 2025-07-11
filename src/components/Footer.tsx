
import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo y descripción */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold">SENTO</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Transformamos ideas en soluciones tecnológicas innovadoras. 
                Especializados en desarrollo web, aplicaciones móviles y consultoría IT.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-primary" />
                  <span className="text-gray-300">contacto@sento.tech</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-primary" />
                  <span className="text-gray-300">+54 11 1234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-gray-300">Buenos Aires, Argentina</span>
                </div>
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="font-bold text-white mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('servicios')}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Desarrollo Web
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('servicios')}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Apps Móviles
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('servicios')}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Consultoría IT
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('servicios')}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Backend & APIs
                  </button>
                </li>
              </ul>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h4 className="font-bold text-white mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('inicio')}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('nosotros')}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Nosotros
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonios')}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Testimonios
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contacto')}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Sento Tech. Todos los derechos reservados.
              </p>
              <button
                onClick={scrollToTop}
                className="mt-4 md:mt-0 bg-primary hover:bg-primary-600 text-white p-2 rounded-lg transition-colors"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
