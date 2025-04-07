"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

type CarouselProps = {
  items: React.ReactNode[];
  autoplay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  onSlideChange?: (index: number) => void;
};

export const AceternityCarousel = ({
  items,
  autoplay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  className = "",
  onSlideChange,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.4,
      },
    },
  };

  useEffect(() => {
    if (autoplay && !isPaused) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, interval);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoplay, interval, currentIndex, isPaused]);

  const handleNext = () => {
    setDirection(1);
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
    if (onSlideChange) onSlideChange(newIndex);
  };

  const handlePrevious = () => {
    setDirection(-1);
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
    if (onSlideChange) onSlideChange(newIndex);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    if (onSlideChange) onSlideChange(index);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          className="w-full h-full"
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {showArrows && (
        <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/60 pointer-events-auto"
            aria-label="Previous slide"
          >
            <IconArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/60 pointer-events-auto"
            aria-label="Next slide"
          >
            <IconArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {showDots && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};