"use client";

import React, { useState, useRef, useEffect, useId } from "react";
import { motion } from "framer-motion";

interface CarouselProps {
  slides: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
  onSlideChange?: (index: number) => void;
}

interface SlideProps {
  slide: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide: React.FC<SlideProps> = ({ slide, index, current, handleSlideClick }) => {
  const ref = useRef<HTMLLIElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Calculate the position of the slide in the carousel
  const position = index - current;
  const isActive = position === 0;
  const distanceFromActive = Math.abs(position);

  // Calculate the transform values based on position
  const translateX = position * 100;
  const scale = 1 - 0.2 * distanceFromActive;
  const opacity = 1 - 0.3 * distanceFromActive;
  const zIndex = 10 - distanceFromActive;

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setMousePosition({ x, y });
  };

  return (
    <motion.li
      ref={ref}
      className={`relative w-[70vmin] h-[70vmin] list-none mx-[2vmin] rounded-lg overflow-hidden cursor-pointer ${isActive ? 'z-10' : ''}`}
      style={{
        transform: `translateX(${translateX}%) scale(${scale})`,
        opacity,
        zIndex,
      }}
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: scale * 1.05 }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${slide.image})`,
          transform: isHovered ? `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)` : 'none',
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 25,
          mass: 1.2
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white"
        style={{
          transform: isHovered ? `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)` : 'none',
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 25,
          mass: 1.2
        }}
      >
        <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
        <p className="text-sm opacity-80 line-clamp-3">{slide.description}</p>
      </motion.div>
    </motion.li>
  );
};

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}

const CarouselControl: React.FC<CarouselControlProps> = ({ type, title, handleClick }) => {
  return (
    <button
      className={`flex items-center justify-center w-12 h-12 mx-2 rounded-full bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-40 transition-all text-white`}
      onClick={handleClick}
      title={title}
      aria-label={title}
    >
      {type === "previous" ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      )}
    </button>
  );
};

export function Carousel3D({ slides, onSlideChange }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayInterval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
    }
  }, []);

  const handlePreviousClick = () => {
    if (isAnimating) return;
    const newIndex = (current - 1 + slides.length) % slides.length;
    setCurrent(newIndex);
    if (onSlideChange) onSlideChange(newIndex);
  };

  const handleNextClick = () => {
    if (isAnimating) return;
    const newIndex = (current + 1) % slides.length;
    setCurrent(newIndex);
    if (onSlideChange) onSlideChange(newIndex);
  };

  const handleSlideClick = (index: number) => {
    if (isAnimating || index === current) return;
    setCurrent(index);
    if (onSlideChange) onSlideChange(index);
  };

  const id = useId();

  return (
    <div
      className="relative w-full h-[70vmin] mx-auto overflow-hidden"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex items-center justify-center w-full h-full"
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full bottom-4 z-20">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}