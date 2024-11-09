import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #21272f, #2c3e50);
  min-height: 100vh;
  padding: 8em;
  font-family: "Montserrat", sans-serif;

  h1 {
    color: #ffffff;
    margin-bottom: 20px;
    text-align: center;
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s ease;

    &:hover {
      color: #00bd95;
    }
  }

  @media (max-width: 768px) {
    padding: 4em;
    min-height: auto;
    padding: 12em 2em 4em;
  }
`;

interface PageContainerProps {
  title: string;
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ title, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};

export default PageContainer;
