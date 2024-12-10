import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import projetoA from "../../img/pokemon.png";
import projetoB from "../../img/Captura de tela 2024-12-07 154631.png";
import projetoC from "../../img/Inserir um título.png";
import {
  CarouselContainer,
  SlideContent,
  SlideImage,
  SlideText,
  ProjectButton,
  ButtonContainer,
} from "./ProjectsStyles";
import PageContainer from "../common/PageContainer";

const projects = [
  
  {
    id: "Projetos em Construção",
    title: "Projetos em Construção",
    description: "Página está em contrução em breve terá mais projetos",
    image: projetoC,
  },
  {
    id: "pokemon",
    title: "Pokémon",
    description: "Projeto de estudo com a API do mundo Pokémon.",
    image: projetoA,
    github: "https://github.com/felipesinn/api_pokemon_react_3",
    site: "https://api-pokemon-react-3.vercel.app/",
  },
  {
    id: "Rick and morty",
    title: "Rick Rick and morty",
    description: "Projeto de estudo com a API do mundo Rick Morty.",
    image: projetoB,
    github: "https://github.com/felipesinn/projeto-frontEnd-2-growdev-rick-and-morty.git",
    site: "https://projeto-front-end-2-growdev-rick-and-morty.vercel.app/",
  },
  {
    id: "Projetos em Construção",
    title: "Projetos em Construção",
    description: "Página está em contrução em breve terá mais projetos",
    image: projetoC,
  }
];

export const ProjectsPage: React.FC = () => {
  return (
    <PageContainer title="Meus Projetos">
      <div id="projetos">
        <CarouselContainer>
        <Swiper
  modules={[Autoplay, EffectCoverflow, Pagination]} // Remova o Navigation daqui
  effect="coverflow"
  grabCursor
  centeredSlides
  loop
  slidesPerView={1} // padrão para telas menores
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
  }}
  pagination={{ clickable: true }}
  autoplay={{
    delay: 5500,
    disableOnInteraction: false,
  }}
  breakpoints={{
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }}
>

            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <SlideContent>
                  <SlideImage src={project.image} alt={project.title} />
                  <SlideText>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ButtonContainer>
                      <ProjectButton
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver no GitHub
                      </ProjectButton>
                      <ProjectButton
                        href={project.site}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Acessar Site
                      </ProjectButton>
                    </ButtonContainer>
                  </SlideText>
                </SlideContent>
              </SwiperSlide>
            ))}
          </Swiper>
        </CarouselContainer>
      </div>
    </PageContainer>
  );
};
