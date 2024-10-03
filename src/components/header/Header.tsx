// components/header/Header.tsx
import React, { useState } from 'react';
import { HeaderStyle, H1, Nav } from './styles'; // Importando os estilos
import { Link } from 'react-router-dom';

// Componente Header
export const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false); // Estado para controlar a exibição do menu

  const toggleMenu = () => {
    setShowMenu((prev) => !prev); // Alterna a visibilidade do menu
  };

  return (
    <HeaderStyle>
      <H1>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> {/* Link para a página inicial */}
          Felipe Sinn
        </Link>
      </H1>
      <Nav showMenu={showMenu}>
        <button onClick={toggleMenu}>☰</button> {/* Botão para abrir/fechar o menu */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/habilidades">Habilidades</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/projetos">Projetos</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>
      </Nav>
    </HeaderStyle>
  );
};