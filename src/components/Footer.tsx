import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Team', href: '#leadership' },
        { name: 'Careers', href: '#' },
        { name: 'News', href: '#' }
      ]
    },
    services: {
      title: 'Services',
      links: [
        { name: 'Crypto Mining', href: '#services' },
        { name: 'Consulting', href: '#services' },
        { name: 'Infrastructure', href: '#services' },
        { name: 'Support', href: '#contact' }
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Compliance', href: '#' }
      ]
    }
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:info@noesis.co.mz', label: 'Email' }
  ];

  const partners = [
    { name: 'EDM', logo: 'EDM' },
    { name: 'Vulcan', logo: 'VUL' }
  ];

  const scrollToSection = (id: string) => {
    if (id.startsWith('#') && id !== '#') {
      const element = document.getElementById(id.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-t">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble w-48 h-48 top-16 left-16 opacity-2" style={{ animationDelay: '-30s' }}></div>
        <div className="bubble w-32 h-32 bottom-20 right-32 opacity-3" style={{ animationDelay: '-15s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <span className="text-2xl font-bold">NOESIS</span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('footer.tagline')}
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover-lift focus-ring"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus-ring rounded px-1 py-0.5"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="py-8 border-t border-border/50">
          <div className="text-center mb-6">
            <h4 className="text-sm font-medium text-muted-foreground mb-4">Our Partners</h4>
            <div className="flex items-center justify-center space-x-8">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 rounded-lg glass flex items-center justify-center">
                    <span className="text-sm font-bold text-muted-foreground">
                      {partner.logo}
                    </span>
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground font-medium">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 NOESIS. {t('footer.rights')}
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-2 py-1">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-2 py-1">
                Terms of Service
              </button>
              <a
                href="https://lovable.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-2 py-1 flex items-center"
              >
                Built with Lovable
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;