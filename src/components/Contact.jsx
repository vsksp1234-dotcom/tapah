import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const contactInfo = [
    { icon: <MapPin size={24} />, title: 'Location', detail: 'Palanpur Highway, Deesa, Gujarat 385535' },
    { icon: <Phone size={24} />, title: 'Phone', detail: '+91 98765 43210' },
    { icon: <Mail size={24} />, title: 'Email', detail: 'reservations@tapah.com' },
    { icon: <Clock size={24} />, title: 'Hours', detail: 'Open Daily: 11:00 AM - 11:00 PM' }
  ];

  return (
    <section id="contact" className="py-24 bg-luxury-black border-t border-luxury-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          {...fadeIn}
          className="text-center mb-16"
        >
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-sm font-body mb-4 block">Connect With Us</span>
          <h2 className="text-5xl font-heading text-luxury-white">Contact & <span className="text-luxury-gold italic">Directions</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 bg-luxury-gray p-10 rounded-sm border border-luxury-gold/20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((info, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-luxury-gold">{info.icon}</div>
                  <h3 className="text-luxury-white font-heading text-xl">{info.title}</h3>
                  <p className="text-gray-400 font-body text-sm">{info.detail}</p>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-luxury-gold/10">
              <h3 className="text-luxury-white font-heading text-xl mb-6">Follow Our Journey</h3>
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-full min-h-[400px] bg-luxury-gray rounded-sm border border-luxury-gold/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-luxury-black/40 group-hover:bg-luxury-black/20 transition-colors duration-500 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
              alt="Map Location" 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                  <MapPin size={32} className="text-luxury-black" />
                </div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-luxury-black/80 backdrop-blur-sm border border-luxury-gold text-luxury-gold px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
