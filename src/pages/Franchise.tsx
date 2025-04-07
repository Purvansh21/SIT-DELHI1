import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Building2, BarChart, GraduationCap, Coins, MapPin, Users, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Franchise = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollToTop />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="/media/franchise.webp" 
            alt="Franchise with SIT" 
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Become a SIT Franchise Partner
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Start Your Own Travel Business with SIT!
          </motion.p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Introduction */}
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-gray-700 mb-8 text-justify">
              Are you passionate about travel and looking for a profitable business opportunity? South International Travels (SIT) invites you to become a franchise partner and be a part of one of India's leading passenger travel networks!
            </p>
            <p className="text-lg md:text-xl text-gray-700 text-justify">
              With 100+ domestic & 7 international routes, a fleet of 1000+ luxury vehicles, and a strong reputation in the travel industry, SIT offers you a high-growth franchise opportunity with minimum investment and maximum returns.
            </p>
          </motion.div>

          {/* Why Partner with SIT */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-sit-dark mb-12">
              Why Partner with SIT?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-sit-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Established Brand</h3>
                <p className="text-gray-600 text-justify">Leverage our strong market presence and reputation.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-sit-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Business Model</h3>
                <p className="text-gray-600 text-justify">Start earning from day one with a well-structured business framework.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-sit-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Support</h3>
                <p className="text-gray-600 text-justify">Get training, marketing, and operational guidance.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                  <Coins className="w-6 h-6 text-sit-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Diverse Revenue Streams</h3>
                <p className="text-gray-600 text-justify">Earn from ticket bookings, luxury rentals, corporate travel, and more.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-sit-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Large & Loyal Customer Base</h3>
                <p className="text-gray-600 text-justify">Join a network that serves 230+ destinations.</p>
              </div>
            </div>
          </motion.div>

          {/* Franchise Benefits */}
          <motion.div 
            className="mb-16 bg-gray-50 p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-sit-dark mb-8">
              Franchise Benefits
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sit-red/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-sit-red"></div>
                </div>
                <p className="text-gray-700 text-justify"><span className="font-semibold">Low Investment, High Returns</span> – A business model designed for profitability.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sit-red/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-sit-red"></div>
                </div>
                <p className="text-gray-700 text-justify"><span className="font-semibold">Exclusive Territory Rights</span> – Operate in a specific region with full control.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sit-red/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-sit-red"></div>
                </div>
                <p className="text-gray-700 text-justify"><span className="font-semibold">Full Marketing & Branding Support</span> – Grow with our promotional campaigns.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sit-red/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-sit-red"></div>
                </div>
                <p className="text-gray-700 text-justify"><span className="font-semibold">Tech-Enabled Operations</span> – Seamless booking system & customer support.</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sit-dark mb-6">
              Contact Now for More Information!
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <a 
                href="mailto:franchise@sittravels.com" 
                className="flex items-center gap-2 text-gray-700 hover:text-sit-red transition-colors"
              >
                <Mail className="w-5 h-5" />
                franchise@sittravels.com
              </a>
              <a 
                href="tel:+918178840574" 
                className="flex items-center gap-2 text-gray-700 hover:text-sit-red transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 8178840574
              </a>
            </div>
            <Link to="/contact">
              <Button 
                className="bg-sit-red hover:bg-sit-red/90 text-white px-8 py-6 text-lg group"
              >
                Get in Touch
                <MapPin className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Button>
            </Link>
            <p className="mt-8 text-lg text-gray-700 font-medium text-justify">
              Join hands with SIT and drive your success in the travel industry!
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Franchise;
