import { useEffect, useRef, useState } from 'react'
import './App.css'
import { useLogin } from './hooks/useLogin'
import Login from './components/login/login'
import Select from './components/select/select'
import UseField from './hooks/useField'
import { Game } from './components/game/game'
import { UseResult } from './hooks/useResult'

function App() {
  const [scene, setScene] = useState("login")
  const [level, setLevel] = useState(0)
  const { ranking, getResult, putResult } = UseResult()
  const { isLogin, login, logout } = useLogin(sceneChange)
  const { field, isFinish } = UseField(level, getResult)

  const changeLevel = (level) => {//ゲームのレベル変更
    setLevel(level)
  }

  useEffect(() => {//ログインしてたら選択画面に遷移
    if (isLogin) {
      setScene("select")
    }
  }, [isLogin])

  function sceneChange(scene) {//画面遷移
    setScene(scene)
  }

  return (
    <>
      {scene == "login" && <Login login={login}></Login>}
      {scene == "select" &&
        <Select sceneChange={sceneChange}
          logout={logout} isLogin={isLogin} changeLevel={changeLevel}></Select>}
      {scene == "game" &&
        <Game field={field} isFinish={isFinish} ranking={ranking}
          putResult={putResult} level={level}></Game>}
    </>
  )
}

export default App
