import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Circle = styled.div`
    width: 4rem;
    height: 4rem;
    background-color: #F9FAFB;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`

export const Opened = styled.div`
    width: 1rem;
    height: 1rem;
    background-color:#020246;
    border-radius: 50%;
`

export const Finished = styled.div`
    p{
        color: #020246;
    }
`