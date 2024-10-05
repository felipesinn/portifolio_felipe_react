// components/common/FooterStyles.ts
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #21272f; /* Cor de fundo do footer */
  color: white; /* Cor do texto */
  padding: 20px; /* Espaçamento interno */
  text-align: center; /* Centraliza o texto */
`;

export const FooterText = styled.p`
  margin: 0; /* Remove margens padrão */
`;

export const SocialLinks = styled.div`
  margin-top: 10px; /* Espaçamento acima dos links sociais */
  
  a {
    color: white; /* Cor dos ícones */
    margin: 0 10px; /* Espaçamento entre os ícones */
    font-size: 1.5rem; /* Tamanho dos ícones */

    &:hover {
      color: #00bd95; /* Cor ao passar o mouse sobre os ícones */
      transition: color 0.3s ease; /* Transição suave da cor */
    }
  }
`;