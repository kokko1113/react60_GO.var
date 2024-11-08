import { Cell } from "../cell/cell"
import "./field.css"
export default function Field({ field, time }) {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    
    return (
        <>
            <h2>{minutes}:{seconds<10?"0"+String(seconds):seconds}</h2>
            <div className="field">
                {field.map((row, y) => {
                    return <div className="row">
                        {row.map((cell, x) => {
                            return <Cell cell={cell}></Cell>
                        })}
                    </div>
                })}
            </div>
        </>
    )
}