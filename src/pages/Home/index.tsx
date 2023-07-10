import { HomeContainer } from "./styles";

export const Home = () => {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Inicio</h1>
      <p>Luiz Prosdoskimi</p>
      <p>Desenvolvedor de Software | Typescript | React JS | Next JS</p>
    </HomeContainer>
  );
};
