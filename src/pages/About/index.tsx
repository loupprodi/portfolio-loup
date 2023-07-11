import { AboutContainer, ImageContent, InfoContent } from "./styles";

export const About = () => {
  return (
    <AboutContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ImageContent>
        <img src="https://github.com/loupprodi.png" alt="Minha foto" />
      </ImageContent>
      <InfoContent>
        <h1>Sobre</h1>
        <p>
          Olá eu me chamo Luiz Felipe Vicente Prosdoskimi, nasci dia 30 de
          outubro de 1995 em São Paulo - SP, e atualmente tenho 27 anos de
          idade. Meu primeiro contato com a tecnologia foi muito cedo, vendo meu
          pai realizar manutenções em computadores. <br /> Possuo experiências
          com React, Flutter, React Native, Vue.Js, porém estou focando em react
          por um momento, Apesar de ser muito ligado com a tecnologia possuo
          hobbies como estudar francês, ler livros, tocar contrabaixo e violão,
          e no tempo livre jogar video game. Também gosto muito de assitir
          filmes do gênero de suspense em geral, sou fascinado por filmes
          antigos que te prendem até o último segundo e muitas vezes tem uma
          lição de moral
        </p>
      </InfoContent>
    </AboutContainer>
  );
};
