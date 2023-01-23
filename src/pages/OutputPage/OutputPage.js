import { OutputWrapper } from "./styles";
import StyledButton from "../../components/StyledButton";
import StyledForm from "../../components/StyledForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";

const OutputPage = () => {

    const [body, setBody] = useState({
        value: "",
        description: "",
        type: "output"
    })
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    
    function outputEntry(e) {
        e.preventDefault()
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
        const request = axios.post(
          `${process.env.REACT_APP_API_URL}/home`,
          body,
          config
        )
        request.then((res) => {
          navigate("/home")
        })
        request.catch((erro) => alert("Erro ao adicionar saída"))
      }


    return (
        <OutputWrapper onSubmit={outputEntry}>
            <h1>
                Nova Entrada
            </h1>
            <StyledForm>
                <input
                    type="text"
                    placeholder="Valor"
                    value={body.value}
                    onChange={(e) => setBody({ ...body, value: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    value={body.description}
                    onChange={(e) => setBody({ ...body, description: e.target.value })}
                />
                <StyledButton>
                    Salvar Saída
                </StyledButton>
            </StyledForm>
        </OutputWrapper>
    )
}

export default OutputPage