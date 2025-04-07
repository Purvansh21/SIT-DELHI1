"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const data = [
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
];

const Gallery4 = ({
  title = "Featured Travel Destinations",
  description = "Explore our handpicked selection of stunning destinations. From exotic beaches to majestic mountains, discover the diverse beauty of India and beyond.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="max-w-lg text-muted-foreground text-justify">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
            align: "start",
          }}
        >
          <CarouselContent className="ml-0">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href={item.href} className="group rounded-xl block">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9 text-justify">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm">
                        Read more{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 }; 