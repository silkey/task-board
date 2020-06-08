import React from "react"
import style from "./index.module.css"

export type RowProps = {
    children: JSX.Element[]
}
export const Row = (p: RowProps) => {
    return <div className={style.row}>{p.children}</div>
}
