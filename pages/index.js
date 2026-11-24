import ContainerBlock from "../components/ContainerBlock";
import Ventures from "../components/Ventures";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <ContainerBlock
      title="Prija Cash"
      description="Prija Cash (Prija Phaphouampheng). Family man, creator of Family Man Era, and founder of Blueprint AI Studio."
    >
      <Hero />
      <Ventures />
    </ContainerBlock>
  );
}
