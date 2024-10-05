// components/header/styles.ts
import styled from 'styled-components';

interface NavProps {
  showMenu: boolean;
}

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #21272f;
  color: white;
  padding: 18px;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5); /* Sombra para dar profundidade */
`;

export const H1 = styled.h1`
  margin: 0;
`;

export const Nav = styled.nav<NavProps>`
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex; /* Exibir como linha por padrão */

    transition: max-height 0.3s ease; /* Transição suave */
    overflow: hidden; /* Esconde itens quando não estão visíveis */
    max-height: ${(props) => (props.showMenu ? '300px' : '0')}; /* Controla a altura do menu */
    
    @media (max-width: 768px) {
      flex-direction: column; /* Alinha verticalmente em telas menores */
      position: absolute; /* Posiciona o menu em relação ao cabeçalho */
      top: 60px; /* Distância do topo */
      right: 0; 
      background-color: #21272f; /* Fundo do menu */
      width: 100%; /* Largura total */
      text-align: center; /* Centraliza o texto */

      li {
        margin: 1rem 0; /* Espaçamento entre os itens */
        transition: transform 0.2s ease; /* Transição suave ao passar o mouse */

        &:hover {
          transform: scale(1.05); /* Efeito de aumento ao passar o mouse */
        }
      }
    }
    
    @media (min-width: 769px) {
      display: flex; /* Exibe os links normalmente em telas maiores */
      max-height: none; /* Garante que a altura não seja limitada */
    }
  }

  li {
    margin: 0 20px;

    &:hover a {
      color: #00bd95; /* Cor ao passar o mouse sobre os links */
      transition: color 0.3s ease; /* Transição suave da cor */
    }
    
    @media (max-width:768px) {
      margin-bottom:.5rem; /* Ajusta margem em telas menores */
    }
    
    a {
      display:flex; /* Para alinhar ícone e texto */
      align-items:center; /* Centraliza verticalmente ícone e texto */
      
      svg {
        margin-right: .3rem; /* Espaçamento entre ícone e texto */
      }
      
      color:white;
      text-decoration:none;

      &:hover {
        text-decoration:none; /* Sublinhado ao passar o mouse */
      }
    }
  }

  button {
    display:none; /* Esconde o botão por padrão */

    @media (max-width:768px) {
      display:block; /* Mostra o botão em telas menores */
      background:none;
      border:none;
      color:white;
      font-size :1.5rem;
      cursor:pointer;
      margin-left :20px;
    }
  }
`;