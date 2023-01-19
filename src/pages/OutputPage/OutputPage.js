import { OutputWrapper } from "./styles";
import StyledButton from "../../components/StyledButton";
import StyledForm from "../../components/StyledForm";

const OutputPage = () => {
    return (
        <OutputWrapper>
            <h1>
                Nova Entrada
            </h1>
            <StyledForm>
                <input type="text" placeholder="Valor"/>
                <input type="text" placeholder="Descrição"/>
                <StyledButton>
                    Salvar Saída
                </StyledButton>
            </StyledForm>
        </OutputWrapper>
    )
}

export default OutputPage