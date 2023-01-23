import { Wrapper, Header, DataBox, SumBox, Footer } from "./styles"
import UserContext from "../../contexts/UserContext"
import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import env from "react-dotenv"


const UserPage = () => {

    const [entries, setEntries] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate()

    function logOut() {
        if (window.confirm("Deseja se desconectar?")) {
            setUser("")
            navigate("/")
        }
    }

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        }

        const promise = axios.get(`${process.env.REACT_APP_API_URL}/home`, config);
        promise.then((res) => {

            let x = 0

            res.data.map((item) => {
                if (item.type === "output") {
                    return (x -= item.value)
                }

                else {
                    return (x += item.value)
                }
            });
            setTotalAmount(x)
            setEntries(res.data)
        });
        promise.catch((err) => console.log(err.response.data.message))
    }, [user.token])

    return (
        <Wrapper>
            <Header>
                <h1>Olá, {user}</h1>
                <ion-icon onClick={logOut} name="log-out-outline"></ion-icon>
            </Header>
            <DataBox>
                {entries.length === 0 ? (
                    <h1>Não há registros de entrada ou saída</h1>
                ) : (
                    entries.map((a) => {
                        <div key={a._id}>
                            <p>{a.date}</p>
                            <p>{a.description}</p>
                            <p type={a.type} className="amount">{a.value}</p>
                        </div>
                    })
                )}
            </DataBox>
            <SumBox>
                <p>SALDO</p>
                <p>{totalAmount}</p>
            </SumBox>
            <Footer>
                <Link to="/nova-entrada">
                    <div>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova Entrada</p>
                    </div>
                </Link>
                <Link to="/nova-saida">
                    <div>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <p>Nova Saída</p>
                    </div>
                </Link>
            </Footer>
        </Wrapper>
    )
}

export default UserPage



