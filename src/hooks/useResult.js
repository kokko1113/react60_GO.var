import { useState } from "react"
import { GetResultApi, PutResultApi } from "../apis/resultApi"

export const UseResult = () => {
    const [ranking, setRanking] = useState([])

    const getResult = async (level) => {
        const data = await GetResultApi(level)
        const sortData = data.sort((a, b) => a.time - b.time)
        const sliceData=[]
        for(let i=0;i<sortData.length;i++){
            if(sliceData.length<3){
                sliceData.push(sortData[i])
            }else if(sortData[i].time==sortData[i-1].time){
                sliceData.push(sortData[i])
            }
        }
        setRanking(sliceData)
    }

    const putResult = async (level, time) => {
        const data = await PutResultApi(level, time)
        if(data.success){
            alert("投稿が完了しました")
        }else{
            alert("エラーが発生しました")
        }
    }

    return { ranking, getResult, putResult }
}