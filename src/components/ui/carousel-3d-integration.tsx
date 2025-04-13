"use client";

import React, { useCallback, useMemo } from "react";
import { AceternityCarousel } from "./aceternity-carousel";
import { Carousel3D } from "./carousel-3d";

type CarouselProps = {
  items: React.ReactNode[];
  slides?: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
  autoplay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  use3D?: boolean;
  onSlideChange?: (index: number) => void;
};

// Memoize the carousel components
const MemoizedCarousel3D = React.memo(Carousel3D);
const MemoizedAceternityCarousel = React.memo(AceternityCarousel);

export const EnhancedCarousel = React.memo(({
  items,
  slides,
  autoplay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  className = "",
  use3D = false,
  onSlideChange,
}: CarouselProps) => {
  // Memoize the onSlideChange callback
  const handleSlideChange = useCallback((index: number) => {
    onSlideChange?.(index);
  }, [onSlideChange]);

  // Memoize the carousel props
  const carouselProps = useMemo(() => ({
    autoplay,
    interval,
    showArrows,
    showDots,
    className,
    onSlideChange: handleSlideChange,
  }), [autoplay, interval, showArrows, showDots, className, handleSlideChange]);

  // If use3D is true and slides are provided, use the 3D carousel
  if (use3D && slides) {
    return (
      <div className={className}>
        <MemoizedCarousel3D 
          slides={slides} 
          onSlideChange={handleSlideChange}
        />
      </div>
    );
  }

  // Otherwise, use the standard AceternityCarousel
  return (
    <MemoizedAceternityCarousel
      items={items}
      {...carouselProps}
    />
  );
});