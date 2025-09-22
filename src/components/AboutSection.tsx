import React from 'react';
import { Shield, Zap, Globe, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security protocols protecting all operations'
    },
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'Sustainable mining operations with renewable energy sources'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'International compliance and best practice implementation'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Strategic expansion plan from 5MW to 500MW capacity'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble w-40 h-40 top-20 right-10 opacity-4" style={{ animationDelay: '-15s' }}></div>
        <div className="bubble w-28 h-28 bottom-40 left-16 opacity-6" style={{ animationDelay: '-8s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Image/Visual */}
            <div className="relative">
              <div className="glass rounded-3xl p-8 hover-lift">
                {/* Placeholder for Mozambique Map or Company Visual */}
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-48 h-48 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Mozambique Operations</h3>
                  <p className="text-muted-foreground">Strategic locations across key regions</p>
                </div>
              </div>
            </div>

            {/* Right: Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 hover-lift p-4 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Stats */}
          <div className="glass rounded-3xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Operations</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent mb-2">3</div>
                <div className="text-sm text-muted-foreground">Locations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;