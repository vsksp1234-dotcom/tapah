import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Users, Clock, Phone, User, CheckCircle } from 'lucide-react';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section id="reservations" className="py-24 bg-luxury-gray relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-sm font-body mb-4 block">Secure Your Table</span>
          <h2 className="text-5xl font-heading text-luxury-white mb-6">Book an <span className="text-luxury-gold italic">Experience</span></h2>
          <div className="w-24 h-[1px] bg-luxury-gold mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-luxury-black p-8 md:p-12 rounded-sm border border-luxury-gold/20 shadow-2xl relative"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="booking-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit} 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Name */}
                <div className="space-y-2">
                  <label className="flex items-center text-luxury-gold text-sm uppercase tracking-widest font-body">
                    <User size={16} className="mr-2" /> Full Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-luxury-gold/30 py-3 text-luxury-white focus:outline-none focus:border-luxury-gold transition-colors font-body"
                    placeholder="John Doe"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="flex items-center text-luxury-gold text-sm uppercase tracking-widest font-body">
                    <Phone size={16} className="mr-2" /> Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-luxury-gold/30 py-3 text-luxury-white focus:outline-none focus:border-luxury-gold transition-colors font-body"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label className="flex items-center text-luxury-gold text-sm uppercase tracking-widest font-body">
                    <Calendar size={16} className="mr-2" /> Preferred Date
                  </label>
                  <input
                    required
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-luxury-gold/30 py-3 text-luxury-white focus:outline-none focus:border-luxury-gold transition-colors font-body"
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="flex items-center text-luxury-gold text-sm uppercase tracking-widest font-body">
                    <Clock size={16} className="mr-2" /> Preferred Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-luxury-gold/30 py-3 text-luxury-white focus:outline-none focus:border-luxury-gold transition-colors font-body appearance-none"
                    required
                  >
                    <option value="" className="bg-luxury-black">Select Time</option>
                    <option value="19:00" className="bg-luxury-black">7:00 PM</option>
                    <option value="19:30" className="bg-luxury-black">7:30 PM</option>
                    <option value="20:00" className="bg-luxury-black">8:00 PM</option>
                    <option value="20:30" className="bg-luxury-black">8:30 PM</option>
                    <option value="21:00" className="bg-luxury-black">9:00 PM</option>
                    <option value="21:30" className="bg-luxury-black">9:30 PM</option>
                    <option value="22:00" className="bg-luxury-black">10:00 PM</option>
                  </select>
                </div>

                {/* Guests */}
                <div className="space-y-2 md:col-span-2">
                  <label className="flex items-center text-luxury-gold text-sm uppercase tracking-widest font-body">
                    <Users size={16} className="mr-2" /> Number of Guests
                  </label>
                  <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    {['1', '2', '3', '4', '5', '6', '8+'].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setFormData({ ...formData, guests: num })}
                        className={`min-w-[60px] py-2 rounded-sm border transition-all duration-300 font-body ${
                          formData.guests === num 
                            ? 'bg-luxury-gold border-luxury-gold text-luxury-black' 
                            : 'border-luxury-gold/30 text-luxury-gold hover:border-luxury-gold'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-luxury-gold text-luxury-black py-4 uppercase tracking-[0.2em] font-body font-bold hover:bg-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Processing Request...' : 'Confirm Reservation'}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                  className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto"
                >
                  <CheckCircle size={40} className="text-luxury-black" />
                </motion.div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-heading text-luxury-white">Reservation Requested!</h3>
                  <p className="text-gray-400 font-body">
                    Thank you, {formData.name}. We've received your request for {formData.guests} guests on {formData.date}. 
                    A confirmation email will be sent to your inbox shortly.
                  </p>
                </div>
                <button
                   onClick={() => setIsSubmitted(false)}
                   className="text-luxury-gold underline font-body uppercase text-sm tracking-widest"
                >
                  Make another booking
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
    </section>
  );
};

export default Reservations;
