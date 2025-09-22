import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ceoPortrait from '@/assets/ceo-portrait.jpg';
import ctoPortrait from '@/assets/cto-portrait.jpg';

const LeadershipSection = () => {
  const { t } = useLanguage();

  const leaders = [
    {
      name: t('leadership.ceo.name'),
      title: t('leadership.ceo.title'),
      description: t('leadership.ceo.description'),
      image: ceoPortrait,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'eduardo@noesis.co.mz'
      },
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      name: t('leadership.cto.name'),
      title: t('leadership.cto.title'),
      description: t('leadership.cto.description'),
      image: ctoPortrait,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'maria@noesis.co.mz'
      },
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="leadership" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble w-48 h-48 top-24 left-12 opacity-3" style={{ animationDelay: '-18s' }}></div>
        <div className="bubble w-36 h-36 bottom-16 right-16 opacity-5" style={{ animationDelay: '-9s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('leadership.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leaders driving Mozambique's blockchain revolution
            </p>
          </div>

          {/* Leadership Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {leaders.map((leader, index) => (
              <div key={index} className="bento-card group">
                <div className="text-center">
                  {/* Leader Avatar */}
                  <div className="relative mx-auto mb-6">
                    <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${leader.gradient} p-1`}>
                      <img 
                        src={leader.image}
                        alt={`${leader.name} - ${leader.title}`}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Leader Info */}
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <div className="text-accent font-medium mb-4">{leader.title}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {leader.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center space-x-4">
                    <a
                      href={leader.social.linkedin}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover-lift focus-ring"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={leader.social.twitter}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover-lift focus-ring"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${leader.social.email}`}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover-lift focus-ring"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Advisory Board */}
          <div className="glass rounded-3xl p-8">
            <h3 className="text-xl font-bold text-center mb-8">Advisory Board</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">JM</span>
                </div>
                <h4 className="font-semibold mb-1">João Manuel</h4>
                <div className="text-sm text-muted-foreground">Energy Sector Expert</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">AS</span>
                </div>
                <h4 className="font-semibold mb-1">Ana Silva</h4>
                <div className="text-sm text-muted-foreground">Financial Technology</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">DR</span>
                </div>
                <h4 className="font-semibold mb-1">David Rodriguez</h4>
                <div className="text-sm text-muted-foreground">Blockchain Architecture</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;