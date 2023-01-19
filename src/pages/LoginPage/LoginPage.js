import StyledButton from "../../components/StyledButton"
import StyledForm from "../../components/StyledForm"
import { LoginWrapper } from "./styles"
import { useContext, useState } from "react"
import axios from "axios"
import { AuthContext } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import env from "react-dotenv"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const LoginPage = () => {

    const { user, token, logIn } = useContext(AuthContext)   
    const [loggedUser, setLoggedUser] = useState({
        email: "",
        password:""
    })
    const [isLoading, setIsLoading] = useState(false)
    
    function logInSubmit(e) {
        e.preventDefault()


        const request = axios.post(`${process.env.REACT_APP_API_URL}/login`, loggedUser)

        setIsLoading(true)
    
        request.then(e => {
            toast.success("Bem vindo Usuário!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            setIsLoading(false)
            logIn(e.data, e.data.token)            
        })

        request.catch(e => {
            const error = e.response.status
            toast.error("Erro ao realizar login", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            console.log(error)
        })

        setIsLoading(false)
        
    }

    return (
        <LoginWrapper onSubmit={logInSubmit}>
            <ToastContainer />
            <h1>
                MyWallet
            </h1>
            <StyledForm>
                <input
                    type="email"
                    placeholder="E-mail..."
                    value={loggedUser.email}
                    onChange={e => setLoggedUser({...loggedUser, email: e.target.value})}
                    disabled={isLoading}
                />
                <input
                    type="password"
                    placeholder="Senha..."
                    value={loggedUser.password}
                    onChange={e => setLoggedUser({...loggedUser, password: e.target.value})}
                    disabled={isLoading}
                />
                <StyledButton>
                    Entrar
                </StyledButton>
            </StyledForm>
            <Link to="/cadastro">
                <p>
                    Primeira vez? Cadastre-se
                </p>
            </Link>

        </LoginWrapper>
    )
}

export default LoginPage