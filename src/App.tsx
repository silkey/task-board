import { TaskCard } from "components/task-card"
import React from "react"
import { Jumbotron } from "react-bootstrap"
import "./App.css"

const App = () => {
    // const sendMsg = () => {}
    // const modifyCard = () => {}
    return (
        <div>
            <Jumbotron>
                <h1>What's Your Today's Plan?</h1>
            </Jumbotron>
            <div className="animate__animated animate__fadeInDown">
                <TaskCard />
            </div>
        </div>
    )
}

export default App
