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
  padding: 0.2rem 1.2rem;

  a{
    color: ${(props)=> props.theme['soft-white']};
    text-decoration: none;
    color: ${(props) => props.theme["gray-100"]};
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
  text-align:center; 
  h1{
    margin-top:2rem;
  }
`
export const ListProjects = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow: auto;
  gap: 30px;
  padding: 4rem;
  gap: 1.5rem;
  margin-block: 1rem;
`
