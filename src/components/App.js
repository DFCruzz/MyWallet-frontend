import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import InputPage from "../pages/InputPage/InputPage";
import OutputPage from "../pages/OutputPage/OutputPage";
import UserPage from "../pages/UserPage/UserPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/cadastro" element={<RegisterPage />}/>
                <Route path="/home" element={<UserPage />}/>
                <Route path="/nova-entrada" element={<InputPage />}/>
                <Route path="/nova-saida" element={<OutputPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App