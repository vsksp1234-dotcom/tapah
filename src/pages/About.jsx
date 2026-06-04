import { motion } from 'framer-motion';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section id="about" className="py-24 bg-luxury-black overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image/Visual side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-luxury-gray relative overflow-hidden rounded-sm border border-luxury-gold/20">
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Dining Experience" 
                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-r border-b border-luxury-gold/30 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 border-l border-t border-luxury-gold/30 -z-10"></div>
          </motion.div>

          {/* Content side */}
          <div className="space-y-10">
            <motion.div {...fadeIn}>
              <span className="text-luxury-gold uppercase tracking-[0.3em] text-sm font-body mb-4 block">Our Story</span>
              <h2 className="text-5xl font-heading text-luxury-white leading-tight mb-6">
                Redefining the <span className="text-luxury-gold italic">Art of Dining</span> in Deesa
              </h2>
              <p className="text-gray-400 font-body leading-relaxed text-lg">
                TAPAH was born from a singular vision: to create a sanctuary where culinary excellence meets unparalleled luxury. Located in the heart of Deesa, we offer a refined escape for those who seek more than just a meal—we offer an experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div 
                {...fadeIn}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-3"
              >
                <h3 className="text-xl font-heading text-luxury-gold">Our Mission</h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed">
                  To blend traditional flavors with modern techniques, creating a gastronomic journey that lingers on the palate and in the memory.
                </p>
              </motion.div>

              <motion.div 
                {...fadeIn}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-3"
              >
                <h3 className="text-xl font-heading text-luxury-gold">Our Values</h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed">
                  Excellence in every detail, authenticity in every ingredient, and a commitment to the highest standards of hospitality.
                </p>
              </motion.div>
            </div>

            <motion.div 
              {...fadeIn}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-6"
            >
              <div className="p-8 border-l-2 border-luxury-gold bg-luxury-gray/50">
                <p className="text-luxury-white italic font-heading text-xl">
                  "Where Taste Meets Experience is not just our slogan; it is the philosophy that guides every dish we serve and every guest we welcome."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
