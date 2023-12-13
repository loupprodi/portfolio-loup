import { styled } from "styled-components";

export const CardContainer = styled.section`
  width: 30.875rem;
  height: 34.875rem;
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

  p {
    color: #555;
  }
`;

export const CardFooter = styled.div`
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

  ul{
    margin-left:10px;
    display: flex;
    gap:10px;
    flex-wrap:wrap;
    font-size:1rem;
  }
  li{
    list-style:none;
  }

`;
export const CardLink = styled.a`
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  background-color: ${(props) => props.theme["primary"]};
  color: ${(props) => props.theme["white"]};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["red"]};
    transition: all 0.5s;
  }
`;
