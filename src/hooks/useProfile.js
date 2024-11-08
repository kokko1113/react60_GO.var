import { useEffect, useState } from "react"
import { GetProfileApi, PutProfileApi } from "../apis/profileApi"

export const UseProfile = (isLogin) => {
    const [profileData, setProfileData] = useState([])
    const [isPut, setIsPut] = useState(false)
    const [totalPlayTime, setTotalPlayTime] = useState(0)

    const getProfile = async () => {
        const data = await GetProfileApi()
        if (data.success != false) {
            setProfileData(data)
            data.results.forEach(ele => {//合計プレイ時間
                setTotalPlayTime(prev => prev + ele.time)
            })
        }
    }

    const putProfile = async (username, nickname) => {
        const user = /^[a-zA-Z0-9]{5,}$/.test(username)
        const nick = nickname.length >= 4 ? nickname : null
        if (user && nick) {
            const data = await PutProfileApi(username, nickname)
            setIsPut(false)
        }
    }

    const changeIsPUt = () => {
        setIsPut(true)
    }

    useEffect(() => {
        if (isLogin) {
            getProfile()
        }
    }, [isLogin])

    return { profileData, totalPlayTime, putProfile, isPut, changeIsPUt }
}