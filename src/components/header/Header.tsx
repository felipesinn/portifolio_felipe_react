import React, { useState } from "react";
import { HeaderStyle, H1, Nav } from "./styles";
import { Link as ScrollLink } from "react-scroll";
import { FaHome, FaTools, FaEnvelope, FaProjectDiagram, FaUser } from "react-icons/fa";

export const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <HeaderStyle>
      <H1>
        <ScrollLink to="home" smooth={true} duration={400} offset={-200}>
          Felipe Sinn
        </ScrollLink>
      </H1>
      <Nav showMenu={showMenu}>
        <button onClick={toggleMenu}>☰</button>
        <ul>
          <li>
            <ScrollLink to="home" smooth={true} duration={400} offset={-200} onClick={toggleMenu}>
              <FaHome /> Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="habilidades" smooth={true} duration={400} offset={-280} onClick={toggleMenu}>
              <FaTools /> Habilidades
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contato" smooth={true} duration={400} offset={-180} onClick={toggleMenu}>
              <FaEnvelope /> Contato
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projetos" smooth={true} duration={400} offset={-180} onClick={toggleMenu}>
              <FaProjectDiagram /> Projetos
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="sobre" smooth={true} duration={400} offset={-190} onClick={toggleMenu}>
              <FaUser /> Sobre
            </ScrollLink>
          </li>
        </ul>
      </Nav>
    </HeaderStyle>
  );
};
