import StyledButton from "../../components/StyledButton"
import StyledForm from "../../components/StyledForm"
import { RegisterWrapper } from "./styles"



const RegisterPage = () => {
    return (
        <RegisterWrapper>
            <h1>
                MyWallet
            </h1>
            <StyledForm>
                <input type="text" placeholder="Nome..."/>
                <input type="email" placeholder="E-mail.." />
                <input type="password" placeholder="Senha..."/>
                <input type="password" placeholder="Confirme a senha..."/>
                <StyledButton>
                    Cadastrar
                </StyledButton>
            </StyledForm>
            <p>
                Já tem uma conta? Entre agora!
            </p>
        </RegisterWrapper>
    )
}

export default RegisterPage