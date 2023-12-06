import {
  HeaderContainer,
  HeaderContent,
  LogoImg,
  NavContainer,
} from "./styles";
import { NavLink } from "react-router-dom";

import mainLogo from "../../assets/images/logo_nome_luiz.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoImg>
          <NavLink to="/" title="home">
            <img src={mainLogo} alt="logo luiz" />
          </NavLink>
        </LogoImg>
        <NavContainer>
          <nav>
            <NavLink to="/" title="home">
              Inicio
            </NavLink>
            <NavLink to="/about" title="about">
              Sobre
            </NavLink>
            <NavLink to="/project" title="project">
              Projetos
            </NavLink>
          </nav>
        </NavContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};
