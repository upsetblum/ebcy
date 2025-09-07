import PortfolioTemplate from "@/components/PortfolioTemplate";
import FicusSlideshow from "@/components/FicusSlideshow";

export default function FicusPage() {
  const images = [
    {
      src: "/assets/images/hero-slides/Cygne des temps rôti 01.jpg",
      alt: "Cygne des temps rôti",
      title: "Cygne des Temps Rôti",
      description: "Métamorphose végétale et animale"
    },
    {
      src: "/assets/images/hero-slides/Compile fleurs EBCY 01 150 dpi.jpg",
      alt: "Compilation florale",
      title: "Compilation Florale",
      description: "Diversité botanique et croissance organique"
    },
    {
      src: "/assets/images/ruralite/Parterre de fleurs 01.jpg",
      alt: "Parterre de fleurs",
      title: "Parterre de Fleurs",
      description: "Écosystème végétal en développement"
    },
    {
      src: "/assets/images/ruralite/La fleuriste est dans l'escalier TER.jpg",
      alt: "La fleuriste dans l'escalier",
      title: "La Fleuriste dans l'Escalier",
      description: "Intégration de la nature dans l'espace urbain"
    },
    {
      src: "/assets/images/ficus/Fleur-fougere.jpg",
      alt: "Fleur fougère",
      title: "Fleur Fougère",
      description: "Hybridation végétale et évolution"
    }
  ];

  return (
    <>
      <FicusSlideshow />
      <PortfolioTemplate
        title="Collection Ficus"
        subtitle="Série Végétale et Croissance"
        description="La série Ficus explore les processus de croissance, d'adaptation et de régénération du monde végétal. Ces œuvres interrogent les cycles naturels face aux perturbations environnementales contemporaines. À travers la métaphore du ficus, plante d'intérieur devenue symbole de notre rapport domestiqué à la nature, cette série questionne notre capacité collective à grandir, s'adapter et survivre dans un environnement en mutation."
        featuredImage="/assets/images/hero-slides/Cygne des temps rôti 01.jpg"
        images={images}
        backgroundColor="from-emerald-50 to-green-100"
      />
    </>
  );
}