import React from 'react';
import { FooterContainer, FooterText, SocialLinks } from './FooterStyles'; // Importando os estilos
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Felipe Sinn. Todos os direitos reservados.</FooterText>
      <SocialLinks>
        <a href="https://github.com/felipesinn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/felipe-sinn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:felipesinn01@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;