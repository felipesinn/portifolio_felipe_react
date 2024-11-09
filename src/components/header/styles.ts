import styled from 'styled-components';

interface NavProps {
  showMenu: boolean;
}

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #21272f;
  color: white;
  padding: 14px;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5); 
  position: fixed; 
  top: 0;
  left: 0; 
  right: 0; 
  z-index: 1000; 
`;

export const H1 = styled.h1`
  margin: 0;
`;

export const Nav = styled.nav<NavProps>`
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex; 

    transition: max-height 0.3s ease; 
    overflow: hidden; 
    max-height: ${(props) => (props.showMenu ? '300px' : '0')}; 
    
    @media (max-width: 768px) {
      flex-direction: column; 
      position: absolute; 
      top: 60px; 
      right: 0; 
      background-color: #21272f; 
      width: 100%; 
      text-align: center; 

      li {
        margin: 1rem 0; 
        transition: transform 0.2s ease; 

        &:hover {
          transform: scale(1.05); 
        }
      }
    }
    
    @media (min-width: 769px) {
      display: flex; 
      max-height: none; 
    }
  }

  li {
    margin: 0 20px;

    &:hover a {
      color: #00bd95; 
      transition: color 0.3s ease; 
    }
    
    @media (max-width:768px) {
      margin-bottom:.5rem; 
    }
    
    a {
      display:flex; 
      align-items:center; 
      
      svg {
        margin-right: .3rem; 
      }
      
      color:white;
      text-decoration:none;

      &:hover {
        text-decoration:none; 
      }
    }
  }

  button {
    display:none; 

    @media (max-width:768px) {
      display:block; 
      background:none;
      border:none;
      color:white;
      font-size :1.5rem;
      cursor:pointer;
      margin-left :20px;
    }
  }
`;