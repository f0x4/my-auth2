import {useState} from "react"
import Input from "../components/Input"
import axios from "axios"

export default function Login() {
const [email, setEmail] = useState("")
const [pass, setPass] = useState("")

    return (
        <>
            <h1>Login</h1>
            <Input value={email} setValue={setEmail} type="text" placeholder="Email"></Input>
            <Input value={pass} setValue={setPass} type="text" placeholder="Password"></Input>
            <button onClick={() => login(email, pass)}>Login</button>
        </>
    )
}

// action
const login = async (email, pass) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/reg`, {
            email,
            password: pass
        })
    } catch (e) {
        alert(e)
    }
}
