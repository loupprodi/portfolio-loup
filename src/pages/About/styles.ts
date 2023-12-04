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
  align-content: center;
  justify-content: space-evenly;
  align-items: center;

  padding: 1rem 1.4rem;
`;

// export const AboutContent = styled.div`
//   flex: grid;
//   grid-template-columns: 1 3fr;
// `;

export const ImageContent = styled.main`
  margin: 0 1.5rem;
  img {
    width: 350px;
    border-radius: 0.5rem;
    box-shadow: 5px 5px
      ${(props) => {
        return props.theme["gray-900"];
      }};
  }
`;

export const InfoContent = styled.aside`
  margin: 0 1rem;
  p {
    margin-top: 0.8rem;
    line-height: 1.5;
    text-align: justify;
  }
`;

export const TechContent = styled.footer`
  width: 60%;
  align-items: center;
  gap: 1.5rem;

   img{
    width: 145px;
    margin: 3rem;
  }
`;


