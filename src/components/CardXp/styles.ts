import { styled } from "styled-components";

export const CardContainer = styled.section`
  width: 25rem;
  height: 25rem;
  background-color: ${(props)=> props.theme['soft-white']};
  color: var(--gray);
  border-radius: 8px;
  box-shadow: 5px 5px 10px #22222270;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: ${(props) => props.theme["primary"]};
  }
  h2 {
    margin-top:0.8rem;
    color: ${(props) => props.theme['red']}
  }

  p {
    color: #555;
    text-align:justify;
  }
`;

export const CardFooter = styled.div`
  margin-top: 0.8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardIcons = styled.div`
  display: flex;
  gap: 10px;
  color: ${(props)=> props.theme['red']};
  font-size: 1.5rem;
`;