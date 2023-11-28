import { Guitar, InstagramLogo } from "@phosphor-icons/react";
import { HeaderButton, HeaderContainer, HeaderContent, LogoImg } from "./styles";
import { NavLink } from "react-router-dom";

import mainLogo from "../../assets/img/logo_nome_luiz.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoImg>
          <img src={mainLogo} alt="logo luiz" />
        </LogoImg>
        <nav>
          <NavLink to="/" title="home">
            Inicio
          </NavLink>
          <NavLink to="/about" title="about">
            Sobre
          </NavLink>
          <NavLink to="/skill" title="skill">
            Habilidades
          </NavLink>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
};
