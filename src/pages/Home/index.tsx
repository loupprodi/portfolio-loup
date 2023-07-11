import { useEffect } from "react";
import { HomeContainer, LottieContainer } from "./styles";
import Lottie from "react-lottie-player";

import ProgramingAnimationJson from "../../assets/LottieJson/programingComputer.json";

export const Home = () => {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LottieContainer>
        <Lottie animationData={ProgramingAnimationJson} loop play />
      </LottieContainer>
      <p>Luiz Prosdoskimi</p>
      <p>
        desenvolvedor fullstack | React | JavaScript | TypeScript | Vue.Js |
        NodeJS | PHP | Laravel | Dart Flutter | Spring Boot Application
      </p>
    </HomeContainer>
  );
};
