import StyledButton from "../../components/StyledButton"
import StyledForm from "../../components/StyledForm"
import { LoginWrapper } from "./styles"

const LoginPage = () => {
    return (
        <LoginWrapper>
            <h1>
                MyWallet
            </h1>
            <StyledForm>
                <input type="email" placeholder="E-mail..."/>
                <input type="password" placeholder="Senha..."/>
                <StyledButton>
                    Entrar
                </StyledButton>
            </StyledForm>
            <p>
                Primeira vez? Cadastre-se
            </p>
        </LoginWrapper>
    )
}

export default LoginPage