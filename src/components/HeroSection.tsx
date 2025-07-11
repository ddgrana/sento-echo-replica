
import React from 'react';
import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Le damos vida a productos electrónicos a través de una 
                <span className="text-primary"> solución integral</span> de manufactura y 
                <span className="text-primary"> supply chain</span> ágil y flexible
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Somos expertos en desarrollo web, aplicaciones móviles y consultoría tecnológica. 
                Llevamos tu negocio al siguiente nivel digital con soluciones innovadoras y personalizadas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-600 text-white px-8 py-4 text-lg"
                  onClick={() => scrollToSection('contacto')}
                >
                  Comenzar proyecto
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
                  onClick={() => scrollToSection('servicios')}
                >
                  Ver servicios
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <Code className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Desarrollo Web</h3>
                    <p className="text-gray-600 text-sm">Sitios web modernos y aplicaciones web robustas</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <Globe className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Consultoría IT</h3>
                    <p className="text-gray-600 text-sm">Asesoramiento tecnológico estratégico</p>
                  </div>
                </div>
                
                <div className="space-y-6 pt-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <Smartphone className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Apps Móviles</h3>
                    <p className="text-gray-600 text-sm">Aplicaciones nativas e híbridas</p>
                  </div>
                  
                  <div className="bg-primary rounded-2xl p-6 text-white">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <p className="text-primary-100">Proyectos completados exitosamente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
