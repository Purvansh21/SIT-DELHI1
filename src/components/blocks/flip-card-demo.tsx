"use client";
import React from "react";
import { FlipCard, FlipCardFront, FlipCardBack } from "@/components/ui/flip-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

interface TravelPackage {
  title: string;
  description: string;
  image: string;
  duration: string;
  location: string;
}

interface FlipCardDemoProps {
  packages?: TravelPackage[];
}

export function FlipCardDemo({ packages }: FlipCardDemoProps) {
  const defaultPackages: TravelPackage[] = [
    {
      title: "Royal Rajasthan",
      description: "Explore the majestic forts and palaces, experience the vibrant culture and traditions of Rajasthan.",
      image: "/media/destinations/RoyalRajasthan.webp",
      duration: "6 Days / 5 Nights",
      location: "Jaipur, Udaipur, Jodhpur"
    },
    {
      title: "Shimla Manali Getaway",
      description: "Experience the serene beauty of the Himalayas, adventure sports, and peaceful mountain retreats.",
      image: "/media/destinations/ShimlaManaliGetway.webp",
      duration: "5 Days / 4 Nights",
      location: "Shimla, Manali"
    },
    {
      title: "Exotic Thailand Experience",
      description: "Discover pristine beaches, vibrant nightlife, and rich cultural heritage in the Land of Smiles.",
      image: "/media/destinations/ExoticThailandExperience.webp",
      duration: "7 Days / 6 Nights",
      location: "Bangkok, Pattaya, Phuket"
    },
    {
      title: "Magic Malaysia",
      description: "From modern cities to tropical rainforests, experience the diverse attractions of Malaysia.",
      image: "/media/destinations/MagicMalaysia.webp",
      duration: "5 Days / 4 Nights",
      location: "Kuala Lumpur, Genting"
    }
  ];

  const displayPackages = packages || defaultPackages;

  return (
    <div className="py-8 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8 text-sit-dark">
        This Month's Top Travel Destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-0">
        {displayPackages.map((pkg, index) => (
          <FlipCard key={index} className="w-full aspect-[3/4]">
            <FlipCardFront>
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg md:text-xl font-semibold mb-1">{pkg.title}</h3>
                  <p className="text-sm md:text-base opacity-90">{pkg.duration}</p>
                </div>
              </div>
            </FlipCardFront>
            <FlipCardBack>
              <div className="p-4 md:p-6 h-full flex flex-col justify-between bg-white rounded-lg">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-sit-dark">{pkg.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">{pkg.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm md:text-base text-gray-700">
                      <span className="font-medium">Duration:</span> {pkg.duration}
                    </p>
                    <p className="text-sm md:text-base text-gray-700">
                      <span className="font-medium">Location:</span> {pkg.location}
                    </p>
                  </div>
                </div>
                <Link to="/" className="block w-full">
                  <button className="mt-4 w-full px-4 py-2 bg-sit-red text-white rounded hover:bg-opacity-90 transition-colors text-sm md:text-base">
                    Book Now
                  </button>
                </Link>
              </div>
            </FlipCardBack>
          </FlipCard>
        ))}
      </div>
    </div>
  )
} 