import PortfolioTemplate from "@/components/PortfolioTemplate";

export default function RivagesPage() {
  const images = [
    {
      src: "/assets/images/rivages/P09 Rivages.jpg",
      alt: "Paysages côtiers",
      title: "Paysages Côtiers",
      description: "La beauté sauvage des littoraux français"
    },
    {
      src: "/assets/images/rivages/Rivages.jpg",
      alt: "Rivages naturels",
      title: "Rivages Naturels",
      description: "L'érosion du temps sur les côtes"
    },
    {
      src: "/assets/images/hero-slides/Flamands roses.jpg",
      alt: "Flamands roses",
      title: "Flamands Roses",
      description: "Vie sauvage des zones humides côtières"
    }
  ];

  return (
    <PortfolioTemplate
      title="Rivages"
      subtitle="Paysages Côtiers et Littoraux"
      description="Les rivages représentent cette frontière mouvante entre terre et mer, cet espace liminal où s'écrit l'histoire géologique de notre planète. À travers cette série, j'explore les transformations constantes du littoral, témoins silencieux des changements climatiques. Ces paysages côtiers racontent la fragilité et la puissance de la nature face aux défis environnementaux contemporains."
      featuredImage="/assets/images/rivages/P09 Rivages.jpg"
      images={images}
      backgroundColor="from-emerald-50 to-stone-100"
    />
  );
}