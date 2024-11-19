import React, { useState } from 'react';
import projetoA from '../../img/pokemon.png';
import projetoB from '../../img/SoundMaster Pro.png';
import { 
  CarouselContainer, 
  ProjectCard, 
  CarouselButtons, 
  CarouselNavigation, 
  ModalContent, 
  ModalBackdrop, 
  CloseButton 
} from './ProjectsStyles';
import PageContainer from '../common/PageContainer';


export const ProjectsPage: React.FC = () => {
  const projects = [
    {
      id: 'pokemon',
      title: 'Pokémon',
      description: 'Este projeto foi feito pra fins de estudo da API do mundo Pokémon.',
      technologies: ['React', 'TypeScript', 'API REST'],
      duration: '2 semanas',
      challenges: 'Consumir a API e lidar com a paginação de resultados.',
      image: projetoA,
      link: 'https://api-pokemon-react-3.vercel.app',
      github: 'https://github.com/felipe-sinn/api-pokemon-react'
    },
    {
      id: 'soundmaster',
      title: 'SoundMaster Pro',
      description: 'SoundMaster Pro é um gravador de áudio para rádios.',
      technologies: ['Python', 'Tkinter', 'PyAudio'],
      duration: '1 mês',
      challenges: 'Desenvolver o layout e integrar a captura de áudio.',
      image: projetoB,
      link: 'https://github.com/felipe-sinn/soundmaster-pro',
      github: 'https://github.com/felipe-sinn/soundmaster-pro'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const closeModal = () => setSelectedProject(null);

  return (
    <PageContainer title="Meus Projetos">
      <div id="projetos">
        <CarouselContainer>
          <ProjectCard>
            <img src={projects[currentIndex].image} alt={projects[currentIndex].title} />
            <h3>{projects[currentIndex].title}</h3>
            <p>{projects[currentIndex].description}</p>
            <CarouselButtons>
              <button onClick={() => setSelectedProject(currentIndex)}>Saiba Mais</button>
              <a 
                href={projects[currentIndex].github} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </CarouselButtons>
          </ProjectCard>
          <CarouselNavigation>
            <button onClick={handlePrev} aria-label="Anterior">‹</button>
            <button onClick={handleNext} aria-label="Próximo">›</button>
          </CarouselNavigation>
        </CarouselContainer>

        {selectedProject !== null && (
          <ModalBackdrop onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closeModal} aria-label="Fechar">×</CloseButton>
              <img 
                src={projects[selectedProject].image} 
                alt={projects[selectedProject].title} 
                style={{ width: '100%', borderRadius: '8px' }} 
              />
              <h3>{projects[selectedProject].title}</h3>
              <p><strong>Descrição:</strong> {projects[selectedProject].description}</p>
              <p><strong>🛠 Tecnologias:</strong> {projects[selectedProject].technologies.join(', ')}</p>
              <p><strong>⏳ Duração:</strong> {projects[selectedProject].duration}</p>
              <p><strong>🚀 Desafios:</strong> {projects[selectedProject].challenges}</p>
              <a href={projects[selectedProject].link} target="_blank" rel="noopener noreferrer">Ver Mais</a>
            </ModalContent>
          </ModalBackdrop>
        )}
      </div>
    </PageContainer>
  );
};

export default ProjectsPage;
