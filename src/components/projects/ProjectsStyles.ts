import styled from "styled-components";

export const CarouselContainer = styled.div`
  background: linear-gradient(135deg, #1c1f24, #343a40);
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  padding: 5px;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const SlideContent = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4em;
  max-width: 400px;

  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 24px;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 15px;
  margin-bottom: 50px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export const SlideText = styled.div`
  h3 {
    font-size: 1.8rem;
    color: #f8f9fa;
    margin-bottom: 10px;
    padding:28px 24px;


    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1rem;
    color: #ced4da;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const ProjectButton = styled.a`
  text-decoration: none;
  padding: 12px 25px;
  border-radius: 5px;
  color: #fff;
  background-color: #008e6f;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 2px #00bd95;

  &:hover {
    background-color: #00664f;
    box-shadow: 0 2px 8px #008e6f;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
