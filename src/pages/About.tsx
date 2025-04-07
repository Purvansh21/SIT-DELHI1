import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Car, Bus, Globe2, Clock, ArrowRight, Shield, MapPin, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollToTop />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="/media/about us.webp" 
            alt="About SIT" 
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
            Your Trusted Travel Partner
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Connecting destinations, creating memories since 2010
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
              South International Travels (SIT) is a front runner in the private passenger travel industry, offering seamless connectivity across India and beyond. With 100+ domestic & 7 international routes, we connect travelers to over 230+ destinations, making us one of the most trusted travel partners in the country.
            </p>
          </motion.div>

          {/* Fleet Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-sit-dark mb-12">
              A Journey for Every Traveler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-sit-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Fleet</h3>
                <p className="text-gray-600 text-justify">With a fleet of 1000+ vehicles, we offer a wide range of options to suit every traveler's needs. From comfortable sedans to luxury SUVs, and spacious buses, we ensure a comfortable journey for all our passengers.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-sit-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trusted Brands</h3>
                <p className="text-gray-600 text-justify">We partner with leading vehicle manufacturers to ensure the highest standards of safety and comfort. Our fleet includes vehicles from trusted brands known for their reliability and performance.</p>
              </div>
            </div>
          </motion.div>

          {/* Why Choose SIT */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-sit-dark mb-12">
              Why Choose SIT?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-sit-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Extensive Routes</h3>
                <p className="text-gray-600 text-justify">100+ domestic & 7 international routes connecting 230+ destinations.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-sit-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Diverse Fleet</h3>
                <p className="text-gray-600 text-justify">1000+ vehicles ranging from sedans to luxury buses for every need.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-sit-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
                <p className="text-gray-600 text-justify">Professional drivers and well-maintained vehicles for a safe journey.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-sit-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-justify">Round-the-clock customer support to assist you throughout your journey.</p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sit-dark mb-6">
              Plan Your Next Trip Today!
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-justify">
              Experience the difference with South International Travels. Our commitment to quality service, extensive network, and customer satisfaction makes us the preferred choice for travelers across India.
            </p>
            <Link to="/get-quote">
              <Button 
                className="bg-sit-red hover:bg-sit-red/90 text-white px-8 py-6 text-lg group"
              >
                Get a Quote
                <MapPin className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
