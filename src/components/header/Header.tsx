import React, { useState } from 'react';
import { HeaderStyle, H1, Nav } from './styles'; 
import { Link } from 'react-router-dom';
import { FaHome, FaTools, FaEnvelope, FaProjectDiagram, FaUser } from 'react-icons/fa'; 


export const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false); 

  const toggleMenu = () => {
    setShowMenu((prev) => !prev); 
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
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/habilidades"><FaTools /> Habilidades</Link></li>
          <li><Link to="/contato"><FaEnvelope /> Contato</Link></li>
          <li><Link to="/projetos"><FaProjectDiagram /> Projetos</Link></li>
          <li><Link to="/sobre"><FaUser /> Sobre</Link></li>
        </ul>
      </Nav>
    </HeaderStyle>
  );
};