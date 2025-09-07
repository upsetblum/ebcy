'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CVPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 to-amber-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8 min-h-screen">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 bg-stone-50 p-8 rounded-2xl shadow-lg">
            
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-bold text-stone-800 mb-4 font-serif leading-tight">
                EBCY
              </h1>
              <h2 className="text-xl text-stone-600 font-medium mb-6">
                ARTISTE CONTEMPORAINE
              </h2>
              
              {/* Contact Info */}
              <div className="space-y-2 text-stone-600 mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium w-20">[EMAIL]</span>
                  <span className="text-sm">contact@ebcy-art.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium w-20">[SITE]</span>
                  <span className="text-sm">www.ebcy-portfolio.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium w-20">[LIEU]</span>
                  <span className="text-sm">France</span>
                </div>
              </div>
            </div>

            {/* Artist Statement */}
            <div className="mb-12">
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                Mon travail artistique s&apos;articule autour des enjeux environnementaux contemporains, 
                questionnant notre rapport au vivant dans une époque de bouleversements climatiques majeurs. 
                À travers différents médiums - message, installation, sculpture - mes créations oscillent 
                entre beauté poétique et cri d&apos;alarme.
              </p>
              
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                Chaque œuvre témoigne de la fragilité de notre écosystème et appelle à une prise de 
                conscience collective. L&apos;art devient ici un langage universel pour sensibiliser 
                et éveiller les consciences face aux défis climatiques de notre temps.
              </p>

              <p className="text-lg text-stone-700 leading-relaxed">
                De la série Ruralité aux Bouleversements Climatiques, en passant par le projet 
                7ème Continent, mon parcours explore les multiples facettes de notre relation 
                complexe avec l&apos;environnement.
              </p>
            </div>

            {/* Exhibitions & Projects */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4 font-serif">
                  Projets & Expositions Marquants
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-amber-500 pl-6 py-2">
                    <h4 className="font-semibold text-stone-800">Projet 7ème Continent</h4>
                    <p className="text-stone-600 text-sm">Sensibilisation à la pollution plastique des océans</p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h4 className="font-semibold text-stone-800">Série Ruralité</h4>
                    <p className="text-stone-600 text-sm">Préservation du patrimoine rural français</p>
                  </div>
                  
                  <div className="border-l-4 border-stone-400 pl-6 py-2">
                    <h4 className="font-semibold text-stone-800">Installation EPICERIE</h4>
                    <p className="text-stone-600 text-sm">Réflexion sur nos habitudes de consommation</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6 py-2">
                    <h4 className="font-semibold text-stone-800">Exposition Dôle 2013</h4>
                    <p className="text-stone-600 text-sm">Présentation d&apos;œuvres environnementales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual & Info */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Profile Image */}
            <div 
              className="relative bg-stone-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src="/assets/images/portrait-ebcy-karim-kamoun.jpg"
                  alt="EBCY - Emmanuelle Baudin par Karim Kamoun"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-stone-900/90 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-60'}`} />
                
                {/* Photo Credit */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-stone-600 font-medium">
                  © Karim Kamoun
                </div>
              </div>
              
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-0">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-0">EMMANUELLE</h3>
                  <h3 className="text-2xl font-bold">BAUDIN</h3>
                </div>
                <div className="mt-4 text-right">
                  <span className="text-white/80 text-lg font-medium">ARTISTE</span>
                  <br />
                  <span className="text-white/80 text-lg font-medium">CONTEMPORAINE</span>
                </div>
              </div>
            </div>

            {/* Thematic Areas */}
            <div className="bg-stone-800 text-white p-6 rounded-2xl shadow-lg">
              <h4 className="text-lg font-bold mb-4">DOMAINES ARTISTIQUES</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-sm">Environnement & Biodiversité</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-sm">Ruralité & Traditions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Art & Engagement Social</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                  <span className="text-sm">Installations Contemporaines</span>
                </div>
              </div>
            </div>

            {/* Skills/Techniques */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-200">
              <h4 className="text-lg font-bold text-stone-800 mb-4">TECHNIQUES</h4>
              <div className="space-y-2">
                <div className="text-sm text-stone-600">• sculpture contemporaine</div>
                <div className="text-sm text-stone-600">• Installations artistiques</div>
                <div className="text-sm text-stone-600">• Alerte environnementale</div>
                <div className="text-sm text-stone-600">• Art conceptuel</div>
                <div className="text-sm text-stone-600">• Médiums mixtes</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Link 
                href="/#portfolio"
                className="inline-flex items-center px-6 py-3 bg-stone-800 text-white font-medium rounded-full hover:bg-stone-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Voir le Portfolio
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Name Banner */}
        <div className="mt-16 bg-stone-800 text-stone-100 py-8 rounded-2xl shadow-lg overflow-hidden relative">
          <div className="text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold font-serif tracking-wider">
              EMMANUELLE BAUDIN
            </h2>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 left-8 text-8xl font-bold text-amber-300">E</div>
            <div className="absolute bottom-4 right-8 text-8xl font-bold text-emerald-300">B</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-stone-600">C</div>
            <div className="absolute top-6 right-16 text-6xl font-bold text-green-300">Y</div>
          </div>
        </div>
      </div>
    </div>
  );
}