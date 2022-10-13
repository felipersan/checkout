import styled from "styled-components";

export const Container = styled.section`
  width: 37.063rem;
  box-shadow: 12px 12px 36px 6px rgba(2, 2, 70, 0.12);
  border-radius: 24.2622px;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 0.766rem;
  }
  @media (max-width: 600px) {
    width: 90%;
    height: 80%;
  }
`;

export const FlexWithGap = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  button {
    padding: 0.5rem;
    height: 100%;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  svg {
    width: 1rem;
    height: 1rem;
  }
  aside {
    font-style: normal;
    font-weight: 500;
    font-size: 0.813rem;
    color: var(---color-one);
  }
  span {
    font-style: normal;
    font-weight: 700;
    font-size: 0.813rem;
    text-decoration-line: underline;
    cursor: pointer;
  }
  input {
    background: var(--color-three);
    border: 0.766067px solid var(---color-one);
    border-radius: 4.5964px;
    color: var(---color-one);
    cursor: pointer;
  }
`;

export const CouponContainer = styled.div`
  box-shadow: 0px 0.775px 5px rgba(16, 24, 40, 0.05);
  width: max-content;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: rgba(76, 175, 80, 0.1);
  border-radius: 0.5rem;
`;

export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SummaryContainer = styled.div`
  border-bottom: 1px solid var(--color-six);
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

export const NextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  flex-direction: column-reverse;
  gap: 1rem;
  img {
    width: 6.024rem;
    height: 2.325rem;
  }
  button {
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
    width: 100%;
    height: 2.35rem;
    cursor: pointer;
  }
  svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: white;
  }
`;