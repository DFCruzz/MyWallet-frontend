import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"/>
                <Route path="/cadastro"/>
                <Route path="/home"/>
                <Route path="/nova-entrada"/>
                <Route path="/nova-saida"/>
            </Routes>
        </BrowserRouter>
    )
}

export default App