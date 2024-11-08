import { useEffect, useState } from "react"
import { GetFieldApi } from "../apis/getFieldApi"
import { fieldObject } from "../../constants/object"

export default function UseField(level, getResult) {
    const { object } = fieldObject()
    const [field, setField] = useState([[]])
    const [isFinish, setIsFinish] = useState(false)

    const gameFinish = () => {//ゲーム終了
        setIsFinish(true)
    }

    const handleKeyDown = (e) => {//十字キーの移動振り分け
        switch (e.key) {
            case "ArrowLeft":
                moveLeft()
                break;
            case "ArrowRight":
                moveRight()
                break;
            case "ArrowUp":
                moveUp()
                break;
            case "ArrowDown":
                moveDown()
                break;
        }
    }

    const moveLeft = () => {//左に動く関数
        setField(prevField => {
            const newField = structuredClone(prevField)
            for (let y = 0; y < newField.length - 1; y++) {
                for (let x = 1; x < newField[y].length; x++) {
                    //プレイヤーの位置を見つける
                    if (newField[y][x] == object.player) {
                        //先が空白だったらプレイヤーが移動
                        if (newField[y][x - 1] == object.none) {
                            newField[y][x] = object.none
                            newField[y][x - 1] = object.player
                        }//先がブロックの場合
                        else if (newField[y][x - 1] == object.block) {
                            //ブロックの先が空いていればブロックが移動
                            if (y >= 0 && x - 2 >= 0 && newField[y][x - 2] == object.none) {
                                newField[y][x - 1] = object.none
                                newField[y][x - 2] = object.block
                            }
                        } else if (newField[y][x - 1] == object.flag) {
                            gameFinish()
                        }
                    }
                }
            }
            return newField
        })
    }

    const moveRight = () => {//右に動く関数
        setField(prevField => {
            const newField = structuredClone(prevField)
            for (let y = 0; y < newField.length - 1; y++) {
                for (let x = newField[y].length - 2; x >= 0; x--) {
                    //プレイヤーの位置を見つける
                    if (newField[y][x] == object.player) {
                        //先が空白だったらプレイヤーが移動
                        if (newField[y][x + 1] == object.none) {
                            newField[y][x] = object.none
                            newField[y][x + 1] = object.player
                        }//先がブロックの場合
                        else if (newField[y][x + 1] == object.block) {
                            //ブロックの先が空いていればブロックが移動
                            if (y < newField.length && x + 2 < newField[y].length &&
                                newField[y][x + 2] == object.none) {
                                newField[y][x + 1] = object.none
                                newField[y][x + 2] = object.block
                            }
                        } else if (newField[y][x + 1] == object.flag) {
                            gameFinish()
                        }
                    }
                }
            }
            return newField
        })
    }

    const moveUp = () => {//上に動く関数
        setField(prevField => {
            const newField = structuredClone(prevField)
            for (let y = 1; y < newField.length - 1; y++) {
                for (let x = 0; x < newField[y].length; x++) {
                    //プレイヤーの位置を見つける
                    if (newField[y][x] == object.player) {
                        //先が空白だったらプレイヤーが移動
                        if (newField[y - 1][x] == object.none) {
                            newField[y][x] = object.none
                            newField[y - 1][x] = object.player
                        }//先がブロックの場合
                        else if (newField[y - 1][x] == object.block) {
                            //ブロックの先が空いていればブロックが移動
                            if (y - 2 >= 0 && x >= 0 && newField[y - 2][x] == object.none) {
                                newField[y - 1][x] = object.none
                                newField[y - 2][x] = object.block
                            }
                        } else if (newField[y - 1][x] == object.flag) {
                            gameFinish()
                        }
                    }
                }
            }
            return newField
        })
    }

    const moveDown = () => {//下に動く関数
        setField(prevField => {
            const newField = structuredClone(prevField)
            for (let y = newField.length - 2; y >= 0; y--) {
                for (let x = 0; x < newField[y].length; x++) {
                    //プレイヤーの位置を見つける
                    if (newField[y][x] == object.player) {
                        //先が空白だったらプレイヤーが移動
                        if (newField[y + 1][x] == object.none) {
                            newField[y][x] = object.none
                            newField[y + 1][x] = object.player
                        }//先がブロックの場合
                        else if (newField[y + 1][x] == object.block) {
                            //ブロックの先が空いていればブロックが移動
                            if (y + 2 < newField.length && x < newField[y].length &&
                                newField[y + 2][x] == object.none) {
                                newField[y + 1][x] = object.none
                                newField[y + 2][x] = object.block
                            }
                        } else if (newField[y + 1][x] == object.flag) {
                            gameFinish()
                        }
                    }
                }
            }
            return newField
        })
    }

    useEffect(() => {//レベルが変更されたらゲームスタート
        const getField = async () => {//フィールド取得
            if (level != 0) {
                const data = await GetFieldApi(level)
                setField(data)
            }
            getResult(level)
        }
        getField()
    }, [level])

    useEffect(() => {//キー押下時のバグ除去
        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    return { field, isFinish }
}