import { LoginWrapper } from "./styles"

const LoginPage = () => {
    return (
        <LoginWrapper>
            <h1>
                MyWallet
            </h1>
            <form>
                <input type="email" placeholder="E-mail..."/>
                <input type="password" placeholder="Senha..."/>
                <button>
                    Entrar
                </button>
            </form>
            <p>
                Primeira vez? Cadastre-se
            </p>
        </LoginWrapper>
    )
}

export default LoginPage