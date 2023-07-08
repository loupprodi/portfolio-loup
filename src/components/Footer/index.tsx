import {
  GithubLogo,
  LinkedinLogo,
  Paperclip,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { FooterContainer, FooterContent, SocialMediaList } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <h3>Entre em Contato</h3>
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
              <a href="https://www.linkedin.com/in/luiz-prosdoskimi-26205a168/">
                Luiz Prosdoskimi
              </a>
            </span>
          </li>
          <li>
            <span>
              <GithubLogo size={32} />
              <a href="https://github.com/loupprodi">loupprodi</a>
            </span>
          </li>
          <li>
            <span>
              <Paperclip size={32} />
              <a href="mailto:luizprosdoskimi@gmail.com">loupprodi</a>
            </span>
          </li>
        </SocialMediaList>
      </FooterContent>
    </FooterContainer>
  );
};
