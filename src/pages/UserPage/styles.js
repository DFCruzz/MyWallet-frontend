import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #8C11BE;
`

export const Header = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;    
    font-size: 26px;
    font-weight: 700;
    color: #FFFFFF;
    margin: 24px auto;

    ion-icon {
        font-size: 32px;
    }
`

export const Footer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    div {
        background-color: #A328D6;
        width: 155px;
        height: 114px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        font-size: 18px;
        font-weight: 700;
        color: #FFFFFF;
        border-radius: 5px;
        margin-top: 14px;

        ion-icon {
            font-size: 32px;
        }
    }
`

export const DataBox = styled.div`
    background-color: #FFFFFF;
    width: 90%;
    height: 55vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    h1 {
        margin: auto;
    }

    div {
        width: 100%;
        display: flex;

        p {
            font-size: 16px;
            font-weight: 400;
            margin-top: 8px;
            padding: 0 4px;
        }

        .amount {
            font-size: 16px;
            font-weight: 400;
            margin-top: 8px;
            padding: 0 4px;
            color: ${props => (props.type === "input" ? "#03AC00" : "#C70000")} 
        }
    }
`

export const SumBox = styled.div`
    background-color: #FFFFFF;
    width: 90%;
    height: 5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    p {
        font-size: 18px;
        font-weight: 700;
    }
`