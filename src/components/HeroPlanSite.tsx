'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeroPlanSite() {
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const router = useRouter();

  // Zones interactives du plan (positions approximatives)
  const interactiveZones = [
    {
      id: 'accueil',
      title: 'Accueil',
      description: 'Page d\'accueil du portfolio et présentation générale',
      x: '5%',
      y: '5%',
      width: '25%',
      height: '15%',
      href: '/accueil'
    },
    {
      id: 'techniques',
      title: 'Techniques',
      description: 'Exploration des techniques artistiques contemporaines',
      x: '15%',
      y: '25%',
      width: '20%',
      height: '15%',
      href: '/techniques'
    },
    {
      id: 'epicerie',
      title: 'Épicerie',
      description: 'Projet artistique autour des habitudes de consommation',
      x: '40%',
      y: '20%',
      width: '25%',
      height: '20%',
      href: '/epicerie'
    },
    {
      id: 'poissons',
      title: 'Poissons',
      description: 'Monde aquatique et biodiversité marine',
      x: '70%',
      y: '30%',
      width: '20%',
      height: '15%',
      href: '/poissons'
    },
    {
      id: 'oiseaux',
      title: 'Oiseaux',
      description: 'Liberté et migration aviaire',
      x: '20%',
      y: '55%',
      width: '18%',
      height: '15%',
      href: '/oiseaux'
    },
    {
      id: 'rivages',
      title: 'Rivages',
      description: 'Paysages côtiers et littoraux',
      x: '45%',
      y: '60%',
      width: '22%',
      height: '18%',
      href: '/rivages'
    },
    {
      id: 'septieme-continent',
      title: '7ème Continent',
      description: 'Sensibilisation aux déchets plastiques',
      x: '75%',
      y: '65%',
      width: '20%',
      height: '15%',
      href: '/bouleversement'
    },
    {
      id: 'cv',
      title: 'CV & Parcours',
      description: 'Parcours artistique, expositions et téléchargement CV',
      x: '10%',
      y: '80%',
      width: '20%',
      height: '15%',
      href: '/cv'
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-50 via-amber-25 to-stone-100 py-8 lg:py-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-amber-200 to-stone-300"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Title & Description */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <div className="space-y-2 lg:space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-stone-800 font-serif leading-tight">
                  EBCY
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-stone-700 font-light">
                  Emmanuelle Baudin
                </h2>
                <p className="text-base lg:text-lg text-stone-600 font-medium">
                  Artiste Contemporaine & Sensibilisation Environnementale
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-stone-200 shadow-lg">
                <h3 className="text-lg lg:text-xl font-semibold text-stone-800 mb-2 lg:mb-3">
                  Architecture Thématique du Portfolio
                </h3>
                <p className="text-sm lg:text-base text-stone-700 leading-relaxed">
                  Explorez mon univers artistique organisé autour des enjeux environnementaux contemporains. 
                  Chaque section révèle une facette de ma démarche engagée, de l'art culinaire conceptuel 
                  aux bouleversements climatiques.
                </p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-3 bg-stone-800 text-white font-medium rounded-full hover:bg-stone-700 transition-all duration-300 hover:shadow-lg"
                prefetch={true}
              >
                Explorer le Portfolio
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
              
              <Link
                href="/cv"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-stone-800 text-stone-800 font-medium rounded-full hover:bg-stone-800 hover:text-white transition-all duration-300"
                prefetch={true}
                onMouseEnter={() => router.prefetch('/cv')}
              >
                CV & Parcours
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side - Interactive Plan */}
          <div className="relative order-first lg:order-last">
            <div className="relative mx-auto max-w-sm sm:max-w-lg lg:max-w-2xl">
              {/* Plan Image */}
              <div className="relative aspect-video rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl bg-white">
                <Image
                  src="/assets/images/plan-site-visuel.jpg"
                  alt="Plan du site visuel EBCY"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 50vw"
                />
                
                {/* Interactive Zones Overlay - Only on desktop */}
                <div className="absolute inset-0 hidden lg:block">
                  {interactiveZones.map((zone) => (
                    <Link
                      key={zone.id}
                      href={zone.href}
                      className="absolute group cursor-pointer"
                      prefetch={true}
                      style={{
                        left: zone.x,
                        top: zone.y,
                        width: zone.width,
                        height: zone.height,
                      }}
                      onMouseEnter={() => {
                        setActiveZone(zone.id);
                        router.prefetch(zone.href);
                      }}
                      onMouseLeave={() => setActiveZone(null)}
                    >
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-amber-400/20 border-2 border-amber-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-stone-800 text-white px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                          {zone.title}
                        </div>
                      </div>
                      
                      {/* Pulse dot */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse shadow-lg opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Mobile zones overlay - simplified */}
                <div className="absolute inset-0 lg:hidden flex items-center justify-center">
                  <div className="bg-stone-800/80 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Tapez pour explorer
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-amber-500 text-white rounded-lg lg:rounded-xl px-2 py-1 lg:px-4 lg:py-2 shadow-lg">
                <div className="text-xs lg:text-sm font-semibold">Plan Interactif</div>
              </div>
              
              {/* Instructions - only on desktop */}
              <div className="absolute -bottom-6 lg:-bottom-8 left-1/2 transform -translate-x-1/2 text-center hidden lg:block">
                <p className="text-stone-600 text-sm font-medium bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                  Survolez les zones pour découvrir • Cliquez pour explorer
                </p>
              </div>

              {/* Mobile instructions */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-center lg:hidden">
                <p className="text-stone-600 text-xs font-medium bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
                  Tapez sur l'image pour naviguer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Logos - Responsive */}
        <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-3 lg:gap-6 opacity-60">
            <Image
              src="/assets/images/LOGO - EBCY poisson - final.jpg"
              alt="EBCY Logo"
              width={60}
              height={30}
              className="object-contain lg:w-20 lg:h-10"
            />
            <Image
              src="/assets/images/7ème continent.png"
              alt="7ème Continent"
              width={80}
              height={40}
              className="object-contain lg:w-25 lg:h-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}