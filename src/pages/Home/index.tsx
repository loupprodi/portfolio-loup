import { HomeContainer } from "./styles";

export const Home = () => {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Inicio</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt porro
        soluta commodi asperiores iste dolores in rerum ut eum. Deleniti
        delectus veniam necessitatibus molestiae maiores laborum asperiores
        aperiam laudantium?
      </p>
      {/* <Header />
      <Footer /> */}
    </HomeContainer>
  );
};
