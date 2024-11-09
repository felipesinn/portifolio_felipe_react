// components/projects/ProjectsStyles.ts
import styled from 'styled-components';

export const ProjectsList = styled.ul`
  list-style-type: none;
  padding: 0; 
  margin: 0; 
  display: flex; 
  flex-wrap: wrap; 
  gap: 20px; 
`;

export const ProjectItem = styled.li`
  background-color: #333;
  color: white; 
  border: 2px solid white;
  padding: 15px; 
  border-radius: 8px; 
  width: calc(25% - 20px); 

  h3 {
    margin-top: 0; 
  }

  &:hover {
    background-color: #444;
    transition: background-color 0.3s ease; 
    transform: scale(1.05); 
  }
`;