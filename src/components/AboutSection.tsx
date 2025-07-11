
import React from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: '15+', label: 'Clientes satisfechos' },
    { icon: Award, number: '50+', label: 'Proyectos completados' },
    { icon: Clock, number: '3+', label: 'Años de experiencia' },
    { icon: Target, number: '100%', label: 'Tasa de éxito' }
  ];

  const values = [
    {
      title: 'Innovación',
      description: 'Utilizamos las tecnologías más avanzadas para crear soluciones que marquen la diferencia.'
    },
    {
      title: 'Calidad',
      description: 'Nos comprometemos a entregar productos de la más alta calidad, probados y optimizados.'
    },
    {
      title: 'Colaboración',
      description: 'Trabajamos en estrecha colaboración con nuestros clientes para entender sus necesidades.'
    },
    {
      title: 'Resultados',
      description: 'Nos enfocamos en generar resultados medibles que impulsen el crecimiento de tu negocio.'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sobre Nosotros
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos un equipo apasionado de desarrolladores y consultores tecnológicos 
              comprometidos con transformar ideas en soluciones digitales exitosas
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nuestro compromiso con la excelencia
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                En Sento, creemos que la tecnología debe ser un catalizador para el crecimiento empresarial. 
                Por eso, nos especializamos en crear soluciones personalizadas que no solo cumplen con los 
                requisitos técnicos, sino que también generan valor real para nuestros clientes.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nuestro enfoque se basa en la comprensión profunda de las necesidades del negocio, 
                la aplicación de las mejores prácticas de desarrollo y la entrega de resultados que 
                superen las expectativas.
              </p>

              <div className="bg-primary-50 rounded-2xl p-6">
                <h4 className="font-semibold text-primary mb-3">Nuestra Misión</h4>
                <p className="text-gray-700">
                  Empoderar a las empresas con soluciones tecnológicas innovadoras que impulsen 
                  su crecimiento y competitividad en el mercado digital.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
