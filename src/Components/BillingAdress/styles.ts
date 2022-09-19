import styled from "styled-components";

export const Container = styled.section`
  width: 37rem;
  height: 35rem;
  box-shadow: 12px 12px 36px 6px rgba(2, 2, 70, 0.12);
  border-radius: 24.2622px;
  margin-top: 3rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  h3{
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
  }
  label{
    font-size: 0.8rem;
  }
`

export const GridName = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  margin-top: 1.5rem;
`

export const ContainerInput = styled.div`
  margin-top: 1rem;
`