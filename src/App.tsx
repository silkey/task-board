import { AppBar, MuiThemeProvider, Toolbar } from "@material-ui/core"
import { TaskCard } from "components/task-card"
import React from "react"
import { theme } from "style/mui-theme"
import "./App.css"
import { FadeInDown } from "components/@anim"

const App = () => {
    window.addEventListener("hashchange", () => console.log("hashChanged"))
    return (
        <MuiThemeProvider theme={theme}>
            <AppBar>
                <Toolbar></Toolbar>
            </AppBar>
            <FadeInDown>
                <TaskCard />
            </FadeInDown>
        </MuiThemeProvider>
    )
}

export default App
