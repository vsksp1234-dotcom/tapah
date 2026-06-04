import { motion } from 'framer-motion';

const menuData = [
  {
    category: "Starters",
    items: [
      { name: "Garlic Balls", price: "₹450", description: "Oven-baked dough balls brushed with garlic butter and herbs." },
      { name: "Focaccia Bread", price: "₹400", description: "Traditional Italian flatbread topped with rosemary and sea salt." }
    ]
  },
  {
    category: "Pizza",
    items: [
      { name: "Green Garden Pizza", price: "₹550", description: "Fresh seasonal vegetables, olives, and premium mozzarella." },
      { name: "Paneer Pizza", price: "₹580", description: "Spiced paneer cubes, capsicum, and red onions on a hand-tossed crust." },
      { name: "Margherita Pizza", price: "₹480", description: "Classic tomato sauce, fresh basil, and buffalo mozzarella." }
    ]
  },
  {
    category: "Dessert",
    items: [
      { name: "Biscoff Cheesecake in glass", price: "₹520", description: "Creamy cheesecake layered with crunchy Biscoff crumbles in a glass." },
      { name: "Mango Cheesecake", price: "₹500", description: "Seasonal mango puree over a velvety smooth cheesecake base." }
    ]
  }
];

const Menu = () => {
  return (
    <section className="min-h-screen bg-luxury-black py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-sm font-body mb-2 block">Culinary Excellence</span>
          <h2 className="text-5xl md:text-6xl font-heading text-luxury-white">Our <span className="text-luxury-gold italic">Menu</span></h2>
          <div className="w-24 h-[1px] bg-luxury-gold mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {menuData.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={section.category === "Pizza" ? "lg:row-span-2" : ""}
            >
              <h3 className="text-2xl font-heading text-luxury-gold mb-8 border-b border-luxury-gold/20 pb-2 inline-block uppercase tracking-widest">
                {section.category}
              </h3>
              
              <div className="grid gap-10">
                {section.items.map((item) => (
                  <div key={item.name} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-xl font-heading text-luxury-white group-hover:text-luxury-gold transition-colors duration-300">
                        {item.name}
                      </h4>
                      <div className="flex-grow border-b border-luxury-gold/10 border-dotted mx-4 h-1"></div>
                      <span className="text-luxury-gold font-body font-medium">{item.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm font-body leading-relaxed italic">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 italic font-body text-sm">
            * Prices are subject to applicable taxes. Please inform our staff of any food allergies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
