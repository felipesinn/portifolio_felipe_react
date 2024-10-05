// components/header/Header.tsx
import React, { useState } from 'react';
import { HeaderStyle, H1, Nav } from './styles'; // Importando os estilos
import { Link } from 'react-router-dom';
import { FaHome, FaTools, FaEnvelope, FaProjectDiagram, FaUser } from 'react-icons/fa'; // Importando ícones

// Componente Header
export const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false); // Estado para controlar a exibição do menu

  const toggleMenu = () => {
    setShowMenu((prev) => !prev); // Alterna a visibilidade do menu
  };

  return (
    <HeaderStyle>
      <H1>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Felipe Sinn
        </Link>
      </H1>
      <Nav showMenu={showMenu}>
        <button onClick={toggleMenu}>☰</button> {/* Botão para abrir/fechar o menu */}
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