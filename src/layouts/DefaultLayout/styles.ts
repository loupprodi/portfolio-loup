import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: 100vh;

  background: ${(props) => props.theme["gray-800"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;
