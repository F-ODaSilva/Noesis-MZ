import React from 'react';
import { Shield, Zap, Globe, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import blockchainImage from '@/assets/blockchain-visualization.jpg';

const AboutSection = () => {
  const { t } = useLanguage();
  const titleRef = useScrollAnimation<HTMLDivElement>('reveal');
  const imageRef = useScrollAnimation<HTMLDivElement>('reveal-left');
  const featuresRef = useStaggeredAnimation<HTMLDivElement>(4);
  const statsRef = useScrollAnimation<HTMLDivElement>('reveal-scale');

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
    <section id="about" className="py-24 relative overflow-hidden bg-animated">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble bubble-animate parallax-slow w-56 h-56 top-16 -right-10 opacity-30" style={{ animationDelay: '-15s' }}></div>
        <div className="bubble bubble-pulse parallax-medium w-40 h-40 bottom-32 left-10 opacity-50" style={{ animationDelay: '-8s' }}></div>
        <div className="floating-orb w-64 h-64 top-1/4 left-3/4 opacity-20" style={{ animationDelay: '-25s' }}></div>
        <div className="geometric-shape top-16 left-1/4 w-8 h-2 bg-primary/10 parallax-fast" style={{ animationDelay: '-5s' }}></div>
        <div className="geometric-shape bottom-20 right-1/3 w-3 h-3 bg-accent/15 rounded-full parallax-medium" style={{ animationDelay: '-18s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} className="text-center mb-16">
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
            <div ref={imageRef} className="relative">
              <div className="modern-card hover:scale-[1.02]">
                <img 
                  src={blockchainImage}
                  alt="Blockchain technology visualization for cryptocurrency mining"
                  className="w-full aspect-square object-cover rounded-2xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Mozambique Operations</h3>
                  <p className="text-muted-foreground">Strategic locations across key regions</p>
                </div>
              </div>
            </div>

            {/* Right: Features */}
            <div ref={featuresRef} className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="reveal-stagger flex items-start space-x-4 hover-lift p-4 rounded-xl transition-all duration-300">
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
          <div ref={statsRef} className="modern-card">
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