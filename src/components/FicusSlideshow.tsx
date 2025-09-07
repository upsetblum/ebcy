'use client';

import React from 'react';
import Image from 'next/image';

const ficusImages = [
  '/assets/images/hero-slides/Cygne des temps rôti 01.jpg',
  '/assets/images/hero-slides/Compile fleurs EBCY 01 150 dpi.jpg',
  '/assets/images/ruralite/Parterre de fleurs 01.jpg',
  '/assets/images/ruralite/La fleuriste est dans l\'escalier TER.jpg',
  '/assets/images/ficus/Fleur-fougere.jpg',
  '/assets/images/hero-slides/Flamands roses.jpg',
  '/assets/images/portfolio/Exposition_Dole_Synthèse.jpg',
  '/assets/images/P02 Techniques.jpg',
  '/assets/images/P04 Oiseaux.jpg',
  '/assets/images/P09 Rivages.jpg'
];

export default function FicusSlideshow() {
  // Dupliquer les images pour un défilement infini
  const duplicatedImages = [...ficusImages, ...ficusImages, ...ficusImages];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-emerald-50 to-green-100"
    >
      {/* Hero Text Section */}
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-emerald-800 mb-6 font-serif neon-glow-title">
            Ficus
          </h1>
          <p className="text-xl md:text-2xl text-emerald-700 font-light max-w-2xl neon-glow-subtitle">
            Série Végétale & Croissance Organique
          </p>
        </div>
      </div>

      {/* Continuous Scrolling Images - Top Row (Right to Left) */}
      <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden">
        <div className="flex h-full transition-transform duration-none animate-scroll-right-to-left"
        style={{
          width: `${duplicatedImages.length * 300}px`
        }}>
          {duplicatedImages.map((image, index) => (
            <div
              key={`top-${index}`}
              className="relative w-80 h-full flex-shrink-0 group"
            >
              <Image
                src={image}
                alt={`Œuvre végétale ${index + 1}`}
                fill
                className="object-cover transition-all duration-700 group-hover:brightness-110"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-emerald-900/5 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Continuous Scrolling Images - Bottom Row (Left to Right) */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden">
        <div className="flex h-full transition-transform duration-none animate-scroll-left-to-right"
        style={{
          width: `${duplicatedImages.length * 300}px`
        }}>
          {duplicatedImages.map((image, index) => (
            <div
              key={`bottom-${index}`}
              className="relative w-80 h-full flex-shrink-0 group"
            >
              <Image
                src={image}
                alt={`Œuvre végétale ${index + 1}`}
                fill
                className="object-cover transition-all duration-700 group-hover:brightness-110"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-emerald-900/5 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlays for Seamless Blend */}
      <div className="absolute top-0 left-0 w-32 h-1/2 bg-gradient-to-r from-emerald-50 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-1/2 bg-gradient-to-l from-emerald-50 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-1/2 bg-gradient-to-r from-green-100 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-1/2 bg-gradient-to-l from-green-100 to-transparent z-20 pointer-events-none" />
    </div>
  );
}