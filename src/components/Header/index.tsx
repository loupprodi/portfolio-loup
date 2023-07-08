import { Guitar, InstagramLogo } from "@phosphor-icons/react";
import { HeaderButton, HeaderContainer, HeaderContent } from "./styles";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Guitar size={32} />
        <nav>
          <NavLink to="/" title="home">
            Home
          </NavLink>
          <NavLink to="/about" title="about">
            Sobre
          </NavLink>
          <NavLink to="/contact" title="contact">
            Contato
          </NavLink>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
};
