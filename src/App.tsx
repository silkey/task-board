import { AppBar, MuiThemeProvider } from "@material-ui/core"
import { TaskCard } from "components/task-card"
import React from "react"
import { theme } from "style/mui-theme"
import "./App.css"

const App = () => {
    // const sendMsg = () => {}
    // const modifyCard = () => {}`
    return (
        <MuiThemeProvider theme={theme}>
            <AppBar></AppBar>
            <div className="animate__animated animate__fadeInDown">
                <TaskCard />
            </div>
        </MuiThemeProvider>
    )
}

export default App
