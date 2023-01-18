import styled from "styled-components";

const UserPage = () => {
    return (
        <Wrapper>
            <Header>
                <h1>Olá, Username</h1>
                <ion-icon name="log-out-outline"></ion-icon>
            </Header>
            <DataBox>
                <div>
                    <p>Data/77</p>
                    <p>Descrição do input</p>
                    <p>Valor do input</p>
                </div>
                <div>
                    <p>Data/77</p>
                    <p>Descrição do input</p>
                    <p>Valor do input</p>
                </div>
                <div>
                    <p>Data/77</p>
                    <p>Descrição do input</p>
                    <p>Valor do input</p>
                </div>
            </DataBox>
            <SumBox>
                <p>SALDO</p>
                <p>999.99</p>
            </SumBox>
            <Footer>
                <div>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova Entrada</p>
                </div>
                <div>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova Saída</p>
                </div>
            </Footer>
        </Wrapper>
    )
}

export default UserPage

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #8C11BE;
`

const Header = styled.div`
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

const Footer = styled.div`
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

const DataBox = styled.div`
    background-color: #FFFFFF;
    width: 90%;
    height: 55vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    div {
        width: 95%;
        display: flex;    
        background-color: pink;

        p {
            font-size: 16px;
            font-weight: 400;
        }
    }
`


const SumBox = styled.div`
    background-color: #FFFFFF;
    width: 90%;
    height: 5vh;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    p {
        font-size: 18px;
        font-weight: 700;
    }
`

