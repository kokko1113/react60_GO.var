import { Path } from "./path"

export const LogoutApi = async () => {
    const res = await fetch(`${Path}/auth/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        }
    })
    const json = await res.json()
    return json
}