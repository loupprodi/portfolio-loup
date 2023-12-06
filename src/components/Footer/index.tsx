import {
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
  TwitterLogo
} from "@phosphor-icons/react";
import { FooterContainer, FooterContent, SocialMediaList } from "./styles";
import { FaRegCopyright, FaGoogle } from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <h2>Entre em Contato</h2>
        <p>
          Gostaria de me conhecer? acesse as redes sociais abaixo e entre em
          contato !!
        </p>
        <SocialMediaList>
          <li>
            <span>
              <TwitterLogo size={32} />
              <a href="https://twitter.com/prosdoskimi" target="blank">Prosdoskimi</a>
            </span>
          </li>
          <li>
            <span>
              <LinkedinLogo size={32} />
            </span>
            <a href="https://www.linkedin.com/in/luiz-prosdoskimi-26205a168/" target="blank">
              Luiz Prosdoskimi
            </a>
          </li>
          <li>
            <span>
              <GithubLogo size={32} />
            </span>
            <a href="https://github.com/loupprodi" target="blank">loupprodi</a>
          </li>
          <li>
            <span>
              <FaGoogle size={32} />
            </span>
            <a href="mailto:luizprosdoskimi@gmail.com">loupprodi</a>
          </li>
        </SocialMediaList>
        <div>
          <FaRegCopyright /> <span>Copyright - loupprodi - All rights reserved</span>
        </div>
      </FooterContent>
    </FooterContainer>
  );
};
