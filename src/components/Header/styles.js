import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    margin-left: 8rem;
    margin-right: 8rem;

    h1{
        margin-bottom: 2rem;
        font-weight: 700;
        font-size: 26.35px;
        line-height: 36px;
        text-align: center;
    }
    p{
        color: rgba(0, 0, 0, 0.5);
        font-weight: 400;
        font-size: 13.95px;
        line-height: 23px;
        text-align: center;
        margin-bottom: 1rem;
    }
    a{
        color: #020246;
        text-decoration-line: underline;
    }
`

export const StepperStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-left: 5rem;
    margin-right: 5rem;
`