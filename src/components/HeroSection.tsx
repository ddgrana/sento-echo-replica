
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
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                Le damos vida a productos electrónicos a través de una 
                <span className="text-primary"> solución integral</span> de manufactura y 
                <span className="text-primary"> supply chain</span> ágil y flexible
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
