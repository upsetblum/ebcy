import PortfolioTemplate from "@/components/PortfolioTemplate";

export default function OiseauxPage() {
  const images = [
    {
      src: "/assets/images/oiseaux/Guerrier oiseau.jpg",
      alt: "Guerrier oiseau",
      title: "Guerrier Oiseau",
      description: "Fusion entre la force guerrière et la grâce aviaire"
    },
    {
      src: "/assets/images/oiseaux/Oiseau migrateur.jpg",
      alt: "Oiseau migrateur",
      title: "Oiseau Migrateur",
      description: "Mouvement perpétuel et quête de liberté"
    },
    {
      src: "/assets/images/P04 Oiseaux.jpg",
      alt: "Collection Oiseaux",
      title: "Collection Oiseaux",
      description: "Diversité et beauté du monde aviaire"
    }
  ];

  return (
    <PortfolioTemplate
      title="Oiseaux"
      subtitle="Liberté et Migration Aviaire"
      description="Cette série explore le symbolisme universel de l'oiseau : liberté, transcendance, migration. À travers ces œuvres, je capture l'essence du mouvement perpétuel, cette quête éternelle de nouveaux horizons qui caractérise autant les oiseaux que l'âme humaine. Chaque création révèle la poésie du vol et la beauté de la métamorphose."
      featuredImage="/assets/images/P04 Oiseaux.jpg"
      images={images}
      backgroundColor="from-sky-50 to-blue-100"
    />
  );
}