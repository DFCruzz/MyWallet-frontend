import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import InputPage from "../pages/InputPage/InputPage";
import OutputPage from "../pages/OutputPage/OutputPage";
import UserPage from "../pages/UserPage/UserPage";
import { AuthContext, AuthProvider } from "../contexts/AuthContext";


function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/cadastro" element={<RegisterPage />} />
                    <Route path="/home" element={<UserPage />} />
                    <Route path="/nova-entrada" element={<InputPage />} />
                    <Route path="/nova-saida" element={<OutputPage />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App