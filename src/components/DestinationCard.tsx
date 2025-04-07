import React from "react";
import { ArrowRight } from "lucide-react";

interface DestinationCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="group relative aspect-[16/9] overflow-hidden rounded-sm cursor-pointer">
      {/* Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300">
        {/* Content */}
        <div className="absolute bottom-0 w-full p-4 md:p-6 text-white transition-all duration-300 group-hover:bottom-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-serif mb-2">{title}</h3>
          <p className="text-xs md:text-sm text-white mb-3 md:mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
          <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="mr-2 text-xs md:text-sm font-medium">Discover more</span>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
