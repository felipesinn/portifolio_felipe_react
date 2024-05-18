import styled from "styled-components";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1rem;
    width: 100%; 
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 80px;
  margin-left: -100px;

  @media (max-width: 768px) {
    margin-right: 0;
    justify-content: center;
  }
`;

const Text = styled.p`
  color: #f7f7f7;
  font-size: 1.5rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    display: none;
    justify-items: center;
    
  }
`;

const IconLink = styled.a`
  color: #f7f7f7;
  font-size: 2.5rem;
  transition: color 0.3s;

  &:hover {
    color: #008e6f;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-left: 80px;
    
  }
`;

export const SocialIcons = () => {
  return (
    <IconContainer>
      <TextContainer>
        <Text>Siga-me</Text>
      </TextContainer>
      <IconLink href="https://github.com/felipesinn" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </IconLink>
      <IconLink href="mailto:felipesinn01@gmail.com">
        <FaEnvelope />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/felipe-sinn" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </IconLink>
    </IconContainer>
  );
};
