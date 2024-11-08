import { Path } from "./path"

export const GetFieldApi = async (level) => {//フィールド取得
    const res = await fetch(`${Path}/fields?level=${level}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        }
    })
    const json = await res.json()
    return json.objects
}