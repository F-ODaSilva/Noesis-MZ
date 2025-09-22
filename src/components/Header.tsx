import React, { useState, useEffect } from 'react';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { key: 'about', href: 'about' },
    { key: 'services', href: 'services' },
    { key: 'projects', href: 'projects' },
    { key: 'contact', href: 'contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-md' : ''
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold text-foreground">NOESIS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus-ring rounded-md px-3 py-2"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="focus-ring p-2 rounded-md hover:bg-muted transition-colors duration-200"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
              <span className="ml-1 text-sm font-medium">
                {language.toUpperCase()}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="focus-ring p-2 rounded-md hover:bg-muted transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? 
                <Moon className="w-5 h-5" /> : 
                <Sun className="w-5 h-5" />
              }
            </button>

            {/* CTA Button - Desktop */}
            <Button 
              className="hidden lg:flex hero-cta"
              onClick={() => scrollToSection('contact')}
            >
              {t('nav.cta')}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden focus-ring p-2 rounded-md hover:bg-muted transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? 
                <X className="w-6 h-6" /> : 
                <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass rounded-2xl p-6 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200 focus-ring rounded-md px-3 py-2"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
              <Button 
                className="hero-cta mt-4"
                onClick={() => scrollToSection('contact')}
              >
                {t('nav.cta')}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;