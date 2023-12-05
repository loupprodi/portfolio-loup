import { CardJob } from "../../components/CardJob";
import {
    CardSkills,
  ExperienceContainer,
  ExperienceContent,
  ListExperiences,
} from "./styles";
import { ExperienceJob } from "../../mocks/ExperienceJob";

export const Experience = () => {
  return (
    <ExperienceContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Experiências</h1>
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
                year={job.year}/>
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
