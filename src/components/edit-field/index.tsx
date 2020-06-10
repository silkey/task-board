import { TextField, Typography } from "@material-ui/core"
import { Variant } from "@material-ui/core/styles/createTypography"
import { CenterBox } from "components/@layout/centerBox"
import React, { useState } from "react"
import { emptyThen } from "utils/funcs"
import style from "./index.module.css"

export type EditFieldProps = {
    multiline?: boolean
    labelDefault: string
    labelVariant: Variant | "inherit"
    value: string
    placeholder?: string
    onChange: (value: string) => any
}
export const EditField = (p: EditFieldProps) => {
    const [modifying, setModifying] = useState(false)
    return (
        <div className={style.editField}>
            <CenterBox>
                {modifying ? (
                    <TextField
                        multiline={p.multiline}
                        fullWidth
                        autoFocus
                        value={p.value}
                        onBlur={() => setModifying(false)}
                        onChange={(e) => p.onChange(e.target.value)}
                        // @ts-ignore
                        // onKeyUp={(e) => (e.keyCode === Key.Enter ? setModifying(false) : undefined)}
                        placeholder={p.placeholder}
                    />
                ) : (
                    <div>
                        <Typography onClick={() => setModifying(true)} variant={p.labelVariant}>
                            {emptyThen(p.value, p.labelDefault)}
                        </Typography>
                    </div>
                )}
            </CenterBox>
        </div>
    )
}
