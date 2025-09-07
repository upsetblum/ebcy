import Link from "next/link";
import PortfolioGallery from "./PortfolioGallery";

interface PortfolioImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface PortfolioTemplateProps {
  title: string;
  subtitle?: string;
  description: string;
  featuredImage: string;
  images: PortfolioImage[];
  backgroundColor?: string;
}

export default function PortfolioTemplate({
  title,
  subtitle,
  description,
  featuredImage,
  images,
  backgroundColor = "from-amber-50 to-stone-100"
}: PortfolioTemplateProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-b ${backgroundColor}`}>
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-4 font-serif">{title}</h1>
          {subtitle && (
            <h2 className="text-2xl text-stone-600 mb-6 font-light">{subtitle}</h2>
          )}
          <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Portfolio Gallery with Lightbox */}
        <PortfolioGallery
          featuredImage={featuredImage}
          title={title}
          description={description}
          images={images}
        />

        {/* Back to Portfolio Button */}
        <div className="text-center">
          <Link 
            href="/#portfolio"
            className="inline-flex items-center px-8 py-4 bg-stone-800 text-white font-medium rounded-full hover:bg-stone-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <svg className="mr-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour au portfolio
          </Link>
        </div>
      </div>

    </div>
  );
}