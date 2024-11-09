// components/skills/SkillsPageStyles.ts
import styled from 'styled-components';

export const SkillsContainer = styled.div`
  background-color: #21272f; /* Cor de fundo da caixa */
  border-radius: 8px; /* Bordas arredondadas */
  padding: 20px; /* Espaçamento interno */
  margin: 100px 0; /* Margem superior e inferior */

  @media (max-width: 768px) {
    margin: 50px 0; /* Reduzir margem em telas menores */
    padding: 15px; /* Ajustar o padding em telas menores */
  }

  h2 {
    color: #fff; 
    text-align: center; /* Centraliza o título */
    margin-bottom: 20px; /* Espaçamento abaixo do título */
    font-size: 2rem; /* Tamanho do título */
    text-transform: uppercase; /* Letra maiúscula para um toque moderno */
    letter-spacing: 1px; /* Espaçamento entre letras */
  }
`;

export const SkillsList = styled.ul`
  list-style-type: none; /* Remove os marcadores da lista */
  padding: 0; /* Remove o padding padrão */
  margin: 0; /* Remove a margem padrão */
  
  display: flex; /* Usando flexbox para disposição horizontal */
  flex-wrap: wrap; /* Permite que os itens quebrem para a próxima linha se não houver espaço */
  
  gap: 28px; /* Espaçamento entre os itens */

  @media (max-width: 768px) {
    gap: 15px; /* Reduzir o espaçamento entre itens em telas menores */
    justify-content: center; /* Centraliza os itens em telas menores */
    width: 100%; /* Garante que a lista ocupe toda a largura disponível */
    margin-bottom: 20px; /* Adiciona espaço abaixo da lista */
   }
`;

export const SkillItem = styled.li`
   flex-basis: calc(25% - .5rem); // Ajusta a largura dos itens

   @media (max-width:768px) {
     flex-basis: calc(50% - .5rem); // Ajusta a largura dos itens em telas menores
   }
`;

export const Card = styled.div`
   background-color: #3c4753; /* Cor de fundo dos cartões */
   color: white; /* Cor do texto */
   padding: 15px; /* Espaçamento interno */
   border-radius: 8px; /* Bordas arredondadas */
   text-align: center; /* Centraliza o texto */

   &:hover {
     background-color: #008e6f; /* Cor ao passar o mouse */
     transition: background-color .3s ease, transform .2s ease; /* Transição suave */
     transform: scale(1.05); /* Aumenta levemente ao passar o mouse */
   }
`;


