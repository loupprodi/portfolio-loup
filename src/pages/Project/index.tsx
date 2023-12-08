import { NavLink } from "react-router-dom";
import { Card } from "../../components/Card";
import { ProjectContainer, ProjectContent, ListProjects } from "./styles";
import { ProjectsProgram } from "../../mocks/ProjectsProgram";

export const Project = () => {
  return (
    <ProjectContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Projetos & <NavLink to="/experience" title="experience">
            Experiências
          </NavLink></h1>
      <ProjectContent>
        <ListProjects>
       { ProjectsProgram.length > 0 ?
       ProjectsProgram.map((project)=>{
        return(
          <Card 
          key={project.id}
          category={project.category}
          description={project.description}
          link={project.link}
          name={project.name}
          portfolio={project.portfolio}
          tech={project.techs}
          /> 
        )}): 
        (
        <h1>No content</h1>
        )
       }  
        </ListProjects>
      </ProjectContent>
    </ProjectContainer>
  );
};
