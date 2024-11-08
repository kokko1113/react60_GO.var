import "./result.css"

export const Result = ({ ranking }) => {

    return (
        <>
            <h1>Congratulations!</h1>
            <table>
                {
                    ranking.map((rank, index) => {
                        return <tr className={rank.username == sessionStorage.getItem("username") ? "active" : ""}>
                            <td>{index < 3 ? index + 1+"." : ""}　</td>
                            <td>{rank.username}　</td>
                            <td>{Math.floor(rank.time / 60)}:
                                {rank.time % 60 < 10 ? "0" + String(rank.time % 60) : rank.time % 60}</td>
                        </tr>
                    })
                }
            </table>
            <button onClick={() => window.location.reload()}>replay</button>
        </>
    )
}