import React from 'react';
import { motion } from 'framer-motion';
import { fadeInVariants, staggerContainer } from '@/utils/animations';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const Section = ({
  title,
  subtitle,
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: SectionProps) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className={`py-16 md:py-24 ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <motion.h2
                variants={fadeInVariants}
                custom={direction}
                transition={{ delay }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                variants={fadeInVariants}
                custom={direction}
                transition={{ delay: delay + 0.1 }}
                className="text-lg text-gray-600"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        <motion.div
          variants={fadeInVariants}
          custom={direction}
          transition={{ delay: delay + 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section;