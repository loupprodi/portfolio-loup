import { styled } from "styled-components";

export const Content404 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5.8rem;
  h2 {
    padding-top: 2.5rem;
  }
`;
export const Container404 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    font-size: 300px;
    color: ${(props) => props.theme["red"]};
    font-weight: bold;
  }

  strong {
    color: ${(props) => props.theme["red"]};
    font-size: 2rem;
  }
`;
