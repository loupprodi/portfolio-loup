import { motion } from "framer-motion";
import { styled } from "styled-components";

interface ExperienceContainerMotionProps {
  initial: object;
  animate: object;
  exit: object;
}

export const ExperienceContainer = styled(motion.main)<ExperienceContainerMotionProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;

  padding: 0.2rem 1.2rem;
`;

export const ExperienceContent = styled.section`
  text-align:center;
`
export const ListExperiences = styled.section`
 width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-block: 1rem;
`
