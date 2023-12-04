import {
  AboutContainer,
  ImageContent,
  InfoContent,
  TechContent,
  
} from "./styles";

import html from "./images/icon-html.svg";
import css from "./images/icon-css.svg";
import js from "./images/icon-js.svg";
import react from "./images/icon-react.svg";
import node from "./images/icon-node.svg";
import sql from "./images/icon-sql.svg";
import { Slider } from "../../components/Slider";
import { SwiperProps, SwiperSlide } from "swiper/react";



export const About = () => {
  const settings : SwiperProps ={
    spaceBetween: 10,
    slidesPerView:2,
    navigation: true,
    pagination: {
      clickable: true,

    }
  }


  return (
    <>
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
            sou <span>Luiz Prosdoskimi</span>
            <br />
            <strong>dev full stack</strong>
          </p>
          <p>Trabalho com desenvolvimento Web desde 2019</p>
          <p>Sou apaixonado por transformar ideias em realidae digital</p>
          <p>
            Especializado em criação de aplicações dinâmicas e intuitivas, com
            foco na experiência do usuário
          </p>
          <p>
            Nasci dia 30 de outubro de 1995 em São Paulo - SP, e atualmente
            tenho 27 anos de idade. Meu primeiro contato com a tecnologia foi
            muito cedo, vendo meu pai realizar manutenções em computadores.{" "}
            <br /> Possuo experiências com React, Flutter, React Native, Vue.Js,
            porém estou focando em react por um momento, Apesar de ser muito
            ligado com a tecnologia possuo hobbies como estudar francês, ler
            livros, tocar contrabaixo e violão, e no tempo livre jogar video
            game. Também gosto muito de assitir filmes do gênero de suspense em
            geral, sou fascinado por filmes antigos que te prendem até o último
            segundo e muitas vezes tem uma lição de moral
          </p>
        </InfoContent>
      </AboutContainer>
      <h2>Techs</h2>

      <TechContent>
        <Slider settings={settings}>
        <SwiperSlide>
        <img src={html} alt="Icone do HTML" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={css} alt="Icone do CSS" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={js} alt="Icone do JS" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={react} alt="Icone do React" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={node} alt="Icone o Node" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={sql} alt="Icone do Sql" />
        </SwiperSlide>
     </Slider>
      </TechContent>
    </>
  );
};
