import { useEffect, useRef, useState } from "react"
import Field from "../field/field"
import { Result } from "../result/result"

export const Game = ({ field, isFinish, ranking, putResult, level }) => {
    const [time, setTime] = useState(0)
    const timeId = useRef()

    useEffect(() => {//秒数カウント
        if (isFinish) {//クリアしたらカウント止める
            clearInterval(timeId.current)
            putResult(level, time)
        } else {
            timeId.current = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000);
            return () => {
                clearInterval(timeId.current)
            }
        }

    }, [isFinish])

    return (
        <>
            {!isFinish ?
                <Field field={field} time={time}></Field>
                :
                <Result ranking={ranking}></Result>
            }
        </>
    )
}