import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import InputPage from "../pages/InputPage/InputPage";
import OutputPage from "../pages/OutputPage/OutputPage";
import UserPage from "../pages/UserPage/UserPage";
import UserContext from "../contexts/UserContext";
import { useState } from "react";


function App() {

    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/cadastro" element={<RegisterPage />} />
                    <Route path="/home" element={<UserPage />} />
                    <Route path="/nova-entrada" element={<InputPage />} />
                    <Route path="/nova-saida" element={<OutputPage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>

    )
}

export default App