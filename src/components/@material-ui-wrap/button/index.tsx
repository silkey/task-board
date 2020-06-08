import React from "react"
import { Button } from "@material-ui/core"

export type CusButtonProps = { children: string }
export const CusButton = (p: CusButtonProps) => {
    return <Button>{p.children}</Button>
}
