// components/skills/SkillsPage.tsx
import React from 'react';
import { FaJsSquare, FaReact, FaNodeJs, FaCss3Alt, FaPython, FaDatabase, FaDocker } from 'react-icons/fa'; // Importando ícones
import PageContainer from '../common/PageContainer'; 
import { SkillsList, SkillItem, SkillsContainer, InterpersonalSkillsContainer, CertificationContainer } from './SkillsPageStyles'; 

// Definindo um array de habilidades técnicas
const skills = [
  { name: 'JavaScript', icon: <FaJsSquare size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'CSS', icon: <FaCss3Alt size={40} /> },
  { name: 'Python', icon: <FaPython size={40} /> }, 
  { name: 'PostgreSQL', icon: <FaDatabase size={40} /> }, 
  { name: 'Docker', icon: <FaDocker size={40} /> },
];

// Definindo um array de habilidades interpessoais
const interpersonalSkills = [
  'Comunicação: Capacidade de explicar conceitos técnicos a não-técnicos.',
  'Trabalho em Equipe: Experiência em colaborar com outros desenvolvedores, designers e partes interessadas.',
  'Resolução de Problemas: Demonstração de como você abordou desafios técnicos em projetos anteriores.',
  'Gerenciamento de Tempo: Capacidade de priorizar tarefas e cumprir prazos.',
];

// Definindo um array de certificações e cursos
const certifications = [
  { name: 'Certificação AWS', link: 'https://aws.amazon.com/certification/' },
  { name: 'Curso de Desenvolvimento Web - Udemy', link: 'https://www.udemy.com/course/development-web/' },
];

export const SkillsPage: React.FC = () => {
  return (
    <PageContainer title="Minhas Habilidades">
      <SkillsContainer>
        <h2>Habilidades Técnicas</h2>
        <SkillsList>
          {skills.map((skill, index) => (
            <SkillItem key={index}>
              {skill.icon}
              <div>{skill.name}</div>
            </SkillItem>
          ))}
        </SkillsList>

        {/* Seção de Habilidades Interpessoais */}
        <InterpersonalSkillsContainer>
          <h2>Habilidades Interpessoais</h2>
          <ul>
            {interpersonalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </InterpersonalSkillsContainer>

        {/* Seção de Certificações e Cursos */}
        <CertificationContainer>
          <h2>Certificações e Cursos</h2>
          <ul>
            {certifications.map((certification, index) => (
              <li key={index}>
                <a href={certification.link} target="_blank" rel="noopener noreferrer">
                  {certification.name}
                </a>
              </li>
            ))}
          </ul>
        </CertificationContainer>
      </SkillsContainer>
    </PageContainer>
  );
};