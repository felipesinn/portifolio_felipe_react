// components/home/styles.ts
import styled, { createGlobalStyle } from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column; /* Alinhamento vertical */
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #21272f, #2c3e50);
  color: white;
  min-height: 100vh;
  padding: 8em; 
  font-family: 'Montserrat', sans-serif;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  padding: 0 3rem;
  gap: 5rem; /* Espaçamento entre os elementos */

  @media (max-width: 768px) {
    flex-direction: column; 
    padding: 0; 
    gap: 3rem;
    margin-top: -5rem; /* Ajuste para melhor visualização em dispositivos móveis */
  }
`;

export const ProfileImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 1rem;
  overflow: hidden;
  clip-path: polygon(
    36% -18%,
    90% 20%,
    90% 80%,
    50% 100%,
    10% 80%,
    10% 22%
  );

  &:before {
    content: "";
    position: absolute;
    top: 50px;
    left: 0px;
    right: 10px;
    bottom: 0px;
    background-color: #008e6f;
    z-index: -1;
  }

  @media (max-width: 768px) {
    max-width: 220px; 
    margin-bottom: 2rem;
  }
`;

export const ProfileImg = styled.img`
  width: 80%;
  height: 50%;
  object-fit: cover;
`;


export const TextContainer = styled.div`
   text-align:center;
   max-width:600px;

   @media (max-width:768px) {
     margin-top:-2rem; 
   }
`;

export const Title = styled.h1`
   font-size:3.2rem;
   margin-bottom:.5rem;

   background-color:#008e6f; 
   -webkit-background-clip:text; 
   background-clip:text; 
   color:transparent;

   @media (max-width :768px) {
     font-size :2.5rem; 
     padding :5px; 
   }
`;

export const Subtitle = styled.p`
   font-size :1.3em;

   @media (max-width :768px) {
     font-size :1.1em; 
   }
`;

export const Bord = styled.div`
   filter : drop-shadow(0px21px20px#008e6f); 
`;

export const ContainerIcons = styled.div`
display:flex;
margin-bottom :0px;

`;

export const ButtonCv = styled.button`
  background-color: #008e6f;
  color: white;
  padding: 12px 14px;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00664f;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #00bd95;
  }
`;
export const ProjectsHighlight = styled.section`
  margin-top: 100px; 
  min-height: 50vh;
  width: 100%; /* Define a largura total */
  max-width: 680px; /* Ajuste o valor conforme necessário para a largura desejada */
  padding: 20px; 
  border: 2px solid white;
  background-color: rgba(255,255,255,0.1); /* Fundo sutil */
  border-radius: 8px; 


h2 {
 color:#008e6f; 
 text-align:center; 
 margin-bottom :20px; 
 font-size :2rem;
 animation:fadInDown1s ease-in-out forwards ;
}
`;

export const ProjectItem = styled.div`
 background-color :rgba(255,255,255,0.2); /* Fundo dos itens */
 border: 2px solid white;
 margin-bottom :15px; /* Espaçamento entre os itens */
 padding :18px ; /* Espaçamento interno */
 border-radius :4px ; /* Bordas arredondadas */

 transition :transform .3s ease ; /* Transição suave */

 &:hover {
 transform :scale(1.05); 
 }

 h3 {
 color:#fff ; /* Cor do título do projeto */
 margin-bottom :5px ;
 }

 p {
 color:#ccc ; /* Cor da descrição */
 }

 a {
    color: #008e6f; /* Cor do link */
    font-size :1.2rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline; /* Sublinhado ao passar o mouse */
    }
 }
`;

// Adicione animações usando keyframes se necessário
const fadeInDown = `
@keyframes fadeInDown {
 from {
 opacity :0 ;
 transform :translateY(-20px);
 }
 to {
 opacity :1 ;
 transform :translateY(0);
 }
}
`;

export const GlobalStyle = createGlobalStyle`
 ${fadeInDown}
`;