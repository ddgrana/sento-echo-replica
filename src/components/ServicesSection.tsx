
import React from 'react';
import { Code2, Smartphone, Globe, Database, Shield, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: 'Sento Process Integration',
      description: 'Conectividad e integración completa de sistemas físicos con soluciones IoT avanzadas.',
      features: [
        'Conectividad de sistemas físicos a la nube',
        'Automatización y control de procesos mediante IoT',
        'Inspección constante inteligente'
      ]
    },
    {
      icon: Smartphone,
      title: 'Sento Product Aplicability',
      description: 'Dispositivos IoT especializados y sensores autónomos para diversas industrias.',
      features: [
        'Dispositivos IoT adaptables a tu industria',
        'Sensores de temperatura, humedad e iluminosidad autónomos conectados a la nube',
        'Sensores de concentración de CO2, pH y óxido-reducción conectados a la nube',
        'Sensores de consumo y aporte energético para la industria solar'
      ]
    },
    {
      icon: Database,
      title: 'Sento Electronics Hub',
      description: 'Gestión integral de la cadena de suministro y manufactura de productos electrónicos.',
      features: [
        'Gestión de la cadena de suministro para la fabricación de productos electrónicos',
        'PCB Assembly',
        'Production of metal and plastic parts',
        'Ensamblaje mecánico',
        'Revisión de diseños para manufactura',
        'Logística internacional de suministro y entrega',
        'Testeos y QA de firmware'
      ]
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
