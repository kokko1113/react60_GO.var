import { useEffect, useState } from "react"
import { UseProfile } from "../../hooks/useProfile"
import { PutProfile } from "../putProfile/putProfile"

export default function Select({ sceneChange, logout, isLogin,changeLevel }) {
    const { profileData, totalPlayTime, putProfile, isPut,changeIsPUt } = UseProfile(isLogin)

    const gameStart=(level)=>{
        changeLevel(level)
        sceneChange("game")
    }

    return (
        <>
            {!isPut ?
                <div>
                    <h1>Welcome,{profileData.nickname}!</h1>
                    <h3>your total play time is {Math.floor(totalPlayTime / 60)}</h3>
                    <button onClick={()=>changeIsPUt()}>profile settings</button>
                    <button onClick={() => logout()}>logout</button>
                    <button onClick={() => {
                        gameStart(1)
                    }}>easy</button>
                    <button onClick={() => {
                        gameStart(2)
                    }}>normal</button>
                </div>
                :
                <PutProfile putProfile={putProfile} profileData={profileData}></PutProfile>
            }
        </>
    )
}