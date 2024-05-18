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
  padding: 18px;
  font-family: 'Roboto', sans-serif;
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
  }

  li {
    margin: 0 20px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  button {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    margin-left: 20px;

    @media (max-width: 768px) {
      display: block;
    }
  }

  @media (max-width: 768px) {
    ul {
      display: ${(props) => (props.showMenu ? 'block' : 'none')};
      position: absolute;
      top: 60px;
      right: 0;
      background-color: #21272f;
      padding: 1rem;
      width: 100%;
      text-align: center;

      li {
        margin: 1rem 0;
      }
    }
  }
`;
