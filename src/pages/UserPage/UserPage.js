import { Wrapper, Header, DataBox, SumBox, Footer } from "./styles"

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



