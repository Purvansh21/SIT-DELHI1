import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Plane, MapPin, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.info(
      "User attempted to access upcoming route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="w-full max-w-2xl mx-auto px-4 py-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Plane 
                size={80} 
                className="text-sit-red transform -rotate-45 animate-pulse" 
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-sit-red/10 rounded-full"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-sit-dark mb-4">
            New Destination Coming Soon!
          </h1>
          <div className="flex items-center justify-center gap-2 text-sit-red mb-6">
            <MapPin className="animate-bounce" />
            <span className="text-lg font-medium">{location.pathname.slice(1)}</span>
          </div>
          <p className="text-gray-600 text-lg mb-8">
            We're preparing something amazing for this destination. 
            Check back soon for an unforgettable travel experience!
          </p>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-sit-red text-white rounded-sm hover:bg-opacity-90 transition-colors group"
          >
            <ArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Back to Homepage
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
