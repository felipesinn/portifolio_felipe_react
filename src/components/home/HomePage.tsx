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
} from "./styles";

export function HomePage() {
  return (
    <HomeContainer id="home">
      <div>
        <Content>
          <TextContainer>
            <Title>Bem-vindo ao meu Portfólio!</Title>
            <Subtitle>
              Explore meus projetos e conheça minha trajetória profissional.
              Aqui, você encontrará uma seleção dos meus trabalhos, além de
              insights sobre minhas habilidades e experiências. Vamos descobrir
              juntos como posso contribuir para o seu próximo projeto.
            </Subtitle>
            <ButtonCv>Download CV</ButtonCv>
          </TextContainer>

          <Bord>
            <ProfileImage>
              <ProfileImg src={profileImage} alt="Foto do perfil" />
            </ProfileImage>
          </Bord>
        </Content>
        <ContainerIcons>
          <SocialIcons />
        </ContainerIcons>
      </div>
    </HomeContainer>
  );
}
