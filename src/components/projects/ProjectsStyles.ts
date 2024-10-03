// components/projects/ProjectsStyles.ts
import styled from 'styled-components';

export const ProjectsList = styled.ul`
  list-style-type: none; /* Remove os marcadores da lista */
  padding: 0; /* Remove o padding padrão */
  margin: 0; /* Remove a margem padrão */
  display: flex; /* Usando flexbox para disposição horizontal */
  flex-wrap: wrap; /* Permite que os itens quebrem para a próxima linha se não houver espaço */
  gap: 20px; /* Espaçamento entre os itens */
`;

export const ProjectItem = styled.li`
  background-color: #333; /* Cor de fundo dos itens */
  color: white; /* Cor do texto */
  border: 2px solid white;
  padding: 15px; /* Espaçamento interno */
  border-radius: 8px; /* Bordas arredondadas */
  width: calc(25% - 20px); /* Largura dos itens (4 itens por linha com espaçamento) */

  h3 {
    margin-top: 0; /* Remove a margem superior do título */
  }

  &:hover {
    background-color: #444; /* Cor ao passar o mouse */
    transition: background-color 0.3s ease; /* Transição suave */
    transform: scale(1.05); /* Aumenta levemente ao passar o mouse */
  }
`;