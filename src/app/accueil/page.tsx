'use client';

import AccueilSlideshow from "@/components/AccueilSlideshow";
import Link from "next/link";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import { useLightbox } from "@/hooks/useLightbox";
import { useEffect } from "react";

export default function AccueilPage() {
  // Set document title
  useEffect(() => {
    document.title = "Accueil - EBCY Portfolio Artistique";
  }, []);

  // Images for lightbox
  const lightboxImages = [
    {
      src: "/assets/images/7ème continent.png",
      alt: "7ème Continent",
      title: "Projet 7ème Continent",
      description: "Sensibilisation à la pollution plastique des océans"
    },
    {
      src: "/assets/images/poissons/000B-poissons.jpg",
      alt: "Biodiversité Marine",
      title: "Biodiversité Marine",
      description: "Exploration des écosystèmes aquatiques menacés"
    },
    {
      src: "/assets/images/ruralite/Parterre de fleurs 01.jpg",
      alt: "Patrimoine Rural",
      title: "Patrimoine Rural", 
      description: "Préservation de l'identité culturelle française"
    },
    {
      src: "/assets/images/oiseaux/Guerrier oiseau.jpg",
      alt: "Liberté Aviaire",
      title: "Liberté Aviaire",
      description: "Le symbolisme universel de l'oiseau en mouvement"
    }
  ];

  const { 
    isOpen, 
    currentIndex, 
    openLightbox, 
    closeLightbox, 
    navigateToImage 
  } = useLightbox(lightboxImages);

  const portfolioHighlights = [
    {
      title: "Art Environnemental",
      description: "Sensibilisation aux enjeux climatiques par la création artistique",
      image: "/assets/images/7ème continent.png",
      link: "/bouleversement"
    },
    {
      title: "Biodiversité Marine",
      description: "Exploration des écosystèmes aquatiques menacés",
      image: "/assets/images/poissons/000B-poissons.jpg",
      link: "/poissons"
    },
    {
      title: "Patrimoine Rural",
      description: "Préservation de l'identité culturelle française",
      image: "/assets/images/ruralite/Parterre de fleurs 01.jpg",
      link: "/ruralite"
    },
    {
      title: "Liberté Aviaire",
      description: "Le symbolisme universel de l'oiseau en mouvement",
      image: "/assets/images/oiseaux/Guerrier oiseau.jpg",
      link: "/oiseaux"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Main Slideshow */}
      <AccueilSlideshow />
      
      {/* Introduction Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Text Content */}
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6 font-serif">
                  Bienvenue dans l&apos;univers EBCY
                </h1>
                <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
                  <p>
                    <strong className="text-stone-800">Emmanuelle Baudin (EBCY)</strong> développe 
                    un art contemporain engagé qui interroge notre rapport au vivant dans une époque 
                    de bouleversements environnementaux majeurs.
                  </p>
                  <p>
                    À travers différents médiums - peinture, installation, sculpture - ses créations 
                    oscillent entre beauté poétique et cri d&apos;alarme, invitant le spectateur à une 
                    réflexion profonde sur les défis climatiques de notre temps.
                  </p>
                  <p>
                    Chaque œuvre témoigne de la <em>fragilité de notre écosystème</em> et appelle à 
                    une prise de conscience collective. L&apos;art devient ici un langage universel pour 
                    sensibiliser et éveiller les consciences.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/#portfolio"
                    className="inline-flex items-center px-8 py-4 bg-stone-800 text-white font-medium rounded-full hover:bg-stone-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Explorer le Portfolio
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  
                  <Link 
                    href="/cv"
                    className="inline-flex items-center px-8 py-4 border-2 border-stone-800 text-stone-800 font-medium rounded-full hover:bg-stone-800 hover:text-white transition-colors"
                  >
                    Parcours Artistique
                  </Link>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/images/LOGO - EBCY poisson - final.jpg"
                    alt="EBCY - Emmanuelle Baudin"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                
                {/* Floating cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">15+</div>
                    <div className="text-sm text-stone-600">Années d&apos;expérience</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-sm text-stone-600">Œuvres créées</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-stone-800 mb-4 font-serif">
                Thématiques Principales
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Découvrez les grandes séries qui composent l&apos;univers artistique EBCY, 
                chacune explorant une facette de notre relation au monde naturel.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {portfolioHighlights.map((item, index) => (
                <div key={index} className="group">
                  <div 
                    className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {/* Zoom indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber-200 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        
                        {/* Visit section link */}
                        <Link 
                          href={item.link}
                          className="inline-flex items-center mt-3 text-amber-200 text-sm font-medium hover:text-amber-100 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Visiter la section
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-stone-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              L&apos;Art au Service de l&apos;Environnement
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Chaque création EBCY porte un message d&apos;espoir et d&apos;engagement pour la préservation 
              de notre planète. L&apos;art devient un pont entre sensibilité artistique et conscience écologique.
            </p>
            
            <div className="flex justify-center items-center gap-8 mb-8">
              <Image
                src="/assets/images/7ème continent.png"
                alt="7ème Continent"
                width={120}
                height={60}
                className="object-contain opacity-80"
              />
            </div>

            <Link 
              href="/bouleversement"
              className="inline-flex items-center px-8 py-4 bg-amber-500 text-stone-900 font-medium rounded-full hover:bg-amber-400 transition-colors shadow-lg hover:shadow-xl"
            >
              Découvrir l&apos;Art Environnemental
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={lightboxImages}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={closeLightbox}
        onNavigate={navigateToImage}
      />
    </div>
  );
}