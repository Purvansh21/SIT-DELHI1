import { Gallery4, Gallery4Props } from "@/components/blocks/gallery4";

const travelDestinationsData: Gallery4Props = {
  title: "Featured Travel Destinations",
  description:
    "Explore our handpicked selection of stunning destinations. From exotic beaches to majestic mountains, discover the diverse beauty of India and beyond.",
  items: [
    {
      id: "bali",
      title: "Bali, Indonesia",
      description:
        "Experience the perfect blend of culture, nature, and relaxation in Bali. From pristine beaches to ancient temples, Bali offers a diverse range of activities for every traveler.",
      href: "/destinations/bali",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080",
    },
    {
      id: "rajasthan",
      title: "Rajasthan, India",
      description:
        "Discover the royal heritage of majestic forts & palaces. Experience the vibrant culture, traditional hospitality, and the mystique of the Thar Desert.",
      href: "/destinations/rajasthan",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080",
    },
    {
      id: "rishikesh",
      title: "Rishikesh, India",
      description:
        "Experience the thrill of river rafting & serene landscapes. Known as the 'Yoga Capital of the World', Rishikesh offers spiritual enlightenment and adventure sports.",
      href: "/destinations/rishikesh",
      image: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080",
    },
    {
      id: "kashmir",
      title: "Kashmir, India",
      description:
        "Escape to the paradise of snow-capped mountains. With its pristine lakes, lush valleys, and traditional houseboats, Kashmir truly deserves its title of 'Heaven on Earth'.",
      href: "/destinations/kashmir",
      image: "/media/destinations/kashmir.webp",
    },
    {
      id: "goa",
      title: "Goa, India",
      description:
        "Relax on pristine beaches & explore Portuguese heritage. Goa offers the perfect blend of sun, sand, sea, and vibrant nightlife.",
      href: "/destinations/goa",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080",
    },
  ],
};

function Gallery4Demo() {
  return (
    <div className="bg-transparent will-change-transform">
      <Gallery4 {...travelDestinationsData} />
    </div>
  );
}

export { Gallery4Demo }; 