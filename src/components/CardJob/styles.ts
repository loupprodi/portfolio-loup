import { motion } from "framer-motion";
import { styled } from "styled-components";

export const CardContainer = styled.section`
  width: 30rem;
  height: 25rem;
  background-color: ${(props)=> props.theme['indigo-800']};
  color: var(--gray);
  border-radius: 8px;
  box-shadow: 5px 5px 10px #22222270;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: ${(props) => props.theme["primary"]};
    font-weight:bolder;
  }
  h2 {
    margin-top:0.8rem;
    color: ${(props) => props.theme['soft-white']}
  }

  p {
    color: #955;
    text-align:justify;
  }
`;

interface CardFooterMotionProps {
  initial: object;
  whileInView: object;
  animate?: object;
  exit?: object;
}

export const CardFooter = styled(motion.footer)<CardFooterMotionProps>`
  margin-top: 0.8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// export const CardSkills = styled.span`
//   background-color: ${(props)=> props.theme['soft-white']};
//   padding: 0.5rem;
//   color: black
// `

export const CardIcons = styled.div`
  display: flex;
  gap: 10px;
  color: ${(props)=> props.theme['red']};
  font-size: 1.5rem;
`;