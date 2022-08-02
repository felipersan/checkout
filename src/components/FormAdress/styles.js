import styled from "styled-components";

export const Container = styled.div`
    width: 50rem;
    margin: auto;
    padding: 4rem;
    display: flex;
    justify-content: center;
    box-shadow: 4px 4px 17px -2px rgba(0,0,0,0.53);
    border-radius: 3rem;
    margin-top: 5rem;
    .field{
        width: 100%;
        padding: 0.5rem;
        border: 0.775px solid #D0D5DD;
        box-shadow: 0px 0.775px 1.55px rgba(16, 24, 40, 0.05);
        border-radius: 6.2px;
    }
    h3{
        font-weight: 500;
        font-size: 13.95px;
        line-height: 22px;
        color: #101828;
        margin-bottom: 2rem;
    }
    label{
        font-weight: 500;
        font-size: 10.85px;
        line-height: 16px;
        color: #344054;
        margin-bottom: 0.3rem;
    }
    button{
        background-color: #020246;
        border: none;
        background: #020246;
        border: 0.775px solid #020246;
        box-shadow: 6.2px 6.2px 18.6px rgba(2, 2, 70, 0.15);
        border-radius: 6.2px;
        color: white;
        width: 10.996rem;
        height: 2.35;
        padding: 0.581rem 0.969rem;
    }
`

export const ContainerPair = styled.div`
    display: flex;
    gap: 5rem;
    margin-bottom: 1rem;
`

export const ContainerIndividual = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    .error{
        font-weight: 500;
        font-size: 10.85px;
        line-height: 16px;
        color: red;
    }
`