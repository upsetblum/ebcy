import PortfolioTemplate from "@/components/PortfolioTemplate";

export default function BoulversementPage() {
  const images = [
    {
      src: "/assets/images/hero-slides/Flamands roses.jpg",
      alt: "Flamands roses",
      title: "Flamands Roses",
      description: "Espèces menacées par le réchauffement climatique"
    },
    {
      src: "/assets/images/7ème continent.png",
      alt: "7ème continent",
      title: "7ème Continent",
      description: "La pollution plastique des océans"
    },
    {
      src: "/assets/images/rivages/P09 Rivages.jpg",
      alt: "Rivages en mutation",
      title: "Rivages en Mutation",
      description: "L'érosion côtière face au changement climatique"
    },
    {
      src: "/assets/images/hero-slides/Cygne des temps rôti 01.jpg",
      alt: "Cygne des temps rôti",
      title: "Cygne des Temps Rôti",
      description: "Métaphore de la destruction environnementale"
    }
  ];

  return (
    <PortfolioTemplate
      title="Bouleversement Climatique"
      subtitle="Art et Sensibilisation Environnementale"
      description="Face à l'urgence climatique, l'art devient un langage universel pour éveiller les consciences. Cette série aborde les bouleversements environnementaux de notre époque : réchauffement, pollution, extinction des espèces. Chaque œuvre témoigne de la fragilité de notre écosystème et appelle à une prise de conscience collective. L'art devient ici un cri d'alarme poétique, une invitation à repenser notre relation au vivant."
      featuredImage="/assets/images/hero-slides/Flamands roses.jpg"
      images={images}
      backgroundColor="from-red-50 to-orange-100"
    />
  );
}