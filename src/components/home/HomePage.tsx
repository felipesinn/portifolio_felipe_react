// components/home/HomePage.tsx
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

      <ContainerIcons>
        {/* <SocialIcons /> */}
      </ContainerIcons>
    </HomeContainer>
  );
}