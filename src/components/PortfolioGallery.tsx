'use client';

import Image from "next/image";
import ImageLightbox from "./ImageLightbox";
import { useLightbox } from "@/hooks/useLightbox";

interface PortfolioImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface PortfolioGalleryProps {
  featuredImage: string;
  title: string;
  description?: string;
  images: PortfolioImage[];
}

export default function PortfolioGallery({
  featuredImage,
  title,
  description,
  images
}: PortfolioGalleryProps) {
  // Prepare images for lightbox (include featured image)
  const lightboxImages = [
    { src: featuredImage, alt: title, title, description },
    ...images
  ];

  const { 
    isOpen, 
    currentIndex, 
    openLightbox, 
    closeLightbox, 
    navigateToImage 
  } = useLightbox(lightboxImages);

  return (
    <>
      {/* Featured Artwork */}
      <div className="max-w-6xl mx-auto mb-16">
        <div 
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer group transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]"
          onClick={() => openLightbox(0)}
        >
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300" />
          
          {/* Zoom indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
          
          {/* Click hint */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Cliquer pour agrandir
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      {images.length > 0 && (
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-stone-800 mb-8 text-center font-serif">
            Galerie
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div key={index} className="group relative">
                <div 
                  className="relative aspect-square rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
                  onClick={() => openLightbox(index + 1)} // +1 because featured image is at index 0
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Zoom indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Click hint */}
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Agrandir
                  </div>
                </div>
                {(image.title || image.description) && (
                  <div className="mt-4 text-center">
                    {image.title && (
                      <h4 className="text-lg font-semibold text-stone-800 mb-1">{image.title}</h4>
                    )}
                    {image.description && (
                      <p className="text-stone-600">{image.description}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      <ImageLightbox
        images={lightboxImages}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={closeLightbox}
        onNavigate={navigateToImage}
      />
    </>
  );
}