import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const ProjectCard = styled.div`
  width: 340px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
  h3 {
    margin-top: 10px;
    color: #00BD95;
    font-size: 1.5rem;
  }
  p {
    margin-top: 10px;
    font-size: 1rem;
    color: #555;
  }
`;

export const CarouselButtons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  button, a {
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: #00BD95;
    color: white;
    text-decoration: none;
    transition: background 0.3s ease;
    font-size: 1rem;
    font-weight: bold;
  }
  button:hover, a:hover {
    background-color: #008f6e;
  }
`;

export const CarouselNavigation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    background: #00BD95;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s;
  }

  button:hover {
    background: #008f6e;
  }

  button + button {
    margin-left: 15px;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 800px; /* Tamanho fixo do modal */
  max-height: 90vh; /* Garante que não exceda a altura da tela */
  overflow-y: auto;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #555;
  &:hover {
    color: #000;
  }
`;
