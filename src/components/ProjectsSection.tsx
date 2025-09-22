import React from 'react';
import { Calendar, MapPin, Zap, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectsSection = () => {
  const { t } = useLanguage();

  const timelinePhases = [
    {
      phase: '2024',
      capacity: '5MW',
      title: t('projects.timeline.5mw'),
      status: 'active',
      description: 'Initial deployment in Maputo with pilot mining operations'
    },
    {
      phase: '2025',
      capacity: '50MW',
      title: t('projects.timeline.50mw'),
      status: 'planned',
      description: 'Regional expansion to Beira and Nampula provinces'
    },
    {
      phase: '2026',
      capacity: '500MW',
      title: t('projects.timeline.500mw'),
      status: 'future',
      description: 'National scale operations across multiple sites'
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble w-72 h-72 top-16 right-4 opacity-2" style={{ animationDelay: '-20s' }}></div>
        <div className="bubble w-44 h-44 bottom-32 left-20 opacity-4" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('projects.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our strategic roadmap for building Mozambique's largest crypto mining infrastructure
            </p>
          </div>

          {/* Pioneer Project Highlight */}
          <div className="bento-card-lg mb-16 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
                  {t('projects.pioneer.title')}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {t('projects.pioneer.description')}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Located in Maputo's industrial zone, our flagship facility represents the beginning of Mozambique's blockchain revolution with state-of-the-art mining equipment and sustainable energy solutions.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-accent mr-2" />
                    <span className="text-sm">Maputo, Mozambique</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-accent mr-2" />
                    <span className="text-sm">5MW Capacity</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-accent mr-2" />
                    <span className="text-sm">Q4 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-accent mr-2" />
                    <span className="text-sm">Pilot Phase</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                  {/* Placeholder for facility image */}
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Zap className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-accent">5MW</div>
                    <div className="text-sm text-muted-foreground">Pioneer Facility</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Roadmap */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12">{t('projects.expansion.title')}</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
              
              <div className="space-y-12">
                {timelinePhases.map((phase, index) => (
                  <div key={index} className="relative">
                    <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <div className={`max-w-md ${index % 2 === 0 ? 'mr-8 text-right' : 'ml-8 text-left'}`}>
                        <div className="bento-card">
                          <div className="flex items-center justify-between mb-3">
                            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                              phase.status === 'active' ? 'bg-accent/20 text-accent' :
                              phase.status === 'planned' ? 'bg-primary/20 text-primary' :
                              'bg-muted text-muted-foreground'
                            }`}>
                              {phase.status.toUpperCase()}
                            </div>
                            <div className="text-2xl font-bold text-accent">{phase.capacity}</div>
                          </div>
                          <h4 className="font-bold mb-2">{phase.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{phase.description}</p>
                          <div className="text-xs text-muted-foreground">{phase.phase}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2">
                      <div className={`w-4 h-4 rounded-full border-4 ${
                        phase.status === 'active' ? 'bg-accent border-accent/30' :
                        phase.status === 'planned' ? 'bg-primary border-primary/30' :
                        'bg-muted border-muted/30'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="glass rounded-3xl p-8">
            <h3 className="text-xl font-bold text-center mb-8">Projected Impact by 2026</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">500MW</div>
                <div className="text-sm text-muted-foreground">Total Capacity</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">1,000+</div>
                <div className="text-sm text-muted-foreground">Jobs Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">$100M+</div>
                <div className="text-sm text-muted-foreground">Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">5</div>
                <div className="text-sm text-muted-foreground">Provinces</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;