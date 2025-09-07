'use client';

import Image from "next/image";
import Link from "next/link";
import HeroPlanSite from "@/components/HeroPlanSite";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  
  // Images pour le slideshow
  const slideshowImages = [
    { src: "/assets/images/P01 sommaire.jpg", alt: "Portfolio EBCY - Sommaire" },
    { src: "/assets/images/P02 Techniques.jpg", alt: "Techniques artistiques" },
    { src: "/assets/images/P04 Oiseaux.jpg", alt: "Série Oiseaux" },
    { src: "/assets/images/P09 Rivages.jpg", alt: "Série Rivages" },
    { src: "/assets/images/LOGO - EBCY poisson - final.jpg", alt: "Logo EBCY" }
  ];

  // Auto-play slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slideshowImages.length]);

  const portfolioSections = [
    { 
      id: 'accueil', 
      title: 'Accueil', 
      image: '/assets/images/accueil/Exposition Dôle 2013 - 00 (moyen).jpg', 
      featured: true,
      description: 'Présentation générale du travail artistique et vision EBCY'
    },
    { 
      id: 'techniques', 
      title: 'Techniques', 
      image: '/assets/images/P02 Techniques.jpg',
      description: 'Exploration des techniques artistiques contemporaines'
    },
    { 
      id: 'trop-humain', 
      title: 'Trop Humain', 
      image: '/assets/images/portfolio/EBCY-Du-pied-gauche.jpg',
      description: 'Réflexion sur la condition humaine moderne'
    },
    { 
      id: 'epicerie', 
      title: 'Épicerie', 
      image: '/assets/images/epicerie/Logo EPICERIE enseigne.jpg',
      description: 'Projet artistique autour des habitudes de consommation'
    },
    { 
      id: 'chevaux', 
      title: 'Chevaux', 
      image: '/assets/images/portfolio/EBCY-Le-saut-de-l-ange.jpg',
      description: 'Série équestre et mouvement'
    },
    { 
      id: 'bouleversement', 
      title: 'Bouleversement Climatique', 
      image: '/assets/images/hero-slides/Flamands roses.jpg',
      description: 'Art et sensibilisation environnementale'
    },
    { 
      id: 'ruralite', 
      title: 'Ruralité', 
      image: '/assets/images/hero-slides/Compile fleurs EBCY 01 150 dpi.jpg',
      description: 'Exploration de la vie rurale française'
    },
    { 
      id: 'ficus', 
      title: 'Ficus', 
      image: '/assets/images/hero-slides/Cygne des temps rôti 01.jpg',
      description: 'Série végétale et croissance'
    },
    { 
      id: 'poissons', 
      title: 'Poissons', 
      image: '/assets/images/poissons/000B-poissons.jpg',
      description: 'Monde aquatique et biodiversité marine'
    },
    { 
      id: 'oiseaux', 
      title: 'Oiseaux', 
      image: '/assets/images/oiseaux/Guerrier oiseau.jpg',
      description: 'Liberté et migration aviaire'
    },
    { 
      id: 'rivages', 
      title: 'Rivages', 
      image: '/assets/images/rivages/P09 Rivages.jpg',
      description: 'Paysages côtiers et littoraux'
    },
    { 
      id: 'cv', 
      title: 'CV & Parcours', 
      image: '/assets/images/portfolio/EBCY-Piedator.jpg',
      description: 'Parcours artistique et expositions'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      {/* Hero Section */}
      <section className="relative">
        <HeroPlanSite />
      </section>

      {/* Main Portfolio Grid */}
      <main id="portfolio" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-4 font-serif">Portfolio</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Découvrez mes créations artistiques organisées par thématiques, 
            chacune explorant différents aspects de notre relation au monde contemporain.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-fr">
          {portfolioSections.map((section) => (
            <Link 
              key={section.id} 
              href={`/${section.id}`} 
              className="group"
              prefetch={true}
              onMouseEnter={() => router.prefetch(`/${section.id}`)}
            >
              <div className={`
                relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 
                hover:shadow-2xl hover:scale-105 bg-white
              `}>
                <div className="relative aspect-square">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover overlay with description */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-white/90 text-sm leading-relaxed mb-2">
                      {section.description}
                    </p>
                  </div>
                </div>
                
                {/* Title bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg group-hover:text-amber-200 transition-colors">
                    {section.title}
                  </h3>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg" />
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Plan du Site Visuel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-stone-800 mb-4 font-serif">
                Plan du Site Visuel
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Découvrez l&apos;architecture visuelle du portfolio EBCY à travers ce plan conceptuel qui illustre l&apos;organisation thématique des créations artistiques.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Slideshow Section */}
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  {/* Slideshow avec images portfolio */}
                  <div className="relative w-full h-full">
                    {slideshowImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                          index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                    
                    {/* Indicateurs du slideshow */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="flex space-x-2">
                        {slideshowImages.map((_, index) => (
                          <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentSlide 
                                ? 'bg-white scale-125' 
                                : 'bg-white/50 hover:bg-white/70'
                            }`}
                            onClick={() => setCurrentSlide(index)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating info badge */}
                <div className="absolute -top-4 -right-4 bg-amber-500 text-white rounded-xl px-4 py-2 shadow-lg">
                  <div className="text-sm font-semibold">Créations EBCY</div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-stone-800 font-serif">
                  Architecture Thématique
                </h3>
                
                <div className="space-y-4 text-stone-700">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-stone-800 mb-1">Organisation Visuelle</h4>
                      <p className="leading-relaxed">
                        Chaque section du portfolio est organisée selon une logique thématique cohérente, 
                        permettant une navigation intuitive à travers l&apos;univers artistique EBCY.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-stone-800 mb-1">Interconnexions</h4>
                      <p className="leading-relaxed">
                        Les différentes thématiques s&apos;articulent autour des enjeux environnementaux, 
                        créant un dialogue constant entre art et conscience écologique.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-stone-800 mb-1">Parcours Artistique</h4>
                      <p className="leading-relaxed">
                        Du patrimoine rural aux bouleversements climatiques, chaque section révèle 
                        une facette de la démarche artistique engagée d&apos;Emmanuelle Baudin.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link 
                    href="/accueil"
                    className="inline-flex items-center px-6 py-3 bg-stone-800 text-white font-medium rounded-full hover:bg-stone-700 transition-colors"
                  >
                    Explorer le Plan Interactif
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with EBCY logo in circle */}
      <footer className="bg-stone-800 text-white py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-8">
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white p-3 flex items-center justify-center">
                <Image
                  src="/assets/images/LOGO - EBCY poisson - final.jpg"
                  alt="EBCY Logo"
                  width={80}
                  height={80}
                  className="object-contain rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-serif">EBCY</h3>
            <p className="text-stone-300 text-lg">
              Emmanuelle Baudin
            </p>
            <p className="text-stone-400">
              Art contemporain et sensibilisation environnementale
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-700">
            <p className="text-stone-400 text-sm">
              © 2025 EBCY - Emmanuelle Baudin. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
