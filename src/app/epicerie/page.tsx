import PortfolioTemplate from "@/components/PortfolioTemplate";

export default function EpiceriePage() {
  const images = [
    {
      src: "/assets/images/epicerie/Logo EPICERIE enseigne.jpg",
      alt: "Enseigne EPICERIE",
      title: "L'Enseigne",
      description: "Identité visuelle du projet EPICERIE"
    },
    {
      src: "/assets/images/LOGO - EBCY poisson - final.jpg",
      alt: "EBCY Logo",
      title: "Signature Artistique",
      description: "L'identité EBCY au cœur du projet"
    },
    {
      src: "/assets/images/7ème continent.png",
      alt: "7ème Continent",
      title: "7ème Continent",
      description: "Sensibilisation aux déchets plastiques"
    }
  ];

  return (
    <PortfolioTemplate
      title="Épicerie"
      subtitle="Projet Artistique autour des Habitudes de Consommation"
      description="L'EPICERIE interroge nos habitudes de consommation et notre rapport à l'alimentation dans une société de surconsommation. Ce projet artistique transforme l'espace commercial en laboratoire de réflexion sur les enjeux environnementaux. À travers cette installation conceptuelle, je questionne l'origine de nos aliments, l'impact de nos choix et les alternatives possibles pour un futur plus durable."
      featuredImage="/assets/images/epicerie/Logo EPICERIE enseigne.jpg"
      images={images}
      backgroundColor="from-orange-50 to-yellow-100"
    />
  );
}