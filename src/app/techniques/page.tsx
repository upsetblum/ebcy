import Image from "next/image";
import Link from "next/link";

export default function TechniquesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-stone-800 mb-4 font-serif">Techniques</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Exploration des différentes techniques artistiques et de leur application 
            dans mes créations contemporaines.
          </p>
        </div>

        {/* Featured Artwork */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/assets/images/P02 Techniques.jpg"
              alt="Techniques artistiques"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Description */}
        <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            Cette section présente l&apos;évolution de mes techniques artistiques à travers 
            différents médiums et supports. De la peinture traditionnelle aux installations 
            contemporaines, chaque technique est explorée dans sa capacité à transmettre 
            un message environnemental fort.
          </p>
          
          <p className="text-lg text-stone-700 leading-relaxed mb-8">
            Les techniques développées ici s&apos;inspirent de l&apos;observation de la nature 
            et de notre impact sur l&apos;environnement, créant un dialogue entre tradition 
            artistique et préoccupations contemporaines.
          </p>

          <div className="text-center">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-stone-800 text-white font-medium rounded-full hover:bg-stone-700 transition-colors"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour au portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}