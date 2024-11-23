import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import projetoA from "../../img/pokemon.png";
import projetoB from "../../img/CZNet-Branco-Vermelho-Copia.png";
import projetoC from "../../img/GrowFlix.png";

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
    id: "pokemon",
    title: "Pokémon",
    description: "Projeto de estudo com a API do mundo Pokémon.",
    image: projetoA,
    github: "https://github.com/felipe-sinn/api-pokemon-react",
    site: "https://api-pokemon-react.vercel.app/",
  },
  {
    id: "soundmaster",
    title: "SoundMaster Pro",
    description: "Gravador de áudio para rádios.",
    image: projetoB,
    github: "https://github.com/felipe-sinn/soundmaster-pro",
    site: "https://soundmaster-pro.example.com/",
  },
  {
    id: "growflix",
    title: "GrowFlix",
    description: "Plataforma fictícia de streaming de vídeos.",
    image: projetoC,
    github: "https://github.com/felipe-sinn/growflix",
    site: "https://growflix.example.com/",
  },
];

export const ProjectsPage: React.FC = () => {
  return (
    <PageContainer title="Meus Projetos">
      <div id="projetos">
        <CarouselContainer>
          <Swiper
            modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
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
            navigation
            autoplay={{
              delay: 2500,
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
