import { HeaderContainer, HeaderContent, LogoImg } from "./styles";
import { NavLink } from "react-router-dom";

import mainLogo from "../../assets/images/logo_nome_luiz.png";

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
          <NavLink to="/project" title="project">
            Projetos
          </NavLink>
          <NavLink to="/experience" title="experience">
            Xp
          </NavLink>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
};
