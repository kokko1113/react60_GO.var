import { Path } from "./path"

export const LoginApi = async (username, password) => {
    const res = await fetch(`${Path}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    const json = await res.json()
    return json
}