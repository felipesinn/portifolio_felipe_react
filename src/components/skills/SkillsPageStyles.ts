// components/skills/SkillsPageStyles.ts
import styled from 'styled-components';

export const SkillsContainer = styled.div`
  background-color: #21272f; /* Cor de fundo da caixa */
  border: 2px solid white; /* Borda branca */
  border-radius: 8px; /* Bordas arredondadas */
  padding: 20px; /* Espaçamento interno */
  margin: 100px 0; /* Margem superior e inferior */
`;
export const SkillsList = styled.ul`
  list-style-type: none; /* Remove os marcadores da lista */
  padding: 0; /* Remove o padding padrão */
  margin: 0; /* Remove a margem padrão */
  display: flex; /* Usando flexbox para disposição horizontal */
  flex-wrap: wrap; /* Permite que os itens quebrem para a próxima linha se não houver espaço */
  gap: 28px; /* Espaçamento entre os itens */
`;

export const SkillItem = styled.li`
  background-color: #333; /* Cor de fundo dos itens */
  color: white; /* Cor do texto */
  padding: 15px; /* Espaçamento interno */
  border-radius: 8px; /* Bordas arredondadas */
  text-align: center; /* Centraliza o texto */

  &:hover {
    background-color: #444; /* Cor ao passar o mouse */
    transition: background-color 0.3s ease, transform 0.2s ease; /* Transição suave */
    transform: scale(1.05); /* Aumenta levemente ao passar o mouse */
  }
`;

export const Title = styled.h1`
  text-align: center; /* Centraliza o título */
  color: white; /* Cor do título */
`;