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
  @media (max-width: 600px) {
    width: 90%;
    height: 80%;
  }
`

export const GridName = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  margin-top: 1.5rem;
  div{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 1.5rem;
  }
`

export const ContainerInput = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  label{
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    color: #344054;
  }
  input{
    border: 0.775px solid #D0D5DD;
    border-radius: 3.1px;
    height: 0.8rem;
    outline-color: #D0D5DD;
    cursor: pointer;
  }
`

export const ContainerCheckbox = styled.div`
  margin-top: 1rem;
`

export const NextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
  img{
    width: 6.024rem;
    height: 2.325rem;
  }
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-one);
    border: 0.775px solid var(--color-one);
    box-shadow: 6.2px 6.2px 18.6px rgba(2, 2, 70, 0.15);
    border-radius: 6.2px;
    font-style: normal;
    font-weight: 500;
    font-size: 0.775rem;
    color: white;
    width: 10.996rem;
    height: 2.35rem;
    cursor: pointer;
  }
  svg{
    height: 1.5rem;
    width: 1.5rem;
    fill: white;
  }
`