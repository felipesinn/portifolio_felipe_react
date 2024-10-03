// components/projects/ProjectsPage.tsx
import React, { useEffect, useState } from 'react';
import PageContainer from '../common/PageContainer'; 
import { ProjectsList, ProjectItem } from './ProjectsStyles'; 

interface Project {
  title: string;
  description: string;
  link: string;
}

export const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/felipesinn/repos');
        if (!response.ok) {
          throw new Error(`Erro ao buscar projetos: ${response.status}`);
        }
        const data = await response.json();
        const fetchedProjects = data.map((item: any) => ({
          title: item.name,
          description: item.description || 'Sem descrição',
          link: item.html_url,
        }));
        setProjects(fetchedProjects);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <PageContainer title="Meus Projetos">
      <ProjectsList>
        {projects.map((project, index) => (
          <ProjectItem key={index} aria-label={`Projeto ${project.title}`}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          </ProjectItem>
        ))}
      </ProjectsList>
    </PageContainer>
  );
};