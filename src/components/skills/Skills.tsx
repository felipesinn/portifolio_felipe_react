// components/skills/SkillsPage.tsx
import React from 'react';
import { FaJsSquare, FaReact, FaNodeJs, FaCss3Alt, FaPython, FaDatabase, FaDocker } from 'react-icons/fa'; // Importando ícones
import PageContainer from '../common/PageContainer'; 
import { SkillsList, SkillItem, SkillsContainer } from './SkillsPageStyles'; 

// Definindo um array de habilidades
const skills = [
  { name: 'JavaScript', icon: <FaJsSquare size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'CSS', icon: <FaCss3Alt size={40} /> },
  { name: 'Python', icon: <FaPython size={40} /> }, 
  { name: 'PostgreSQL', icon: <FaDatabase size={40} /> }, 
  { name: 'Docker', icon: <FaDocker size={40} /> }, // Nova habilidade
];

export const SkillsPage: React.FC = () => {
  return (
    <PageContainer title="Minhas Habilidades">
      <SkillsContainer>
        <SkillsList>
          {skills.map((skill, index) => (
            <SkillItem key={index}>
              {skill.icon}
              <div>{skill.name}</div>
            </SkillItem>
          ))}
        </SkillsList>
      </SkillsContainer>
    </PageContainer>
  );
};