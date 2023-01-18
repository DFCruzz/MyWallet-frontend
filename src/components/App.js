import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/cadastro" element={<RegisterPage />}/>
                <Route path="/home"/>
                <Route path="/nova-entrada"/>
                <Route path="/nova-saida"/>
            </Routes>
        </BrowserRouter>
    )
}

export default App