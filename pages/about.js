import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import AboutMe from "../components/AboutMe";

export default function about() {
  return (
    <ContainerBlock
      title="About — Prija Cash"
      description="Prija Cash founded Blueprint AI Studio and works in crypto and AI."
    >
      <AboutMe />
    </ContainerBlock>
  );
}
