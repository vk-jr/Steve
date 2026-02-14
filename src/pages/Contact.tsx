
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { logo } from '../assets/imageImports';
import { Button } from '@/components/ui/button';
import im1 from '@/assets/images/buildings/im6.jpg';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.img
            src={logo}
            alt="Rancho Costa Verde Logo"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-16 mx-auto mb-6"
          />
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-cormorant font-light mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 font-inter mb-12 max-w-2xl mx-auto"
          >
            Ready to experience sustainable coastal living in Baja California?
            Contact us to schedule a weekend tour or learn more about available properties.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center p-8 bg-white rounded-lg shadow-sm"
            >
              <Mail className="w-8 h-8 text-gray-800 mb-4" />
              <h3 className="text-xl font-cormorant mb-2">Email Us</h3>
              <p className="text-gray-600 font-inter text-center">
                <a href="mailto:Stephendmanning@gmail.com" className="hover:text-gray-800 transition-colors">
                  Stephendmanning@gmail.com
                </a>
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center p-8 bg-white rounded-lg shadow-sm"
            >
              <Phone className="w-8 h-8 text-gray-800 mb-4" />
              <h3 className="text-xl font-cormorant mb-2">Call Us</h3>
              <p className="text-gray-600 font-inter text-center">
                <a href="tel:6059539001" className="hover:text-gray-800 transition-colors">
                  605-953-9001
                </a>
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center p-8 bg-white rounded-lg shadow-sm"
            >
              <MapPin className="w-8 h-8 text-gray-800 mb-4" />
              <h3 className="text-xl font-cormorant mb-2">Visit Us</h3>
              <p className="text-gray-600 font-inter text-center">
                Baja California, Mexico
              </p>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-6 mt-16"
          >
            <a href="https://www.instagram.com/ranchocostaverde/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <Instagram className="w-6 h-6 text-gray-800" />
            </a>
            <a href="https://www.facebook.com/ranchocostaverde/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <Facebook className="w-6 h-6 text-gray-800" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Reserve Your Spot Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto overflow-hidden rounded-2xl bg-gray-50 shadow-xl flex flex-col md:flex-row"
          >
            {/* Image Side */}
            <div className="w-full md:w-5/12 relative h-64 md:h-auto">
              <img
                src={im1}
                alt="Luxury Property"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
              <h2 className="mb-3 text-3xl md:text-4xl font-bold text-gray-900 font-cormorant">
                Bringing Baja To You
              </h2>
              <p className="mb-6 text-xl font-semibold text-primary">
                You are invited to dinner on us...
              </p>

              <div className="mb-8 space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                <p>
                  We have a guest speaker that will bring Baja to you. The presentation will have amazing aerial photos, updates on the Baja real estate market, and what's new in San Felipe, Baja Mexico.
                </p>
                <p>
                  Enjoy an evening of great dining and learn about some of the breakthroughs in Green technology, how Americans can own beach view property in Mexico and Baja's best-kept secret: <span className="font-semibold text-gray-900">Rancho Costa Verde</span>.
                </p>
                <p>
                  We conduct no business at the free seminar; it is strictly informational. If you fall in love with what we share with you, we will invite you down to experience it first hand, and the weekend is on us.
                </p>
                <p className="italic text-gray-500 text-xs md:text-sm">
                  It's a great way to learn about all the exciting things happening in Baja, and discover why Rancho Costa Verde is the home of "Yesterday's Prices, Tomorrow's Technology, and Timeless Views."
                </p>
              </div>

              <Button
                onClick={() => navigate('/qualify')}
                className="w-full md:w-auto rounded-xl py-6 px-8 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5 self-center md:self-start"
              >
                Reserve My Spot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
