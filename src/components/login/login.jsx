import { useRef } from "react"

export default function Login({ login }) {
    const nameRef=useRef()
    const passRef=useRef()

    const handleClick = () => {
        login(nameRef.current.value,passRef.current.value)
    }

    return (
        <>
            username: <input type="text" ref={nameRef}/>
            password: <input type="password" ref={passRef}/>
            <button onClick={handleClick}>login</button>
        </>
    )
}