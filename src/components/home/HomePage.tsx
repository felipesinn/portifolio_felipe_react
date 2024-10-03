// components/home/HomePage.tsx
import profileImage from "../../img/felipe1-depositphotos-bgremover.png";
import projetoA from '../../img/pokemon.png'; // Imagem do Projeto A
import projetoB from '../../img/SoundMaster Pro.png'; // Imagem do Projeto B
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

    
      <ProjectsHighlight>
        <h2>Projetos em Destaque</h2>
        <ProjectItem>
          <img src={projetoA} alt="Capa do Projeto A" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
          <h3>Projeto A</h3>
          <p>Descrição breve do Projeto A.</p>
          <a href="https://api-pokemon-react-3.vercel.app" target="_blank" rel="noopener noreferrer">Ver Projeto</a> {/* Link para o projeto */}
        </ProjectItem>
        <ProjectItem>
          <img src={projetoB} alt="Capa do Projeto B" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
          <h3>SoundMaster Pro</h3>
          <p>SoundMaster Pro é gravador de áudio para Rádio desenvolvido em Python um App Desktop para captura para censuras de Rádios.</p>
          {/* <a href="https://growflix-eta.vercel.app" target="_blank" rel="noopener noreferrer">Ver Projeto</a> */}
        </ProjectItem>
      </ProjectsHighlight>
      <ContainerIcons>
        <SocialIcons />
      </ContainerIcons>
    </HomeContainer>
  );
}