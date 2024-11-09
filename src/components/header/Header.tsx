import React, { useState } from 'react';
import { HeaderStyle, H1, Nav } from './styles'; 
import { Link } from 'react-router-dom';
import { FaHome, FaTools, FaEnvelope, FaProjectDiagram, FaUser } from 'react-icons/fa'; 

export const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false); 

  const toggleMenu = () => {
    setShowMenu((prev) => !prev); 
  };

  const handleLinkClick = () => {
    setShowMenu(false); // Fecha o menu ao clicar em um link
  };

  return (
    <HeaderStyle>
      <H1>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Felipe Sinn
        </Link>
      </H1>
      <Nav showMenu={showMenu}>
        <button onClick={toggleMenu}>☰</button> 
        <ul>
          <li><Link to="/" onClick={handleLinkClick}><FaHome /> Home</Link></li>
          <li><Link to="/habilidades" onClick={handleLinkClick}><FaTools /> Habilidades</Link></li>
          <li><Link to="/contato" onClick={handleLinkClick}><FaEnvelope /> Contato</Link></li>
          <li><Link to="/projetos" onClick={handleLinkClick}><FaProjectDiagram /> Projetos</Link></li>
          <li><Link to="/sobre" onClick={handleLinkClick}><FaUser /> Sobre</Link></li>
        </ul>
      </Nav>
    </HeaderStyle>
  );
};