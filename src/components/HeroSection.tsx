import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble bubble-animate w-64 h-64 top-20 left-10 opacity-5"></div>
        <div className="bubble bubble-animate w-96 h-96 top-40 right-20 opacity-3" style={{ animationDelay: '-5s' }}></div>
        <div className="bubble bubble-animate w-32 h-32 bottom-32 left-1/4 opacity-8" style={{ animationDelay: '-10s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 text-sm font-medium">
            <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
            Mozambique's Premier Crypto Mining Company
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              className="hero-cta group"
              onClick={() => scrollToSection('contact')}
            >
              {t('hero.cta.primary')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="glass hover-lift group"
              onClick={() => scrollToSection('about')}
            >
              <Play className="mr-2 w-4 h-4" />
              {t('hero.cta.secondary')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500MW</div>
              <div className="text-sm text-muted-foreground">Target Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Launch Year</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Green Energy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;