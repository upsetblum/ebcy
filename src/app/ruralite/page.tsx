import PortfolioTemplate from "@/components/PortfolioTemplate";

export default function RuralitePage() {
  const images = [
    {
      src: "/assets/images/hero-slides/Compile fleurs EBCY 01 150 dpi.jpg",
      alt: "Compilation fleurs",
      title: "Compilation Florale",
      description: "La diversité végétale de nos campagnes"
    },
    {
      src: "/assets/images/ruralite/La fleuriste est dans l'escalier TER.jpg",
      alt: "La fleuriste est dans l'escalier",
      title: "La Fleuriste dans l'Escalier",
      description: "Poésie du quotidien rural"
    },
    {
      src: "/assets/images/ruralite/Parterre de fleurs 01.jpg",
      alt: "Parterre de fleurs",
      title: "Parterre de Fleurs",
      description: "Jardins secrets et beautés cachées"
    },
    {
      src: "/assets/images/P01 sommaire.jpg",
      alt: "Sommaire rural",
      title: "Essence Rurale",
      description: "Synthèse de l'art de vivre à la campagne"
    }
  ];

  return (
    <PortfolioTemplate
      title="Ruralité"
      subtitle="Exploration de la Vie Rurale Française"
      description="La ruralité française recèle une poésie particulière faite de traditions millénaires et d'adaptations contemporaines. Cette série capture l'âme des campagnes, entre préservation du patrimoine et mutations modernes. À travers jardins secrets, artisanat local et paysages bucoliques, ces œuvres célèbrent la richesse culturelle et naturelle de nos territoires ruraux, témoins d'un art de vivre menacé par l'urbanisation croissante."
      featuredImage="/assets/images/hero-slides/Compile fleurs EBCY 01 150 dpi.jpg"
      images={images}
      backgroundColor="from-green-50 to-lime-100"
    />
  );
}