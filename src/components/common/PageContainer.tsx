// components/common/PageContainer.tsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column; /* Alinha os itens em coluna */
  justify-content: center; /* Centraliza verticalmente */
  align-items: center; /* Centraliza horizontalmente */
  background: linear-gradient(135deg, #21272f, #2c3e50); /* Mantém o gradiente */
  min-height: 100vh; /* Garante que o container ocupe toda a altura da tela */
  padding: 8em;
  font-family: "Montserrat", sans-serif;



  h1 {
    color: #ffffff; /* Cor do título para contraste */
    margin-bottom: 20px; /* Espaçamento abaixo do título */
    text-align: center; /* Centraliza o título */
    font-size: 2.5rem; /* Tamanho maior para o título */
    text-transform: uppercase; /* Letra maiúscula para um toque moderno */
    letter-spacing: 1px; /* Espaçamento entre letras */
    transition: color 0.3s ease;

    &:hover {
      color: #00bd95; /* Cor ao passar o mouse sobre o título */
    }
  }

  @media (max-width: 768px) {
    padding: 4em; /* Reduz o padding em telas menores */
    min-height: auto; /* Ajusta a altura mínima em telas menores */
    padding: 12em 2em 4em;
  }
`;

interface PageContainerProps {
  title: string;
  children: React.ReactNode;
}

// Componente PageContainer
const PageContainer: React.FC<PageContainerProps> = ({ title, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};

export default PageContainer;