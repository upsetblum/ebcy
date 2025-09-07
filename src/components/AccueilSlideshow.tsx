'use client';

import React from 'react';
import Image from 'next/image';

const accueilImages = [
  '/assets/images/accueil/14-25manu.jpg',
  '/assets/images/accueil/15-08manu.jpg',
  '/assets/images/accueil/15-12manu.jpg',
  '/assets/images/accueil/15-17manu.jpg',
  '/assets/images/accueil/15-20manu.jpg',
  '/assets/images/accueil/16-07amanu.jpg',
  '/assets/images/accueil/16-08manu.jpg',
  '/assets/images/accueil/16-09manu.jpg',
  '/assets/images/accueil/16-10manu.jpg',
  '/assets/images/accueil/Exposition Dôle 2013 - 00 (moyen).jpg',
  '/assets/images/accueil/Conquistador détouré.jpg',
  '/assets/images/accueil/EPICERIE - soleret insecte.jpg',
  '/assets/images/accueil/fleche3.jpg',
  '/assets/images/accueil/fleche4.jpg',
  '/assets/images/oiseaux/Guerrier oiseau.jpg',
  '/assets/images/oiseaux/Oiseau migrateur.jpg',
  '/assets/images/poissons/000B-poissons.jpg',
  '/assets/images/poissons/EBCY-poisson-unijambiste.jpg',
  '/assets/images/hero-slides/14-08manu.jpg',
  '/assets/images/hero-slides/15-11manu.jpg',
  '/assets/images/hero-slides/16-07manu.jpg',
  '/assets/images/hero-slides/Compile fleurs EBCY 01 150 dpi.jpg',
  '/assets/images/hero-slides/Flamands roses.jpg',
  '/assets/images/hero-slides/Cygne des temps rôti 01.jpg',
  '/assets/images/portfolio/EBCY-Du-pied-gauche.jpg',
  '/assets/images/portfolio/EBCY-Du-poil-de-la-bête.jpg',
  '/assets/images/portfolio/EBCY-Le-saut-de-l-ange.jpg',
  '/assets/images/portfolio/EBCY-Piedator.jpg',
  '/assets/images/ruralite/La fleuriste est dans l\'escalier TER.jpg',
  '/assets/images/ruralite/Parterre de fleurs 01.jpg',
  '/assets/images/portfolio/Exposition_Dole_Synthèse.jpg',
  '/assets/images/portfolio/Débarcadère 1 - novembre 2007.jpg',
  '/assets/images/portfolio/Cercle de jeu 02.jpg',
  '/assets/images/rivages/Rivages.jpg',
  '/assets/images/LOGO - EBCY poisson - final.jpg',
  '/assets/images/P02 Techniques.jpg',
  '/assets/images/P04 Oiseaux.jpg',
  '/assets/images/P09 Rivages.jpg'
];

export default function AccueilSlideshow() {
  // Dupliquer les images pour un défilement infini
  const duplicatedImages = [...accueilImages, ...accueilImages, ...accueilImages];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-white"
    >
      {/* Hero Text Section */}
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 font-serif neon-glow-title">
            EBCY
          </h1>
          <p className="text-xl md:text-2xl text-black font-light max-w-2xl neon-glow-subtitle">
            Art Contemporain & Sensibilisation Environnementale
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
                alt={`Œuvre ${index + 1}`}
                fill
                className="object-cover transition-all duration-700 group-hover:brightness-110"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
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
                alt={`Œuvre ${index + 1}`}
                fill
                className="object-cover transition-all duration-700 group-hover:brightness-110"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlays for Seamless Blend */}
      <div className="absolute top-0 left-0 w-32 h-1/2 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-1/2 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-1/2 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-1/2 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
      
    </div>
  );
}