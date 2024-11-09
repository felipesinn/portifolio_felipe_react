// components/skills/SkillsPage.tsx
import React from 'react';
import { FaJsSquare, FaReact, FaNodeJs, FaCss3Alt, FaPython, FaDatabase, FaDocker, FaAngular } from 'react-icons/fa'; // Importando ícones
import PageContainer from '../common/PageContainer'; 
import { SkillsList, SkillItem, SkillsContainer, Card } from './SkillsPageStyles'; 

const skills = [
  { name: 'JavaScript', icon: <FaJsSquare size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Angular', icon: <FaAngular size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'CSS', icon: <FaCss3Alt size={40} /> },
  { name: 'Python', icon: <FaPython size={40} /> }, 
  { name: 'PostgreSQL', icon: <FaDatabase size={40} /> }, 
  { name: 'Docker', icon: <FaDocker size={40} /> },
];


export const SkillsPage: React.FC = () => {
  return (
    <PageContainer title="Minhas Habilidades">
      <SkillsContainer>
        <h2>Habilidades Técnicas</h2>
        <SkillsList>
          {skills.map((skill, index) => (
            <SkillItem key={index}>
              <Card>
                {skill.icon}
                <div>{skill.name}</div>
              </Card>
            </SkillItem>
          ))}
        </SkillsList>
      </SkillsContainer>
    </PageContainer>
  );
};