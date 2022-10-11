import styled from "styled-components";

export const Container = styled.section`
  background: #ffffff;
  padding: 1.5rem;
  box-shadow: 12px 12px 36px 6px rgba(2, 2, 70, 0.12);
  border-radius: 23.9238px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 37.25rem;
  gap: 2rem;
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    text-align: center;
    color: var(--color-one);
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    color: var(--color-four);
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    text-decoration-line: underline;
    color: var(--color-one);
    cursor: pointer;
  }
  .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiAccordion-root.MuiAccordion-rounded.MuiAccordion-gutters.css-pnklwc-MuiPaper-root-MuiAccordion-root {
    width: 100%;
  }
  button {
    background: var(--color-one);
    border: 0.775px solid var(--color-one);
    box-shadow: 6.2px 6.2px 18.6px rgba(2, 2, 70, 0.15);
    border-radius: 6.2px;
    color: white;
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 0.9rem;
    height: 2.35rem;
    cursor: pointer;
  }
`;