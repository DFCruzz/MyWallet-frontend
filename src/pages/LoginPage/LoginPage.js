import StyledButton from "../../components/StyledButton"
import StyledForm from "../../components/StyledForm"
import { LoginWrapper } from "./styles"
import { useContext, useState } from "react"
import axios from "axios"
import UserContext from "../../contexts/UserContext"
import { Link, useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'

const LoginPage = () => {

    const { setUser } = useContext(UserContext)
    const [loggedUser, setLoggedUser] = useState({
        email: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    function logInSubmit(e) {
        e.preventDefault()

        const request = axios.post(`${process.env.REACT_APP_API_URL}/login`, loggedUser)

        setIsLoading(true)

        request.then(e => {
            setIsLoading(false)
            setUser(e.data)
            navigate("/home")
        })

        request.catch(e => {
            const error = e.response.status
            console.log(error)
        })

        setIsLoading(false)

    }

    return (
        <LoginWrapper onSubmit={logInSubmit}>
            <h1>
                MyWallet
            </h1>
            <StyledForm>
                <input
                    type="email"
                    placeholder="E-mail..."
                    value={loggedUser.email}
                    onChange={e => setLoggedUser({ ...loggedUser, email: e.target.value })}
                    disabled={isLoading}
                />
                <input
                    type="password"
                    placeholder="Senha..."
                    value={loggedUser.password}
                    onChange={e => setLoggedUser({ ...loggedUser, password: e.target.value })}
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