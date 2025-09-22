import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  // Header
  'nav.about': { pt: 'Sobre', en: 'About' },
  'nav.services': { pt: 'Serviços', en: 'Services' },
  'nav.projects': { pt: 'Projetos', en: 'Projects' },
  'nav.contact': { pt: 'Contacto', en: 'Contact' },
  'nav.cta': { pt: 'Contactar', en: 'Contact Us' },
  
  // Hero Section
  'hero.title': { 
    pt: 'Transformando Energia Em Valor Digital', 
    en: 'Transforming Energy Into Digital Value' 
  },
  'hero.subtitle': { 
    pt: 'Soluções inteligentes para centros de dados e ativos digitais em Moçambique',
    en: 'NOESIS is at the forefront of blockchain revolution in Mozambique, building sustainable crypto mining infrastructure with cutting-edge technology.'
  },
  'hero.cta.primary': { pt: 'Começar Agora', en: 'Get Started' },
  'hero.cta.secondary': { pt: 'Saber Mais', en: 'Learn More' },
  
  // About Section
  'about.title': { pt: 'Sobre a NOESIS', en: 'About NOESIS' },
  'about.description': { 
    pt: 'Somos pioneiros em tecnologia blockchain em Moçambique, comprometidos em desenvolver soluções inovadoras de mineração de criptomoedas que impulsionam o crescimento económico sustentável.',
    en: 'We are blockchain technology pioneers in Mozambique, committed to developing innovative crypto mining solutions that drive sustainable economic growth.'
  },
  
  // Services Section
  'services.title': { pt: 'Nossos Serviços', en: 'Our Services' },
  'services.mining.title': { pt: 'Mineração de Criptomoedas', en: 'Crypto Mining' },
  'services.mining.description': { 
    pt: 'Infraestrutura avançada de mineração com eficiência energética otimizada',
    en: 'Advanced mining infrastructure with optimized energy efficiency' 
  },
  'services.consulting.title': { pt: 'Consultoria Blockchain', en: 'Blockchain Consulting' },
  'services.consulting.description': { 
    pt: 'Orientação especializada para integração de tecnologias blockchain',
    en: 'Expert guidance for blockchain technology integration' 
  },
  'services.infrastructure.title': { pt: 'Infraestrutura Digital', en: 'Digital Infrastructure' },
  'services.infrastructure.description': { 
    pt: 'Soluções completas de infraestrutura para operações digitais',
    en: 'Complete infrastructure solutions for digital operations' 
  },
  
  // Projects Section
  'projects.title': { pt: 'Nossos Projetos', en: 'Our Projects' },
  'projects.pioneer.title': { pt: 'Projeto Pioneiro', en: 'Pioneer Project' },
  'projects.pioneer.description': { 
    pt: 'Primeira operação de mineração de criptomoedas em grande escala em Moçambique',
    en: 'First large-scale crypto mining operation in Mozambique' 
  },
  'projects.expansion.title': { pt: 'Plano de Expansão', en: 'Expansion Plan' },
  'projects.timeline.5mw': { pt: '5MW - Fase Inicial', en: '5MW - Initial Phase' },
  'projects.timeline.50mw': { pt: '50MW - Expansão Regional', en: '50MW - Regional Expansion' },
  'projects.timeline.500mw': { pt: '500MW - Escala Nacional', en: '500MW - National Scale' },
  
  // Leadership Section
  'leadership.title': { pt: 'Liderança', en: 'Leadership' },
  'leadership.ceo.name': { pt: 'Eduardo Mondlane', en: 'Eduardo Mondlane' },
  'leadership.ceo.title': { pt: 'CEO & Fundador', en: 'CEO & Founder' },
  'leadership.ceo.description': { 
    pt: 'Visionário em tecnologia blockchain com 15+ anos de experiência em fintech',
    en: 'Blockchain technology visionary with 15+ years of fintech experience' 
  },
  'leadership.cto.name': { pt: 'Maria Santos', en: 'Maria Santos' },
  'leadership.cto.title': { pt: 'CTO', en: 'CTO' },
  'leadership.cto.description': { 
    pt: 'Especialista em infraestrutura de mineração e sistemas distribuídos',
    en: 'Mining infrastructure specialist and distributed systems expert' 
  },
  
  // Contact Section
  'contact.title': { pt: 'Entre em Contacto', en: 'Get In Touch' },
  'contact.description': { 
    pt: 'Pronto para se juntar à revolução blockchain? Contacte-nos hoje.',
    en: 'Ready to join the blockchain revolution? Contact us today.' 
  },
  'contact.form.name': { pt: 'Nome', en: 'Name' },
  'contact.form.email': { pt: 'Email', en: 'Email' },
  'contact.form.message': { pt: 'Mensagem', en: 'Message' },
  'contact.form.submit': { pt: 'Enviar Mensagem', en: 'Send Message' },
  'contact.info.address': { pt: 'Maputo, Moçambique', en: 'Maputo, Mozambique' },
  'contact.info.phone': { pt: '+258 XXX XXX XXX', en: '+258 XXX XXX XXX' },
  'contact.info.email': { pt: 'info@noesis.co.mz', en: 'info@noesis.co.mz' },
  
  // Footer
  'footer.tagline': { 
    pt: 'Construindo o futuro digital de Moçambique',
    en: 'Building Mozambique\'s digital future' 
  },
  'footer.rights': { pt: 'Todos os direitos reservados.', en: 'All rights reserved.' },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt'); // Default to Portuguese

  useEffect(() => {
    // Load saved language from localStorage
    const saved = localStorage.getItem('noesis_lang') as Language;
    if (saved && (saved === 'pt' || saved === 'en')) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    // Save language to localStorage
    localStorage.setItem('noesis_lang', language);
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    return translation ? translation[language] : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};