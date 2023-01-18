import styled from "styled-components";

const InputPage = () => {
    return (
        <InputWrapper>
            <h1>
                Nova Entrada
            </h1>
            <form>
                <input type="text" placeholder="Valor"/>
                <input type="text" placeholder="Descrição"/>
                <button>
                    Salvar Entrada
                </button>
            </form>
        </InputWrapper>
    )
}

export default InputPage

const InputWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #8C11BE;

    h1 {
        width: 90%;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 26px;
        margin-bottom: 40px;
        margin-top: 25px;
    }

    form {
        width: 90%;
        display: flex;
        flex-direction: column;

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
`