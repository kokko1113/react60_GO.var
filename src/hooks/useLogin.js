import { useEffect, useState } from "react"
import { LoginApi } from "../apis/loginApi";
import { LogoutApi } from "../apis/logoutApi";

export const useLogin = (sceneChange) => {
    const [isLogin, setIsLogin] = useState(false)

    const login = (username, password) => {
        const check = async () => {
            const data = await LoginApi(username, password)
            if (data.token) {
                sessionStorage.setItem("token", data.token);
                sessionStorage.setItem("username", username);
                setIsLogin(true)
                return;
            }
            return alert("The username or password is incorrect.")
        }
        check()
    }

    const logout = () => {
        const check = async () => {
            const data = await LogoutApi()
            if (data.success) {
                setIsLogin(false)
                sceneChange("login")
                sessionStorage.removeItem("token")
                sessionStorage.removeItem("username")
            }
        }
        check()
    }

    useEffect(() => {//既にログインしているならログインスキップ
        if (sessionStorage.getItem("token")) {
            setIsLogin(true);
        } else {
            return setIsLogin(false)
        }
    }, [])
    return { isLogin, login, logout }
}