import { CardJob } from "../../components/CardJob";
import {
  ExperienceContainer,
  ExperienceContent,
  ListExperiences,
} from "./styles";
import { ExperienceJob } from "../../mocks/ExperienceJob";
import { NavLink } from "react-router-dom";

export const Experience = () => {
  return (
    <ExperienceContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1><NavLink to="/project" title="projects">
            Projetos
          </NavLink> & Experiências</h1>
      <ExperienceContent>
        <ListExperiences>
          {ExperienceJob.length > 0 ? (
            ExperienceJob.map((job) => {
              return (
                <CardJob 
                key={job.id} 
                company={job.company} 
                description={job.description} 
                position={job.position} 
                year={job.year}
                tech={job.tech}
                />
              );
            })
          ) : (
            <h2>No Content</h2>
          )}
        </ListExperiences>
      </ExperienceContent>
    </ExperienceContainer>
  );
};
