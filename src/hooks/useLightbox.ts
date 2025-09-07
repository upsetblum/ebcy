'use client';

import { useState, useCallback } from 'react';

interface LightboxImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export function useLightbox(images: LightboxImage[]) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navigateToImage = useCallback((index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  }, [images.length]);

  const nextImage = useCallback(() => {
    navigateToImage((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, navigateToImage]);

  const prevImage = useCallback(() => {
    navigateToImage((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, navigateToImage]);

  return {
    isOpen,
    currentIndex,
    openLightbox,
    closeLightbox,
    navigateToImage,
    nextImage,
    prevImage,
  };
}