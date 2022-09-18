import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .step{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--color-two);
    display: flex;
    align-items: center;
    justify-content: center;
    .circle{
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: var(--color-three);
      display: flex;
      align-items: center;
      justify-content: center;
      .level{
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: var(--color-one);
      }
    }
  }
  .stepIn{
    width: 2.323rem;
    height: 2.323rem;
    border-radius: 50%;
    background-color: var(--color-three);
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      fill: var(--color-one);
    }
  }
  .lineIn{
    width: 5rem;
    border: 0.113rem solid !important;
    border-color: var(--color-one) !important;
  }
  .line{
    width: 5rem;
    border: 0.113rem solid !important;
    border-color: var(--color-two) !important;
  }
`