import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import projetoA from '../../img/pokemon.png';
import projetoB from '../../img/CZNet-Branco-Vermelho-Copia.png';
import projetoC from '../../img/GrowFlix.png';

import {
  CarouselContainer,
  SlideContent,
  SlideImage,
  SlideText,
  ButtonContainer,
  ProjectButton
} from './ProjectsStyles';
import PageContainer from '../common/PageContainer';

const projects = [
  {
    id: 'pokemon',
    title: 'Pokémon',
    description: 'Projeto de estudo com a API do mundo Pokémon.',
    image: projetoA,
    github: 'https://github.com/felipe-sinn/api-pokemon-react',
    site: 'https://api-pokemon-react.vercel.app/',
  },
  {
    id: 'soundmaster',
    title: 'SoundMaster Pro',
    description: 'Gravador de áudio para rádios.',
    image: projetoB,
    github: 'https://github.com/felipe-sinn/soundmaster-pro',
    site: 'https://soundmaster-pro.example.com/',
  },
  {
    id: 'growflix',
    title: 'GrowFlix',
    description: 'Plataforma fictícia de streaming de vídeos.',
    image: projetoC,
    github: 'https://github.com/felipe-sinn/growflix',
    site: 'https://growflix.example.com/',
  },
];

export const ProjectsPage: React.FC = () => {
  return (
    <PageContainer title="Meus Projetos">
      <div id="projetos">
        <CarouselContainer>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
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
                        href={project.site}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Acessar Site
                      </ProjectButton>
                      <ProjectButton
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Código no GitHub
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
