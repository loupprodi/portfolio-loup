import {
  GithubLogo,
  LinkedinLogo,
  Paperclip,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { FooterContainer, FooterContent, SocialMediaList } from "./styles";
import { FaRegCopyright, FaGoogle } from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <h2>Entre em Contato</h2>
        <p>
          Gostaria de me conhecer? acesse as redas abaixo e entre em contato !!
        </p>
        <SocialMediaList>
          <li>
            <span>
              <WhatsappLogo size={32} />
              <a href="">(15) 99178-8707</a>
            </span>
          </li>
          <li>
            <span>
              <LinkedinLogo size={32} />
            </span>
            <a href="https://www.linkedin.com/in/luiz-prosdoskimi-26205a168/">
              Luiz Prosdoskimi
            </a>
          </li>
          <li>
            <span>
              <GithubLogo size={32} />
            </span>
            <a href="https://github.com/loupprodi">loupprodi</a>
          </li>
          <li>
            <span>
              <FaGoogle size={32} />
            </span>
            <a href="mailto:luizprosdoskimi@gmail.com">loupprodi</a>
          </li>
        </SocialMediaList>
        <div>
          <FaRegCopyright /> Copyright - loupprodi - All rights reserved
        </div>
      </FooterContent>
    </FooterContainer>
  );
};
