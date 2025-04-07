import React, { useState, useMemo, useCallback } from "react";
import { EnhancedCarousel } from "./ui/carousel-3d-integration";
import DestinationCard from "./DestinationCard";
import { motion } from "framer-motion";

interface DestinationCarouselProps {
  destinations: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
  use3D?: boolean;
}

const DestinationCarousel: React.FC<DestinationCarouselProps> = ({ destinations, use3D = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Memoize carousel items
  const carouselItems = useMemo(() => destinations.map((destination, index) => (
    <motion.div 
      key={index} 
      className="w-full h-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration: 0.5,
          delay: index * 0.1
        }
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      <DestinationCard
        title={destination.title}
        description={destination.description}
        image={destination.image}
        link={destination.link}
      />
    </motion.div>
  )), [destinations]);

  // Memoize slide change handler
  const handleSlideChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="w-full">
      <EnhancedCarousel 
        items={carouselItems}
        slides={destinations}
        autoplay={true}
        interval={4000}
        showArrows={true}
        showDots={true}
        className="aspect-[16/9] rounded-sm"
        use3D={use3D}
        onSlideChange={handleSlideChange}
      />
      
      {/* Active destination info */}
      <motion.div 
        className="mt-4 md:mt-6 text-center px-4 md:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5,
            delay: 0.3
          }
        }}
        key={activeIndex}
      >
        <h3 className="text-lg md:text-xl font-bold text-sit-dark mb-2">
          {destinations[activeIndex]?.title || ''}
        </h3>
        <p className="text-sm md:text-base text-sit-dark/80 max-w-2xl mx-auto">
          {destinations[activeIndex]?.description || ''}
        </p>
      </motion.div>
    </div>
  );
};

export default React.memo(DestinationCarousel);