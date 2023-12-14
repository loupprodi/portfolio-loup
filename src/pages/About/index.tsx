import {
  AboutContainer,
  ImageContent,
  InfoContent,
  TechContent,
  TechImg
} from "./styles";


import { Slider } from "../../components/Slider";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { StacksProgram } from "../../mocks/StacksProgram";


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
            Sou <span>Luiz Prosdoskimi</span>
            <br />
            <strong>dev full stack</strong>
          </p>
          <p>Trabalho com desenvolvimento Web desde 2019</p>
          <p>Sou apaixonado por transformar ideias em realidade digital</p>
          <p>
            Especializado em criação de aplicações dinâmicas e intuitivas, com
            foco na experiência do usuário
          </p>
          <p>
            Nasci dia 30 de outubro de 1995 em São Paulo - SP, e atualmente
            tenho 28 anos de idade. Meu primeiro contato com a tecnologia foi
            muito cedo, vendo meu pai realizar manutenções em computadores.</p>
            <p>
            Possuo experiências com React, Flutter, React Native, Vue.Js, no atual momento estou focado com alguns projetos em React. Apesar de ser muito ligado com a tecnologia possuo hobbies como lecionar a língua francesa, ler livros, tocar contrabaixo e violão, e no tempo livre jogar vídeo game. Também gosto muito de assistir filmes do gênero de suspense em geral, sou fascinado por filmes antigos que te prendem até o último segundo e muitas vezes tem uma lição de moral.
            </p>
        </InfoContent>
      </AboutContainer>
      <h2>Techs & Skills</h2>

      <TechContent>
        <Slider settings={settings}>
      {
        StacksProgram.length  > 0 ?
        <Swiper>
            {StacksProgram.map((stack)=>{
            return(
            <SwiperSlide key={stack.id}>
              <TechImg src={stack.src} alt={stack.alt} color={stack.color} />
            </SwiperSlide>
            )}
          )}
        </Swiper>
        : <h2>No content</h2>
      }
     </Slider>
      </TechContent>
    </>
  );
};
