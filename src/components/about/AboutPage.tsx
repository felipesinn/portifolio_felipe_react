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
            Iniciei minha atuação profissional na área de TI em 2017 como
            técnico em informática, profissão que desenvolvo até os dias atuais.
          </p>
          <p>
            Em 2020, tive meu primeiro contato com a área de programação. Foi
            paixão à primeira vista! Comecei a pesquisar instituições de ensino,
            interessado em fazer uma faculdade e optei pela Estácio, pela
            possibilidade de conciliar o curso com minha rotina de trabalho.
          </p>
          <p>
            Atualmente, estou inteiramente focado em compreender as exigências
            dinâmicas do mercado de tecnologia. Estou participando ativamente do
            Bootcamp online promovido pela Growdev, uma formação Full-Stack que
            está me capacitando de forma abrangente para os desafios do mercado
            de trabalho.
          </p>
          <p>
            Além disso, tenho dedicado meu tempo a projetos paralelos, onde
            coloco em prática os conhecimentos adquiridos. Estou ansioso para
            construir uma carreira sólida e promissora neste campo em constante
            evolução, sempre em busca de oportunidades de aprendizado contínuo e
            crescimento profissional.
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
