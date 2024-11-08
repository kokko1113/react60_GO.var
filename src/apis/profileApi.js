import { Path } from "./path"

export const GetProfileApi = async () => {
    const res = await fetch(`${Path}/users/profile`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        }
    })
    const json = await res.json()
    console.log(json);
    return json
}

export const PutProfileApi = async (username, nickname) => {
    console.log(username);
    
    const res = await fetch(`${Path}/users/profile`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify({ username, nickname })
    })
    const json = await res.json()
    return json
}