import { RegisterWrapper } from "./styles"



const RegisterPage = () => {
    return (
        <RegisterWrapper>
            <h1>
                MyWallet
            </h1>
            <form>
                <input type="text" placeholder="Nome..."/>
                <input type="email" placeholder="E-mail.." />
                <input type="password" placeholder="Senha..."/>
                <input type="password" placeholder="Confirme a senha..."/>
                <button>
                    Cadastrar
                </button>
            </form>
            <p>
                Já tem uma conta? Entre agora!
            </p>
        </RegisterWrapper>
    )
}

export default RegisterPage