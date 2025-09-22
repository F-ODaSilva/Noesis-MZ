import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const { t } = useLanguage();
  const titleRef = useScrollAnimation<HTMLHeadingElement>('reveal-scale');
  const subtitleRef = useScrollAnimation<HTMLParagraphElement>('reveal');
  const ctaRef = useScrollAnimation<HTMLDivElement>('reveal');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern cryptocurrency mining facility in Mozambique"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70"></div>
      </div>
      
      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Bubbles */}
        <div className="bubble bubble-animate parallax-slow w-80 h-80 -top-10 -left-20 opacity-3"></div>
        <div className="bubble bubble-animate bubble-pulse parallax-medium w-64 h-64 top-20 right-10 opacity-4" style={{ animationDelay: '-5s' }}></div>
        <div className="bubble bubble-animate parallax-fast w-40 h-40 bottom-40 left-1/4 opacity-6" style={{ animationDelay: '-10s' }}></div>
        <div className="bubble bubble-animate w-32 h-32 top-1/3 left-1/3 opacity-5" style={{ animationDelay: '-15s' }}></div>
        
        {/* Floating Orbs */}
        <div className="floating-orb w-96 h-96 -top-32 -right-32" style={{ animationDelay: '-8s' }}></div>
        <div className="floating-orb w-72 h-72 bottom-0 -left-24" style={{ animationDelay: '-20s' }}></div>
        
        {/* Mesh Gradient Background */}
        <div className="mesh-gradient w-full h-full opacity-30"></div>
        
        {/* Geometric Shapes */}
        <div className="geometric-shape top-1/4 right-1/4 w-6 h-6 bg-accent/20 rotate-45 parallax-medium" style={{ animationDelay: '-3s' }}></div>
        <div className="geometric-shape bottom-1/3 left-1/5 w-4 h-4 bg-primary/20 rounded-full parallax-fast" style={{ animationDelay: '-12s' }}></div>
        <div className="geometric-shape top-3/4 right-1/3 w-3 h-8 bg-accent/15 parallax-slow" style={{ animationDelay: '-7s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 text-sm font-medium">
            <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
            Mozambique's Premier Crypto Mining Company
          </div>

          {/* Hero Title */}
          <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p ref={subtitleRef} className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* Hero CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
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