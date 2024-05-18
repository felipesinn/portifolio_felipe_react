import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #21272f;
  color: white;
  min-height: 100vh;
  padding: 1em; 
  font-family: 'Montserrat', sans-serif;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  padding: 0 3rem;
  gap: 18rem;

  @media (max-width: 768px) {
    flex-direction: column; 
    padding: 0 3rem; 
    gap: 3rem;
  }
`;

export const ProfileImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 1rem;
  overflow: hidden;
  clip-path: polygon(
    35% 0%,
    90% 20%,
    90% 80%,
    50% 100%,
    10% 80%,
    10% 22%
  );

  &:before {
    content: "";
    position: absolute;
    top: 50px;
    left: 0px;
    right: 10px;
    bottom: 0px;
    background-color: #008e6f;
    z-index: -1;
  }

  @media (max-width: 768px) {
    max-width: 220px; 
    margin-bottom: 2rem;
  }
`;

export const ProfileImg = styled.img`
  width: 80%;
  height: 50%;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  text-align: center;
  max-width: 600px;
  margin-bottom: 1rem;
  margin-top: -12rem;

  @media (max-width: 768px) {
    margin-top: 0px; 
  }
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 2rem;
  background-color: #008e6f;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding: 5px;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.3em;

  @media (max-width: 768px) {
    font-size: 1.1em; 
  }
`;

export const Bord = styled.div`
  filter: drop-shadow(0px 21px 20px #008e6f); 
`;
export const ContainerIcons = styled.div`
display: flex;
margin-bottom: 0px;

`
export const ButtonCv = styled.button`
  background-color: #008e6f;
  color: white;
  padding: 12px 14px;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00664f;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #00bd95;
  }
`;
