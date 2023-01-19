import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()

    const [token, setToaken] = useState(undefined)
    const [user, setUser] = useState(undefined)
    

    function logIn (a, b) {
        setUser(a)
        setToaken(b)
        console.log(a)
        console.log(b)

        navigate("/home")
    }

    return (
        <AuthContext.Provider value={{ token, user, logIn }}>
            { children }
        </AuthContext.Provider>
    )
}