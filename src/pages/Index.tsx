import React from "react";
import "@/styles/3d-effects.css";
import "@/styles/card-animations.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import DestinationCarousel from "@/components/DestinationCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Gallery4Demo } from "@/components/blocks/gallery4-demo";
import { FlipCardDemo } from "@/components/blocks/flip-card-demo";

const destinations = [
  {
    title: "Rajasthan",
    description: "Discover the grandeur of royal palaces & golden deserts.",
    image: "/media/destinations/rajasthan.webp",
    link: "#"
  },
  {
    title: "Rishikesh",
    description: "Experience the thrill of river rafting & serene landscapes.",
    image: "/media/destinations/Rishikesh.webp",
    link: "#"
  },
  {
    title: "Kashmir",
    description: "Escape to the paradise of snow-capped mountains.",
    image: "/media/destinations/kashmir.webp",
    link: "#"
  },
  {
    title: "Goa",
    description: "Unwind on stunning beaches & vibrant nightlife.",
    image: "/media/destinations/Goa.webp",
    link: "#"
  }
];

const packages = [
  {
    title: "Shimla-Manali Getaway",
    description: "Experience the beauty of the Himalayas with this scenic escape into the hills. Visit ancient temples, enjoy adventure activities, and soak in the breathtaking views.",
    image: "/media/destinations/ShimlaManaliGetway.webp",
    duration: "6 Days / 5 Nights",
    location: "Himachal Pradesh, India",
    price: "₹24,999"
  },
  {
    title: "Exotic Thailand Experience",
    description: "Discover the perfect blend of culture, beaches, and nightlife in Thailand. Visit ancient temples, enjoy water activities, and experience the vibrant local culture.",
    image: "/media/destinations/ExoticThailandExperience.webp",
    duration: "4 Days / 3 Nights",
    location: "Bangkok, Phuket, Thailand",
    price: "₹32,999"
  },
  {
    title: "Royal Rajasthan Tour",
    description: "Embark on a cultural journey through the royal state of Rajasthan. Explore magnificent palaces, experience desert safaris, and immerse yourself in rich traditions.",
    image: "/media/destinations/RoyalRajasthan.webp",
    duration: "7 Days / 6 Nights",
    location: "Jaipur, Udaipur, Jodhpur, India",
    price: "₹28,999"
  },
  {
    title: "Magical Malaysia",
    description: "Explore the vibrant cities and natural wonders of Malaysia. Visit the iconic Petronas Towers, enjoy island hopping, and experience diverse cultures.",
    image: "/media/destinations/MagicMalaysia.webp",
    duration: "4 Days / 3 Nights",
    location: "Kuala Lumpur, Langkawi, Malaysia",
    price: "₹35,999"
  }
];

const Index = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollToTop />
      <Hero />
      
      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-sit-dark mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Connecting Destinations, Creating Memories
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white p-6 shadow-md rounded-sm hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <h3 className="font-medium text-sit-red text-lg mb-2 text-justify">Travel Beyond Limits with SIT (South International Travels)</h3>
            </motion.div>
            <motion.div 
              className="bg-white p-6 shadow-md rounded-sm hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <h3 className="font-medium text-sit-red text-lg mb-2 text-justify">100+ Domestic & 7 International Routes</h3>
            </motion.div>
            <motion.div 
              className="bg-white p-6 shadow-md rounded-sm hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <h3 className="font-medium text-sit-red text-lg mb-2 text-justify">Fleet of 1000+ Luxury Buses, SUVs & Sedans</h3>
            </motion.div>
            <motion.div 
              className="bg-white p-6 shadow-md rounded-sm hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <h3 className="font-medium text-sit-red text-lg mb-2 text-justify">Leading Private Passenger Travel Company in Delhi</h3>
            </motion.div>
          </motion.div>
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button className="px-6 py-3 bg-[#B23A48] text-white font-medium rounded-sm hover:bg-opacity-90 transition-colors">
              Book Your Trip Now!
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Destinations */}
      <section id="content" className="py-16 relative z-10 bg-transparent overflow-hidden transform-gpu">
        <div className="container mx-auto px-4 md:px-6 will-change-transform">
          <Gallery4Demo />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-sit-dark text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Travel with SIT?
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                title: "Wide Travel Options",
                description: "Choose from economy to premium luxury vehicles."
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Best Price Assurance",
                description: "Affordable travel without compromising comfort."
              },
              {
                icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "24/7 Support",
                description: "Always here to assist you, wherever you go."
              },
              {
                icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
                title: "Expertly Curated Routes",
                description: "Smooth connectivity across 230+ destinations."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 text-center shadow-md rounded-sm"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="w-16 h-16 bg-sit-red text-white rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </motion.div>
                <h3 className="text-lg font-medium text-sit-dark mb-2">{item.title}</h3>
                <p className="text-sit-dark/70 text-justify">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild className="px-6 py-3 bg-[#B23A48] text-white font-medium rounded-sm hover:bg-opacity-90 transition-colors">
              <a href="/about">Learn More</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Best-Selling Travel Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-sit-dark text-center mb-12">
            Our Best-Selling Travel Packages
          </h2>
          <FlipCardDemo packages={packages} />
          <div className="text-center mt-10">
            <Button asChild className="px-6 py-3 bg-[#B23A48] text-white font-medium rounded-sm hover:bg-opacity-90 transition-colors">
              <a href="/not-found">New Destinations Coming Soon!</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="bg-[#B1252C] py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Need Help? Let's Talk!</h2>
              <p className="text-lg text-white/90 mb-6">
                Planning a trip? Want the best travel deals? We're just a message away!
              </p>
              <div className="relative w-full h-64 overflow-hidden rounded-lg mb-8">
                <img 
                  src="/media/need.png" 
                  alt="24/7 Travel Support" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-800/90 to-red-600/80"></div>
                <div className="absolute inset-0 flex flex-col justify-center px-8">
                  <h2 className="text-4xl font-bold text-white mb-2">24/7 Travel Support</h2>
                  <p className="text-xl text-white">Our experts are ready to assist you</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-sm bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-sm bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-sm bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-[#B1252C] font-medium py-3 rounded-sm hover:bg-white/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
