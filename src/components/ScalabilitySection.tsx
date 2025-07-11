import React from 'react';
import { CheckCircle, TrendingUp, Settings } from 'lucide-react';

const ScalabilitySection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Entendimiento",
      description: "Aseguramos que los servicios o tecnologías prestadas por parte de Sento sean las adecuadas para tu empresa permitiéndote obtener data que genere valor."
    },
    {
      icon: TrendingUp,
      title: "Crecimiento",
      description: "Entendemos las necesidades cambiantes a medida que tu negocio crece y te acompañamos adaptando nuestras soluciones en una comunicación bilateral."
    },
    {
      icon: Settings,
      title: "Optimización",
      description: "Optimizamos tus costos y procesos a través de mejoras de ingeniería, manufactura y supply chain"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Escalabilidad conjunta: en Sento nos importa que tu empresa crezca acompañándote en el proceso
            </h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-first">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/a054cd9b-e364-44b7-99d4-792dcd3d0d04.png" 
                alt="Nos adaptamos al momento en el que esté tu iniciativa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScalabilitySection;