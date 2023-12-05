import { Card } from "../../components/Card";
import { ProjectContainer, ProjectContent, ListProjects } from "./styles";

export const Project = () => {
  return (
    <ProjectContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Projetos</h1>
      <ProjectContent>
        <ListProjects>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ListProjects>
      </ProjectContent>
    </ProjectContainer>
  );
};
