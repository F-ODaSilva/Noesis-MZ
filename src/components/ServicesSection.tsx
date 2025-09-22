import React from 'react';
import { Cpu, Users, Server, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import renewableEnergyImage from '@/assets/renewable-energy.jpg';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Cpu,
      title: t('services.mining.title'),
      description: t('services.mining.description'),
      features: ['ASIC Mining Rigs', 'GPU Farms', 'Liquid Cooling', 'Smart Monitoring'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: ['Strategy Planning', 'Risk Assessment', 'Compliance', 'Integration'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Server,
      title: t('services.infrastructure.title'),
      description: t('services.infrastructure.description'),
      features: ['Data Centers', 'Network Setup', 'Security Systems', '24/7 Support'],
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble w-56 h-56 top-32 left-8 opacity-3" style={{ animationDelay: '-12s' }}></div>
        <div className="bubble w-32 h-32 bottom-20 right-12 opacity-5" style={{ animationDelay: '-6s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive blockchain and crypto mining solutions tailored for Mozambique's digital transformation
            </p>
          </div>

          {/* Bento Grid Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bento-card group cursor-pointer ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                } ${index === 1 ? 'lg:row-span-1' : ''}`}
              >
                {/* Service Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Service CTA */}
                <div className="flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Service Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                <h4 className="text-lg font-semibold">Enterprise Solutions</h4>
              </div>
              <p className="text-muted-foreground">
                Custom blockchain solutions for enterprises looking to integrate crypto mining and blockchain technology into their operations.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                <h4 className="text-lg font-semibold">Partnership Programs</h4>
              </div>
              <p className="text-muted-foreground">
                Strategic partnerships with local and international organizations to accelerate blockchain adoption in Mozambique.
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <img 
                src={renewableEnergyImage}
                alt="Renewable energy infrastructure supporting sustainable crypto mining in Mozambique"
                className="w-full h-32 object-cover rounded-xl mb-4"
              />
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h4 className="text-lg font-semibold">Green Energy</h4>
              </div>
              <p className="text-muted-foreground">
                100% renewable energy commitment for sustainable crypto mining operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;