import profileImage from "../../img/felipe1-depositphotos-bgremover.png";
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
} from "./styles";

export function HomePage() {
  return (
    <HomeContainer id="home">
      <Content>
        <TextContainer>
          <Title>Bem-vindo ao meu Portfólio!</Title>
          <Subtitle>
            Sou Analista de Redes e desenvolvedor Fullstack com experiência em
            TypeScript, NodeJS e ReactJS. Especialista em soluções para
            telecomunicações, com foco em eficiência,
            inovação e resultados.
          </Subtitle>
          <a href="Currículo.pdf" download>
            <ButtonCv>Download CV</ButtonCv>
          </a>
        </TextContainer>

        <Bord>
          <ProfileImage>
            <ProfileImg src={profileImage} alt="Foto do perfil" />
          </ProfileImage>
        </Bord>
      </Content>

      <ContainerIcons>{/* <SocialIcons /> */}</ContainerIcons>
    </HomeContainer>
  );
}
