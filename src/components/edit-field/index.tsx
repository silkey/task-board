import { CenterBox } from "components/@layout/centerBox"
import React, { useState } from "react"
import { FormControl } from "react-bootstrap"
import { Key } from "ts-keycode-enum"
import style from "./index.module.css"

export type EditFieldProps = {
    value: string
    placeholder?: string
    onChange: (value: string) => any
    children: JSX.Element
}
export const EditField = (p: EditFieldProps) => {
    const [modifying, setModifying] = useState(false)
    return (
        <div className={style.editField}>
            <CenterBox>
                {modifying ? (
                    <FormControl
                        autoFocus
                        value={p.value}
                        onBlur={() => setModifying(false)}
                        onChange={(e) => p.onChange(e.target.value)}
                        // @ts-ignore
                        onKeyUp={(e) => (e.keyCode === Key.Enter ? setModifying(false) : undefined)}
                        placeholder={p.placeholder}
                    />
                ) : (
                    <div onClick={() => setModifying(true)}>{p.children}</div>
                )}
            </CenterBox>
        </div>
    )
}
