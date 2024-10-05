// components/about/AboutStyles.ts
import styled from 'styled-components';

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Alinha os itens nas extremidades */
  padding: 20px;
  background: linear-gradient(135deg, #eaeaea, #f4f4f4); /* Gradiente leve */
  border-radius: 12px; /* Bordas arredondadas */
  box-shadow: 0 8px 20px rgba(0,0,0,0.2); /* Sombra suave */
  transition: transform 0.3s ease; /* Transição suave ao passar o mouse */

  &:hover {
    transform: translateY(-5px); /* Efeito de elevação ao passar o mouse */
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Muda para coluna em telas menores */
    align-items: center; /* Centraliza os itens */
  }
`;

export const ProfileImage = styled.div`
  flex: 1; /* Ocupa um espaço igual */
  
  .profile-image {
    width: 160px; /* Ajuste conforme necessário */
    height: 160px; /* Mantém a altura igual à largura para ser redonda */
    border-radius: 50%; /* Torna a imagem redonda */
    margin-bottom: 20px; /* Espaçamento entre a imagem e o texto */
    box-shadow: 0 4px 15px rgba(0,0,0,0.3); /* Sombra na imagem */
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1); /* Efeito de aumento ao passar o mouse na imagem */
    }
  }
`;

export const TextContent = styled.div`
  flex: 2; /* Ocupa um espaço maior que a imagem */
  padding-left: 20px; /* Espaçamento à esquerda da coluna de texto */
  
  background-color: rgba(255,255,255,0.9); /* Fundo branco com leve transparência */
  border-radius: 12px; /* Bordas arredondadas no cartão de texto */
  padding: 20px; /* Espaçamento interno do cartão de texto */
  
  box-shadow: 0 4px 15px rgba(0,0,0,0.2); /* Sombra suave no cartão de texto */

  h2 {
    text-align: center;
    color: #21272f; /* Cor escura para o título */
    margin-bottom: 20px;
    font-size: 2rem; /* Tamanho maior para o título */
    font-weight: bold; /* Negrito para destacar o título */
    text-transform: uppercase; /* Letra maiúscula para um toque moderno */
    letter-spacing: 1px; /* Espaçamento entre letras */
    transition: color 0.3s ease;

    &:hover {
      color: #00bd95; /* Cor ao passar o mouse sobre o título */
    }
  }

  p {
    color: #333; /* Cor do texto */
    line-height: 1.6; /* Espaçamento entre linhas */
    margin-bottom: 15px; /* Espaçamento entre parágrafos */
    font-size: 1.1rem; /* Tamanho da fonte */

    @media (max-width:768px) {
      font-size:1rem; /* Ajuste do tamanho da fonte em telas menores */
    }
    
    &:first-of-type {
      font-weight:bold; /* Negrito para o primeiro parágrafo */
      color:#00bd95; /* Cor diferenciada para destaque */
    }
}
`;