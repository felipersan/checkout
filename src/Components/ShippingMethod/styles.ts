import styled from "styled-components";

interface IProps {
  bg?: string;
  p?: string;
}

export const Container = styled.section`
  width: 37rem;
  height: 24rem;
  box-shadow: 12px 12px 36px 6px rgba(2, 2, 70, 0.12);
  border-radius: 24.2622px;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 600px) {
    width: 90%;
    height: 80%;
  }
`;

export const MethodContainer = styled.div<IProps>`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
  cursor: pointer;
  border-radius: 6.21522px;
  background-color: ${({ bg }) => bg};
  color: ${({ p }) => p};
  border: 0.388451px solid;
  border-color: var(--color-four);
  margin: 0.5rem;
  margin-left: 0;
  margin-right: 0;
  input{
    width: 0.971rem;
    border-color: var(--color-two);
    cursor: pointer;
  }
  span{
    color: var(--color-one);
    font-weight: bold;
  }
  p{
    font-style: normal;
    font-weight: 400;
    font-size: 0.777rem;
  }
`

export const NextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
  img{
    width: 6.024rem;
    height: 2.325rem;
  }
  .areaButtons {
    display: flex;
    gap: 10px;
    .returnButton {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0.775px solid var(--color-one);
      box-shadow: 6.2px 6.2px 18.6px rgba(2, 2, 70, 0.15);
      border-radius: 6.2px;
      font-style: normal;
      font-weight: 500;
      font-size: 0.775rem;
      color: var(--color-one);
      width: 10.996rem;
      height: 2.35rem;
      cursor: pointer;
      svg{
        fill: var(--color-one)
      }
    }
    .submitButton{
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
  }
  svg{
    height: 1.5rem;
    width: 1.5rem;
    fill: white;
  }
`