import React from "react";
import PageContainer from "../common/PageContainer";
import {
  AboutContent,
  ProfileImage,
  TextContent,
  MissionVisionValues,
  ValueItem,
} from "./AboutStyles";
import profileImage from "../../img/1731117521484.jpg";

export const AboutPage: React.FC = () => {
  return (
    <PageContainer title="Sobre Mim">
      <AboutContent id="sobre">
        <ProfileImage>
          <img src={profileImage} alt="Perfil" className="profile-image" />
        </ProfileImage>
        <TextContent>
          <h2>Quem Sou Eu</h2>
          <p>
            Minha jornada na TI começou em 2017 como técnico em informática,
            onde desenvolvi uma base sólida de conhecimento técnico.
          </p>
          <p>
            Desde então, venho evoluindo continuamente, concluindo o curso de
            1000 horas de Full-Stack na Growdev e atualmente cursando o terceiro
            semestre de Análise e Desenvolvimento de Sistemas pela Estácio.
          </p>
          <p>
            Atuo como Analista de Redes, combinando experiência prática com
            sólida formação em tecnologia. Meu foco é oferecer soluções
            eficientes e inovadoras que atendam às demandas do mercado e
            contribuam para o sucesso dos projetos em que estou envolvido.
          </p>
        </TextContent>
      </AboutContent>

      <MissionVisionValues>
        <ValueItem>
          <h3>Missão</h3>
          <p>
            Desenvolver soluções web planejadas e personalizadas que sejam
            executadas em desktop e dispositivos móveis.
          </p>
        </ValueItem>

        <ValueItem>
          <h3>Visão</h3>
          <p>
            Tornar-se uma referência reconhecido como desenvolvedor,
            transformando ideias em projetos que facilitam a vida dos usuários
            finais.
          </p>
        </ValueItem>

        <ValueItem>
          <h3>Valores</h3>
          <ul>
            <li>Compromisso</li>
            <li>Integridade</li>
            <li>Confiança</li>
            <li>Respeito</li>
          </ul>
        </ValueItem>
      </MissionVisionValues>
    </PageContainer>
  );
};
