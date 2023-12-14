import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme["gray-900"]};
  padding: 2.2rem 0 2.2rem;
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
  gap: 1.8rem;
  margin: 1rem auto;
  align-items: center;
  justify-content: center;
 
  
  li a {
    color: ${(props) =>props.theme["gray-500"]};
    margin: 1rem;
    &:hover {
    background: ${(props) => props.theme["indigo-700"]};
    transition: background-color 0.2s;
  }
  }

`;
