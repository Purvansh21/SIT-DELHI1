import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  loading = priority ? 'eager' : 'lazy',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    setIsLoaded(false);
    setIsError(false);

    // Preload image if priority is true
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setIsError(true);
    }
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: 'transparent', willChange: 'transform' }}>
      {/* Placeholder with gradient background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-sit-dark/5 to-sit-dark/10 transition-opacity duration-500 rounded-xl ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ width: '100%', height: '100%' }}
      />
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 transition-opacity duration-500 h-full w-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        width={width || "100%"}
        height={height || "100%"}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        style={{ 
          objectFit: 'cover', 
          objectPosition: 'center',
          backgroundColor: 'transparent', 
          willChange: 'transform',
          width: '100%',
          height: '100%'
        }}
      />
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sit-dark/5 to-sit-dark/10 text-gray-500 rounded-xl">
          <span>Image not available</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage; 