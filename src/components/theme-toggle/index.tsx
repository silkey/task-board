import Brightness4Icon from "@material-ui/icons/Brightness4"
import Brightness7Icon from "@material-ui/icons/Brightness7"
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { ActionType, ThemeAction } from "data/action"
import { StoreType, Theme } from "data/store"

export type ThemToggleProps = {}

const ThemeToggle = (p: ThemToggleProps) => {
    const dispatch = useDispatch()
    const theme = useSelector<StoreType, Theme>((s) => s.theme)
    const setTheme = (theme: Theme) =>
        dispatch<ThemeAction>({ type: ActionType.changeTheme, theme })
    return (
        <div>
            <ToggleButtonGroup value={theme}>
                <ToggleButton value="dark" onClick={() => setTheme("dark")}>
                    <Brightness4Icon />
                </ToggleButton>
                <ToggleButton value="light" onClick={() => setTheme("light")}>
                    <Brightness7Icon />
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}

export default ThemeToggle
