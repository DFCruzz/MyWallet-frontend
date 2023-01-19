import { InputWrapper } from "./styles";
import StyledButton from "../../components/StyledButton";
import StyledForm from "../../components/StyledForm";

const InputPage = () => {
    return (
        <InputWrapper>
            <h1>
                Nova Entrada
            </h1>
            <StyledForm>
                <input type="text" placeholder="Valor"/>
                <input type="text" placeholder="Descrição"/>
                <StyledButton>
                    Salvar Entrada
                </StyledButton>
            </StyledForm>
        </InputWrapper>
    )
}

export default InputPage
