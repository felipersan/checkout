import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-shadow: 0px 2px 15px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  img {
    border-radius: 0.5rem;
    width: 60px;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`