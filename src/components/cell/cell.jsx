import "./cell.css"
export const Cell = ({ cell }) => {
    return (
        <>
            <div className={`cell 
            ${cell == 1 ? "wall" : ""}
            ${cell == 3 ? "block" : ""}
            `}>
                {cell == 2 ? "😊" : ""}
                {cell == 4 ? "🚩" : ""}
            </div>
        </>
    )
}