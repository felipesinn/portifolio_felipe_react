import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #21272f; 
  color: white; 
  padding: 20px; 
  text-align: center;
`;

export const FooterText = styled.p`
  margin: 0; 
`;

export const SocialLinks = styled.div`
  margin-top: 10px; 
  
  a {
    color: white; 
    margin: 0 10px;
    font-size: 1.5rem; 
    &:hover {
      color: #00bd95; 
      transition: color 0.3s ease; 
    }
  }
`;