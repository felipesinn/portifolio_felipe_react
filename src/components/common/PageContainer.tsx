// components/common/PageContainer.tsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column; /* Alinha os itens em coluna */
  justify-content: center; /* Centraliza verticalmente */
  align-items: center; /* Centraliza horizontalmente */
  /* background-color: #21272f; */
  background: linear-gradient(135deg, #21272f, #2c3e50);
  color:#008e6f;
  min-height: 100vh; /* Garante que o container ocupe toda a altura da tela */
  padding: 1em;
  font-family: "Montserrat", sans-serif;
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