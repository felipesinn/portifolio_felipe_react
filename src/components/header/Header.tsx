import { useState } from 'react';
import { HeaderStyle, H1, Nav } from "./styles";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <HeaderStyle>
      <H1>Felipe Sinn</H1>
      <Nav showMenu={showMenu}>
        <button onClick={toggleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </button>
        <ul>
          <li>
            <Link to="#sobre">Sobre</Link>
          </li>
          <li>
            <Link to="#habilidades">Habilidades</Link>
          </li>
          <li>
            <Link to="#projetos">Projetos</Link>
          </li>
          <li>
            <Link to="#contato">Contato</Link>
          </li>
        </ul>
      </Nav>
    </HeaderStyle>
  );
};
