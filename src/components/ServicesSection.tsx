
import React from 'react';
import { Code2, Smartphone, Globe, Database, Shield, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos, responsivos y optimizados para SEO. Utilizamos las últimas tecnologías como React, Next.js y Node.js.',
      features: ['Diseño responsivo', 'Optimización SEO', 'Panel de administración', 'Integración APIs']
    },
    {
      icon: Smartphone,
      title: 'Aplicaciones Móviles',
      description: 'Desarrollamos apps nativas e híbridas para iOS y Android que ofrecen una experiencia de usuario excepcional.',
      features: ['Apps nativas', 'Apps híbridas', 'UI/UX optimizado', 'Push notifications']
    },
    {
      icon: Globe,
      title: 'Consultoría Tecnológica',
      description: 'Asesoramos a empresas en su transformación digital, arquitectura de software y estrategias tecnológicas.',
      features: ['Auditoría técnica', 'Arquitectura de software', 'Migración a la nube', 'Estrategia digital']
    },
    {
      icon: Database,
      title: 'Backend & APIs',
      description: 'Desarrollamos backends robustos y APIs escalables que soportan tus aplicaciones web y móviles.',
      features: ['APIs RESTful', 'Bases de datos', 'Microservicios', 'Documentación completa']
    },
    {
      icon: Shield,
      title: 'Seguridad Web',
      description: 'Implementamos medidas de seguridad avanzadas para proteger tus aplicaciones y datos empresariales.',
      features: ['Auditoría de seguridad', 'SSL/TLS', 'Autenticación', 'Protección contra ataques']
    },
    {
      icon: Zap,
      title: 'Optimización & Performance',
      description: 'Optimizamos el rendimiento de tus aplicaciones para garantizar velocidad y una experiencia fluida.',
      features: ['Análisis de rendimiento', 'Optimización de código', 'CDN', 'Monitoreo continuo']
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio hacia el éxito digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="text-primary group-hover:text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
