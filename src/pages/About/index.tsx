import { NavLink } from "react-router-dom";
import { AboutContainer } from "./styles";

export const About = () => {
  return (
    <AboutContainer>
      <h1>About page</h1>
      <p>
        Olá eu me chamo Luiz Felipe Vicente Prosdoskimi, nasci dia 30 de outubro
        de 1995 em São Paulo - SP, e atualmente tenho 27 anos de idade. Meu
        primeiro contato com a tecnologia foi muito cedo, vendo meu pai realizar
        manutenções em computadores.
      </p>
      <p>
        Possuo experiências com React, Flutter, React Native, Vue.Js mas sem
        dúvidas o React tem um lugar especial no meu coração. Apesar de ser
        muito ligado com a tecnologia eu também adoro atividades ao ar livre,
        como acampar, fazer trilha, nadar, jogar futebol e muito mais. Também
        gosto muito de assitir filmes do gênero de suspense em geral, fico
        fascinado por filmes cativantes que te prendem até o último segundo e
        muitas vezes tem uma reviravolta inesperada no fim. Bom isso foi um
        breve resumo sobre mim, obrigado por ter lido até aqui =).
      </p>
    </AboutContainer>
  );
};
