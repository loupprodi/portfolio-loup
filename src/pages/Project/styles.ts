import { motion } from "framer-motion";
import { styled } from "styled-components";

interface ProjectContainerMotionProps {
  initial: object;
  animate: object;
  exit: object;
}

export const ProjectContainer = styled(motion.main)<ProjectContainerMotionProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  overflow:auto;
  padding: 0.2rem 1.2rem;

  h1{
    margin-top:2rem;
    margin-bottom:1.6rem;
  }

  a{
    color: ${(props)=> props.theme['soft-white']};
    text-decoration: none;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme["green-500"]};
    }
    &:hover::after {
      content:" }"
    }

    &:hover::before {
      content:"{ "
    }

    &:active {
      color: ${(props) => props.theme["indigo-700"]};
    }
  }
`;

export const ProjectContent = styled.section`
  overflow:auto;
  text-align:center; 
`
export const ListProjects = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
  padding: 4rem;
  margin-block: 1rem;
`
