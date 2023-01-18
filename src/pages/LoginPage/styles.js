import styled from "styled-components";

export const LoginWrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #8C11BE;

    h1 {
        font-family: 'Saira Stencil One', cursive;
        font-weight: 400;
        font-size: 32px;
        margin-bottom: 24px;
        color: #FFFFFF;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 90%;

        input {
            height: 54px;
            width: 100%;
            padding: 0 12px;
            box-sizing: border-box;
            border-radius: 5px;
            margin-bottom: 14px;
            font-size: 20px;
            font-weight: 400;
        }
    }
    
    button {
        background-color: #A328D6;
        color: #FFFFFF;
        width: 100%;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 700;
        border-radius: 5px;
        margin-bottom: 36px;
    }

    p {
        font-size: 15px;
        font-weight: 700;
        color: #FFFFFF;
    }
`

