import React from "react";
import { Compass, Award, Clock, Heart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Compass,
    title: "Expertly Crafted Journeys",
    description: "Our travel specialists craft bespoke itineraries that reflect your preferences and exceed your expectations."
  },
  {
    icon: Award,
    title: "Exclusive Experiences",
    description: "Access unique experiences and hidden gems that aren't available through conventional travel arrangements."
  },
  {
    icon: Clock,
    title: "24/7 Concierge Support",
    description: "Travel with peace of mind knowing our dedicated team is available around the clock to assist with any needs."
  },
  {
    icon: Heart,
    title: "Sustainable Travel",
    description: "We're committed to responsible tourism that respects local cultures and preserves natural environments."
  }
];

const WhyChooseUs = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-20 bg-sit-light">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-sit-dark mb-4">Why Choose South International Travels</h2>
          <p className="text-lg text-sit-dark/70">
            We create exceptional travel experiences by combining deep local knowledge, 
            personalized service, and attention to every detail.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="w-12 h-12 bg-sit-teal/10 rounded-full flex items-center justify-center mb-6"
                variants={iconVariants}
                whileHover="hover"
              >
                <feature.icon className="w-6 h-6 text-sit-teal" />
              </motion.div>
              <h3 className="text-xl font-serif text-sit-dark mb-3">{feature.title}</h3>
              <p className="text-sit-dark/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
