// components/skills/SkillsPageStyles.ts
import styled from 'styled-components';

export const SkillsContainer = styled.div`
  background-color: #21272f; /* Cor de fundo da caixa */
  border: 2px solid white; /* Borda branca */
  border-radius: 8px; /* Bordas arredondadas */
  padding: 20px; /* Espaçamento interno */
  margin: 100px 0; /* Margem superior e inferior */

  @media (max-width: 768px) {
    margin: 50px 0; /* Reduzir margem em telas menores */
    padding: 15px; /* Ajustar o padding em telas menores */
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
  }
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

export const InterpersonalSkillsContainer = styled.div`
  margin-top: 40px;

  h2 {
    text-align: center;
    color: #008e6f; /* Cor do título */
    margin-bottom: 20px;
    font-size: 1.8rem;
    
    @media (max-width:768px) {
      font-size:1.5rem; /* Ajuste do tamanho da fonte em telas menores */
    }
  }

  ul {
    list-style-type: none; /* Remove marcadores da lista */
    padding-left: 0; /* Remove preenchimento padrão da lista */

    li {
      color: #ccc; /* Cor do texto */
      font-size:1.1rem;

      @media (max-width :768px) {
        font-size :1rem; /* Reduzir tamanho da fonte em telas menores */
      }
    }
  }
`;

export const CertificationContainer = styled.div`
  margin-top: 40px;

  h2 {
    text-align: center;
    color: #008e6f; /* Cor do título */
    margin-bottom: 20px;
    font-size: 1.8rem;

    @media (max-width :768px) {
      font-size :1.5rem; /* Ajuste do tamanho da fonte em telas menores */
    }
  }

  ul {
    list-style-type: none; /* Remove marcadores da lista */

    li {
      color: #ccc; /* Cor do texto */
      font-size :1.1rem;

      a {
        color:#008e6f; /* Cor do link */

        &:hover {
          text-decoration: underline; /* Sublinhado ao passar o mouse */
        }
      }

      @media (max-width :768px) {
        font-size :1rem; /* Reduzir tamanho da fonte em telas menores */
      }
    }
   }
`;