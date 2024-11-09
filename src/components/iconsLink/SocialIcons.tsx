// components/iconsLink/SocialIcons.tsx
import styled from "styled-components";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const IconContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 20px; 
  top: 78%; 
  transform: translateY(-50%); 
  margin-top: 2rem;

  @media (max-width: 768px) {
    left: 10px; 
    top: auto; 
    bottom: 20px; 
    transform: none; 
    flex-direction: row; 
    gap: 1rem; 
    width: auto; 
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem; 

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    justify-content: center;
  }
`;

const Text = styled.p`
  color: #f7f7f7;
  font-size: 1.5rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;    
    display: flex; 
    justify-items: center;    
  }
`;

const IconLink = styled.a`
  color: #f7f7f7;
  font-size: 2.2rem;
  transition: color 0.3s;

  margin-bottom: 1rem; 

   &:hover {
    color: #008e6f;
   }

   @media (max-width: 768px) {
    font-size: calc(2rem + (2vw)); 
   }
`;

export const SocialIcons = () => {
  return (
    <IconContainer>
      <TextContainer>
      </TextContainer>
      <IconLink href="https://github.com/felipesinn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </IconLink>
      <IconLink href="mailto:felipesinn01@gmail.com" aria-label="Email">
        <FaEnvelope />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/felipe-sinn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </IconLink>
      <Text>Siga-me</Text>
    </IconContainer>
  );
}