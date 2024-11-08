import { Path } from "./path"

export const GetResultApi = async (level) => {
    const res = await fetch(`${Path}/results?level=${level}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        }
    })
    const json = await res.json()
    return json
}

export const PutResultApi = async (level, time) => {//クリア結果を投稿
    console.log(level, time);
    const res = await fetch(`${Path}/results`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify({ level, time })
    })
    const json = await res.json()
    return json
}