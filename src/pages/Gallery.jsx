import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    title: "Luxury Ambiance",
    category: "Interior"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    title: "Handcrafted Cuisine",
    category: "Culinary"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
    title: "Artisan Platters",
    category: "Cuisine"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
    title: "Exquisite Dining",
    category: "Ambiance"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
    title: "Signature Dessert",
    category: "Cuisine"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    title: "Gourmet Starters",
    category: "Cuisine"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
    title: "Craft Cocktails",
    category: "Bar"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800",
    title: "Culinary Excellence",
    category: "Chef"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-luxury-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-sm font-body mb-4 block">Visual Journey</span>
          <h2 className="text-5xl md:text-6xl font-heading text-luxury-white mb-6">Our <span className="text-luxury-gold italic">Gallery</span></h2>
          <div className="w-24 h-[1px] bg-luxury-gold mx-auto mt-6"></div>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-sm"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-luxury-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
                <span className="text-luxury-gold text-xs uppercase tracking-widest mb-2 font-body">{image.category}</span>
                <h3 className="text-luxury-white text-xl font-heading">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-luxury-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-luxury-gold hover:text-luxury-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-0 right-0 text-center">
                <h3 className="text-luxury-white text-2xl font-heading mb-1">{selectedImage.title}</h3>
                <span className="text-luxury-gold uppercase tracking-[0.2em] text-sm font-body">{selectedImage.category}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
