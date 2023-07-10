import { motion } from "framer-motion";
import { styled } from "styled-components";

interface AboutContainerMotionProps {
  initial: object;
  animate: object;
  exit: object;
}
export const AboutContainer = styled(motion.main)<AboutContainerMotionProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;

  padding: 0.2rem 1.8rem;
`;
