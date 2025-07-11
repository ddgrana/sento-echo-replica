
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'María González',
      position: 'CEO, TechStart',
      company: 'TechStart Solutions',
      rating: 5,
      text: 'Sento transformó completamente nuestra presencia digital. El equipo entendió perfectamente nuestras necesidades y entregó una solución que superó nuestras expectativas. Su profesionalismo y expertise técnico son excepcionales.',
      avatar: 'MG'
    },
    {
      name: 'Carlos Rodríguez',
      position: 'Director de IT',
      company: 'Innovate Corp',
      rating: 5,
      text: 'La aplicación móvil que desarrollaron para nosotros ha sido un éxito rotundo. Los usuarios la califican constantemente con 5 estrellas. El proceso de desarrollo fue transparente y eficiente.',
      avatar: 'CR'
    },
    {
      name: 'Ana Martínez',
      position: 'Fundadora',
      company: 'Digital Hub',
      rating: 5,
      text: 'Excelente trabajo en la modernización de nuestro sistema legacy. Migraron toda nuestra infraestructura a la nube sin interrupciones y mejoraron significativamente nuestro rendimiento.',
      avatar: 'AM'
    },
    {
      name: 'Roberto Silva',
      position: 'Gerente General',
      company: 'RetailMax',
      rating: 5,
      text: 'Su consultoría tecnológica nos ayudó a identificar oportunidades de mejora que no habíamos considerado. Implementaron soluciones que redujeron nuestros costos operativos en un 30%.',
      avatar: 'RS'
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor recompensa. 
              Estos son algunos testimonios de empresas que han confiado en nosotros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 relative">
                <Quote className="text-primary opacity-20 absolute top-4 right-4" size={32} />
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    <p className="text-primary text-sm">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-8 text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">4.9/5</div>
                <div className="flex justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm">Rating promedio</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-sm">Clientes satisfechos</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm">Soporte técnico</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
