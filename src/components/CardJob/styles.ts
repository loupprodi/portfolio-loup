import { motion } from "framer-motion";
import { styled } from "styled-components";

export const CardContainer = styled.section`
  width: 30rem;
  height: 25rem;
  background-color: ${(props)=> props.theme['purple']};
  color:${(props) => props.theme['white']};
  border-radius: 8px;
  box-shadow: 5px 5px 10px #22222270;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: ${(props) => props.theme["white"]};
    font-weight:bolder;
  }
  h2 {
    margin-top:0.8rem;
    color: ${(props) => props.theme['soft-white']}
  }

  p {
    /* color: ${(props) => props.theme['white']}; */
    margin-top:0.5rem;
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

export const CardIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  font-size: 1.5rem;
  `;

  export const CardUl = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap:  wrap;
    li{
      background-color: ${(props)=> props.theme['red']};
      padding: 0.2rem;
      font-size:0.8rem;
      font-weight:'bold';
      border-radius:4px;
      color: black;
      margin: 0.6rem;
      list-style:none;
    }
  `