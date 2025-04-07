import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Car, MapPin, Calendar, Users, Clock, CheckCircle, DollarSign, Headphones, Shield, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const GetQuote = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollToTop />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="/media/quote.webp" 
            alt="Get a Quote" 
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
            Plan Your Journey with Ease!
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Travel Made Simple & Affordable!
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
              Looking for a comfortable, hassle-free, and budget-friendly travel experience? Whether it's a business trip, a family vacation, or an adventure with friends, South International Travels (SIT) has got you covered! Fill in your details, and we'll get back to you with the best travel options at unbeatable prices.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-sit-red/10 text-sit-red rounded-full text-sm font-medium">Flexible Bookings</span>
              <span className="px-4 py-2 bg-sit-red/10 text-sit-red rounded-full text-sm font-medium">Best Price Guarantee</span>
              <span className="px-4 py-2 bg-sit-red/10 text-sit-red rounded-full text-sm font-medium">24/7 Support</span>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-sit-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wide Range of Vehicles</h3>
              <p className="text-gray-600 text-justify">Choose from Sedans, SUVs, Luxury Coaches, Volvo Buses, and more!</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-sit-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seamless Connectivity</h3>
              <p className="text-gray-600 text-justify">Covering 100+ domestic & 7 international routes.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-sit-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable & Transparent</h3>
              <p className="text-gray-600 text-justify">No hidden charges, just the best deals!</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-sit-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable Packages</h3>
              <p className="text-gray-600 text-justify">Tailor your trip the way you want.</p>
            </div>
          </motion.div>

          {/* Quote Form */}
          <motion.div 
            className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center text-sit-dark mb-8">
              Request a Quote Now!
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sit-red focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sit-red focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sit-red focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sit-red focus:border-transparent"
                    placeholder="Enter pickup location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sit-red focus:border-transparent"
                    placeholder="Enter destination"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Travel</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sit-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Return Date (Optional)</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sit-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Passengers</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sit-red focus:border-transparent">
                    <option value="">Select number of passengers</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7+">7+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Vehicle Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sit-red focus:border-transparent">
                    <option value="">Select vehicle type</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="luxury-bus">Luxury Bus</option>
                    <option value="volvo">Volvo</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
                <textarea 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sit-red focus:border-transparent"
                  rows={4}
                  placeholder="Enter any special requests or requirements"
                ></textarea>
              </div>
              <div className="text-center">
                <Button 
                  type="submit"
                  className="bg-sit-red hover:bg-sit-red/90 text-white px-8 py-6 text-lg group"
                >
                  Get My Quote
                  <CheckCircle className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Why Choose SIT */}
          <motion.div 
            className="mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-sit-dark mb-12">
              Why Choose SIT?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-sit-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliable & Trusted</h3>
                <p className="text-gray-600 text-justify">A leader in the private passenger travel industry.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-sit-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Price Assurance</h3>
                <p className="text-gray-600 text-justify">Affordable travel without compromising comfort.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-sit-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Extensive Network</h3>
                <p className="text-gray-600 text-justify">Connecting 230+ destinations with premium services.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-sit-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
                <p className="text-gray-600 text-justify">Always here to assist you, wherever you go.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sit-red/10 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-sit-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smooth & Safe Rides</h3>
                <p className="text-gray-600 text-justify">Well-maintained fleet for a seamless journey.</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div 
            className="mt-24 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sit-dark mb-6">
              Have questions? Let's talk!
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <a 
                href="mailto:info@sittravels.com" 
                className="flex items-center gap-2 text-gray-700 hover:text-sit-red transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@sittravels.com
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
                Contact Us Now
                <MapPin className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Button>
            </Link>
            <p className="mt-8 text-lg text-gray-700 font-medium text-justify">
              Let us take care of your travel while you sit back and enjoy the ride!
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GetQuote; 