import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-luxury-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          filter: 'brightness(0.4)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-transparent to-luxury-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="text-luxury-gold uppercase tracking-[0.3em] text-sm md:text-base font-body mb-4 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Exquisite Dining Since 2024
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-luxury-white mb-6 leading-tight">
            Where <span className="text-luxury-gold italic">Taste</span> Meets <br /> Experience
          </h1>

          <motion.p 
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Indulge in a culinary journey where traditional flavors meet modern luxury. 
            Located in the heart of Deesa, TAPAH offers an unforgettable gastronomic adventure.
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#reservations" className="px-8 py-4 bg-luxury-gold text-luxury-black font-bold tracking-widest hover:bg-luxury-white transition-all duration-300 rounded-none border border-luxury-gold text-center">
              BOOK A TABLE
            </a>
            <a href="#menu" className="px-8 py-4 bg-transparent text-luxury-white font-bold tracking-widest hover:bg-luxury-white/10 transition-all duration-300 rounded-none border border-luxury-white/30 text-center">
              VIEW MENU
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-luxury-gold to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
