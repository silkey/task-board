import React from "react"
import style from "./index.module.css"

export type CenterBoxProps = { children: JSX.Element }
export const CenterBox = (p: CenterBoxProps) => {
    return <div className={style.centerBox}>{p.children}</div>
}
