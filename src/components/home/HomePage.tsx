import profileImage from "../../img/felipe1-depositphotos-bgremover.png";
import { SocialIcons } from "../../components/iconsLink/SocialIcons";
import {
  Content,
  HomeContainer,
  TextContainer,
  Title,
  Subtitle,
  Bord,
  ProfileImg,
  ProfileImage,
  ContainerIcons,
  ButtonCv,
  ProjectsHighlight,
  ProjectItem, 
} from "./styles";

export function HomePage() {
  return (
    <HomeContainer id="home">
      <Content>
        <TextContainer>
          <Title>Bem-vindo ao meu Portfólio!</Title>
          <Subtitle>
            Explore meus projetos e conheça minha trajetória profissional.
            Aqui, você encontrará uma seleção dos meus trabalhos, além de
            insights sobre minhas habilidades e experiências. Vamos descobrir
            juntos como posso contribuir para o seu próximo projeto.
          </Subtitle>
          <a href="/cv.pdf" download>
            <ButtonCv>Download CV</ButtonCv>
          </a>
        </TextContainer>

        <Bord>
          <ProfileImage>
            <ProfileImg src={profileImage} alt="Foto do perfil" />
          </ProfileImage>
        </Bord>
      </Content>

      {/* Seção de Projetos em Destaque */}
      <ProjectsHighlight>
        <h2>Projetos em Destaque</h2>
        {/* Exibindo os projetos */}
        <ProjectItem>
          <h3>Carregando Projeto A</h3>
          <p>Descrição breve do Projeto A.</p>
          <a href="https://link-do-projeto-a.com" target="_blank" rel="noopener noreferrer">Ver Projeto</a> {/* Link para o projeto */}
        </ProjectItem>
        <ProjectItem>
          <h3>Carregando Projeto B</h3>
          <p>Descrição breve do Projeto B.</p>
          <a href="https://link-do-projeto-b.com" target="_blank" rel="noopener noreferrer">Ver Projeto</a> {/* Link para o projeto */}
        </ProjectItem>
      </ProjectsHighlight>

      <ContainerIcons>
        <SocialIcons />
      </ContainerIcons>
    </HomeContainer>
  );
}