import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const titleRef = useScrollAnimation<HTMLDivElement>('reveal');
  const formRef = useScrollAnimation<HTMLDivElement>('reveal-left');
  const infoRef = useScrollAnimation<HTMLDivElement>('reveal-right');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      info: t('contact.info.address'),
      subInfo: 'Av. Julius Nyerere, 1234'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: t('contact.info.phone'),
      subInfo: 'Mon-Fri 8:00-17:00'
    },
    {
      icon: Mail,
      title: 'Email',
      info: t('contact.info.email'),
      subInfo: 'We reply within 24 hours'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: '08:00 - 17:00',
      subInfo: 'Monday to Friday'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-animated">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble bubble-animate parallax-slow w-76 h-76 top-12 left-4 opacity-3" style={{ animationDelay: '-25s' }}></div>
        <div className="bubble bubble-pulse parallax-medium w-52 h-52 bottom-16 right-12 opacity-4" style={{ animationDelay: '-7s' }}></div>
        <div className="floating-orb w-68 h-68 top-2/3 right-4/5 opacity-16" style={{ animationDelay: '-32s' }}></div>
        <div className="geometric-shape top-24 right-1/4 w-5 h-5 bg-primary/15 rotate-45 parallax-fast" style={{ animationDelay: '-13s' }}></div>
        <div className="geometric-shape bottom-32 left-1/3 w-2 h-6 bg-accent/20 parallax-medium" style={{ animationDelay: '-21s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div ref={formRef} className="bento-card glass-strong">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('contact.form.name')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass focus-ring"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('contact.form.email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass focus-ring"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="glass focus-ring resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full hero-cta group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 mr-2 border-b-2 border-white"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      {t('contact.form.submit')}
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div ref={infoRef} className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bento-card group hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <div className="text-foreground font-medium">{item.info}</div>
                      <div className="text-sm text-muted-foreground">{item.subInfo}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Map Placeholder */}
              <div className="bento-card">
                <h4 className="font-semibold mb-4">Our Location</h4>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Interactive Map</div>
                    <div className="text-xs text-muted-foreground">Maputo, Mozambique</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;