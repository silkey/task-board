import { MuiThemeProvider } from "@material-ui/core"
import { TaskCard } from "components/task-card"
import React from "react"
import { Jumbotron, Button } from "react-bootstrap"
import { theme } from "style/mui-theme"
import "./App.css"

const App = () => {
    // const sendMsg = () => {}
    // const modifyCard = () => {}`
    return (
        <MuiThemeProvider theme={theme}>
            <Jumbotron>
                <h1>What's Your Today's Plan?</h1>
            </Jumbotron>
            <div className="animate__animated animate__fadeInDown">
                <TaskCard />
            </div>
            <Button>I'm React Bootstrap Button</Button>
            <Button bsPrefix="my-btn">by bsPrefix</Button>
        </MuiThemeProvider>
    )
}

export default App
