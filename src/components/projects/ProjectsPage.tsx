import PageContainer from '../common/PageContainer'; 
import projetoA from '../../img/pokemon.png'; // Imagem do Projeto A
import projetoB from '../../img/SoundMaster Pro.png';
import {
  ProjectsHighlight,
  ProjectItem
} from "../home/styles";

export const ProjectsPage: React.FC = () => {


  return (
    <PageContainer title="Meus Projetos">
      <ProjectsHighlight id="projetos">
        <h2>Projetos em Destaque</h2>
        <ProjectItem>
          <img src={projetoA} alt="Capa do Projeto A" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
          <h3>Pokémon</h3>
          <p>Este projeto foi feito pra fins de estudo da API do mundo Pokémon</p>
          <a href="https://api-pokemon-react-3.vercel.app" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
        </ProjectItem>
        <ProjectItem>
          <img src={projetoB} alt="Capa do Projeto B" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
          <h3>SoundMaster Pro</h3>
          <p>SoundMaster Pro é gravador de áudio para Rádio desenvolvido em Python, um App Desktop para captura para censuras de Rádios.</p>
          {/* <a href="https://growflix-eta.vercel.app" target="_blank" rel="noopener noreferrer">Ver Projeto</a> */}
        </ProjectItem>
      </ProjectsHighlight>
    </PageContainer>
  );
};