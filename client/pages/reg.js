import {useState} from "react"
import Input from "../components/Input"
import axios from "axios"

export default function Reg() {
const [email, setEmail] = useState("")
const [pass, setPass] = useState("")

    return (
        <>
            <h1>Registration</h1>
            <Input value={email} setValue={setEmail} type="text" placeholder="Email"></Input>
            <Input value={pass} setValue={setPass} type="text" placeholder="Password"></Input>
            <button onClick={() => registration(email, pass)}>Register</button>
        </>
    )
}

// action
const registration = async (email, pass) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/reg`, {
            email,
            password: pass
        })
        alert(response.data.message)
    } catch (e) {
        alert(e)
    }
}
