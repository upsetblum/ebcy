import PortfolioTemplate from "@/components/PortfolioTemplate";

export default function PoissonsPage() {
  const images = [
    {
      src: "/assets/images/poissons/000B-poissons.jpg",
      alt: "Monde aquatique",
      title: "Biodiversité Marine",
      description: "Exploration des profondeurs et de la richesse marine"
    },
    {
      src: "/assets/images/poissons/EBCY-poisson-unijambiste.jpg",
      alt: "Poisson unijambiste EBCY",
      title: "Poisson Unijambiste",
      description: "Adaptation et résilience dans l'écosystème aquatique"
    },
    {
      src: "/assets/images/LOGO - EBCY poisson - final.jpg",
      alt: "Logo EBCY poisson",
      title: "Signature Artistique",
      description: "Le poisson comme symbole de l'identité créative EBCY"
    }
  ];

  return (
    <PortfolioTemplate
      title="Poissons"
      subtitle="Monde Aquatique et Biodiversité Marine"
      description="Les poissons incarnent la fluidité, l'adaptation et la diversité de la vie aquatique. Cette série plonge dans les profondeurs marines pour révéler la beauté cachée des écosystèmes sous-marins. Chaque œuvre questionne notre rapport à l'océan, cette source de vie menacée par les activités humaines, tout en célébrant la résilience extraordinaire de la faune marine."
      featuredImage="/assets/images/poissons/000B-poissons.jpg"
      images={images}
      backgroundColor="from-cyan-50 to-teal-100"
    />
  );
}