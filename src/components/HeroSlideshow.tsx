'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroImages = [
  '/assets/images/P01 sommaire.jpg',
  '/assets/images/hero-slides/14-08manu.jpg',
  '/assets/images/hero-slides/15-11manu.jpg',
  '/assets/images/hero-slides/16-07manu.jpg',
  '/assets/images/hero-slides/Compile fleurs EBCY 01 150 dpi.jpg',
  '/assets/images/hero-slides/Flamands roses.jpg',
  '/assets/images/hero-slides/Cygne des temps rôti 01.jpg',
  '/assets/images/P04 Oiseaux.jpg',
  '/assets/images/P09 Rivages.jpg',
  '/assets/images/accueil/Exposition Dôle 2013 - 00 (moyen).jpg',
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-90' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`EBCY Artwork ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}
      
      {/* Slideshow indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white shadow-lg scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
    </div>
  );
}