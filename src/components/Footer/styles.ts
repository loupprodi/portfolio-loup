import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 2.5rem;
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 35%;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  justify-content: space-between;

  h2 {
    margin-bottom: 0.8rem;
  }
`;

export const SocialMediaList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.2rem;
  margin: 1rem auto;

  span {
    margin: 0.2rem;
  }
`;
