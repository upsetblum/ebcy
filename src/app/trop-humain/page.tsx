import PortfolioTemplate from "@/components/PortfolioTemplate";

export default function TropHumainPage() {
  const images = [
    {
      src: "/assets/images/portfolio/EBCY-Du-pied-gauche.jpg",
      alt: "Du pied gauche",
      title: "Du Pied Gauche",
      description: "Maladresse et humanité dans l'art contemporain"
    },
    {
      src: "/assets/images/portfolio/EBCY-Du-poil-de-la-bête.jpg",
      alt: "Du poil de la bête",
      title: "Du Poil de la Bête",
      description: "L'instinct animal qui sommeille en nous"
    },
    {
      src: "/assets/images/portfolio/EBCY-Le-saut-de-l-ange.jpg",
      alt: "Le saut de l'ange",
      title: "Le Saut de l'Ange",
      description: "Entre chute et élévation spirituelle"
    },
    {
      src: "/assets/images/portfolio/EBCY-Piedator.jpg",
      alt: "Piedator",
      title: "Piedator",
      description: "Hybridation entre humanité et animalité"
    }
  ];

  return (
    <PortfolioTemplate
      title="Trop Humain"
      subtitle="Réflexion sur la Condition Humaine Moderne"
      description="'Trop Humain' explore les paradoxes de notre humanité contemporaine. Cette série questionne nos faiblesses, nos instincts et nos aspirations dans un monde en mutation. Entre animalité et spiritualité, ces œuvres révèlent la complexité de l'être humain, ses contradictions et sa quête perpétuelle de sens. Chaque création dévoile une facette de notre condition moderne, parfois tragique, souvent poétique."
      featuredImage="/assets/images/portfolio/EBCY-Du-pied-gauche.jpg"
      images={images}
      backgroundColor="from-rose-50 to-stone-100"
    />
  );
}