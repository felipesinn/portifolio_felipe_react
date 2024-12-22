import React from 'react';
import { FaNodeJs} from 'react-icons/fa'; 
import PageContainer from '../common/PageContainer'; 
import { SkillsList, SkillItem, SkillsContainer, Card } from './SkillsPageStyles'; 
import { SiTypescript, SiMikrotik, SiJavascript, SiReact, SiCss3, SiPostgresql, SiDocker } from 'react-icons/si';


const skills = [
  { name: 'JavaScript', icon: <SiJavascript size={40} /> },
  { name: 'Typescript', icon: <SiTypescript size={40} /> },
  { name: 'React', icon: <SiReact size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'CSS', icon: <SiCss3 size={40} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} /> }, 
  { name: 'Docker', icon: <SiDocker size={40} /> },
  { name: 'Mikrotik', icon: <SiMikrotik size={40} /> }
];


export const SkillsPage: React.FC = () => {
  return (
    <PageContainer title="Minhas Habilidades">
      <SkillsContainer id="habilidades">
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