"use client" 

import * as React from "react"
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Debounce utility function
const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function(this: any, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

interface AnimatedWordCycleProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function AnimatedWordCycle({
  words,
  interval = 5000,
  className = "",
}: AnimatedWordCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState("auto");
  const measureRef = useRef<HTMLDivElement>(null);

  // Memoize container variants
  const containerVariants = useMemo(() => ({
    hidden: { 
      y: -10,
      opacity: 0,
      filter: "blur(4px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      y: 10,
      opacity: 0,
      filter: "blur(4px)",
      transition: { 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1]
      }
    },
  }), []);

  // Debounced width measurement
  useEffect(() => {
    const updateWidth = debounce(() => {
      if (measureRef.current) {
        const elements = measureRef.current.children;
        if (elements.length > currentIndex && elements[currentIndex]) {
          const newWidth = elements[currentIndex].getBoundingClientRect().width;
          setWidth(`${newWidth}px`);
        }
      }
    }, 100);

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [currentIndex]);

  // Memoized interval effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  // Memoize the measurement div content
  const measurementContent = useMemo(() => (
    words.map((word, i) => (
      <span key={i} className={`font-bold ${className}`}>
        {word}
      </span>
    ))
  ), [words, className]);

  return (
    <div className="flex justify-center items-center">
      {/* Hidden measurement div with all words rendered */}
      <div 
        ref={measureRef} 
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none"
        style={{ visibility: "hidden" }}
      >
        {measurementContent}
      </div>

      {/* Visible animated word */}
      <motion.div 
        className="flex justify-center items-center"
        animate={{ 
          width,
          transition: { 
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1,
          }
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={`inline-block font-bold ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ whiteSpace: "nowrap" }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
} 