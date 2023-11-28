import { styled } from "styled-components";

export const LogoImg = styled.div`
margin-top:10px;
  img {
    height: 60px;
  }
`

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-900"]};
  padding: 0.5rem 0 1.2rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 1.1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 1rem;
  }

  nav a {
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme["gray-100"]};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme["green-500"]};
    }

    &:active {
      color: ${(props) => props.theme["green-500"]};
    }
  }
`;

export const HeaderButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme["indigo-500"]};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  margin: 0 0.2rem;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme["indigo-700"]};
    transition: background-color 0.2s;
  }
`;
