import styled from 'styled-components';

export const CarouselContainer = styled.div`
  background: linear-gradient(135deg, #21272f, #2c3e50);
  margin: 0px auto;
  width: 100%;
  max-width: 1200px;
`;

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

export const SlideImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const SlideText = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  p {
    font-size: 1rem;
    margin-bottom: 20px;
  }
  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }
`;

export const NavigationButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #007bff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  
`;

export const ProjectButton = styled.a`
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  color: #21272f;
  background-color: #007bff;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

