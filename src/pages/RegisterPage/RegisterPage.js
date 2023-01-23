import StyledButton from "../../components/StyledButton"
import StyledForm from "../../components/StyledForm"
import { RegisterWrapper } from "./styles"
import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'




const RegisterPage = ({ }) => {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    
    const [isLoading, setIsLoading] = useState(false)



    function signUpSubmit(e) {
        e.preventDefault()

        const request = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, user)

        setIsLoading(true)

        request.then(e => {
            console.log(e.data)
            setIsLoading(false)
            navigate("/")
        })

        request.catch(e => {
            const error = e.response.status
            if (error === 409) {
                toast.error("Usuário já cadastrado!", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            }
            
            else {
                toast.error("Erro ao cadastrar usuário", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            }

            console.log(error)
            setIsLoading(false)
        })
    }



    return (
        <RegisterWrapper>
            <ToastContainer />
            <h1>
                MyWallet
            </h1>
            <StyledForm onSubmit={signUpSubmit}>
                <input
                    type="text"
                    placeholder="Nome..."
                    value={user.name}
                    onChange={e => setUser({...user, name: e.target.value})}
                    disabled={isLoading}
                />
                <input
                    type="email"
                    placeholder="E-mail.."
                    value={user.email}
                    onChange={e => setUser({...user, email: e.target.value})}
                    disabled={isLoading}
                />
                <input
                    type="password"
                    placeholder="Senha..."
                    value={user.password}
                    onChange={e => setUser({...user, password: e.target.value})}
                    disabled={isLoading}
                />
                <input
                    type="password"
                    placeholder="Confirme a senha..."
                    value={user.confirmPassword}
                    onChange={e => setUser({...user, confirmPassword: e.target.value})}
                    disabled={isLoading}
                />
                <StyledButton>
                    Cadastrar
                </StyledButton>
            </StyledForm>

            <Link to="/">
                <p>
                    Já tem uma conta? Entre agora!
                </p>
            </Link>
        </RegisterWrapper>
    )
}

export default RegisterPage