// components/about/AboutPage.tsx
import React from 'react';
import PageContainer from '../common/PageContainer'; // Importando o PageContainer
import { AboutContent } from './AboutStyles'; // Importando os estilos

export const AboutPage: React.FC = () => {
  return (
    <PageContainer title="Sobre Mim">
      <AboutContent>
        <p>
          Sou um desenvolvedor apaixonado por tecnologia e inovação. 
          Tenho experiência em várias linguagens de programação e frameworks, 
          incluindo JavaScript, React, Node.js e Python. 
          Estou sempre buscando aprender novas habilidades e melhorar minhas capacidades.
        </p>
        <p>
          Além de programação, gosto de trabalhar em projetos colaborativos e 
          contribuir para a comunidade de código aberto. 
          Acredito que a colaboração é fundamental para o crescimento e a inovação.
        </p>
        <p>
          Quando não estou codificando, você pode me encontrar lendo livros, 
          explorando a natureza ou aprendendo sobre novas tecnologias.
        </p>
      </AboutContent>
    </PageContainer>
  );
};