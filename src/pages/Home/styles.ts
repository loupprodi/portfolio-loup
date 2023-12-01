import { motion } from "framer-motion";
import { styled } from "styled-components";

interface HomeContainerMotionProps {
  initial: object;
  animate: object;
  exit: object;
}

export const HomeContainer = styled(motion.main)<HomeContainerMotionProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;

  padding: 0.2rem 1.8rem;
  strong{
    color: ${(props)=> props.theme['red']};
    font-size: 1.8rem;
  }
  p {
    text-align: center;
    margin: 0.8rem 0;
  }
`;

export const LottieContainer = styled.div`
  max-width: 1200px;
  width: min(500px, 95vw);
  border-radius: 0.5rem;
  box-shadow: 5px 6px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 4px
    ${(props) => {
      return props.theme["indigo-800"];
    }};
`;
