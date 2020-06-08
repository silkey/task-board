import { EditField } from "components/edit-field"
import React, { useState } from "react"
import { Card } from "react-bootstrap"
import { Button } from "@material-ui/core"
import { emptyThen } from "utils/funcs"

export type TaskCardProps = {}
export const TaskCard = (p: TaskCardProps) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    return (
        <div>
            <Card>
                <Card.Img className="card__img" variant="top" src="https://picsum.photos/400/200" />
                <Card.Body>
                    <EditField placeholder="Give it a name" value={title} onChange={setTitle}>
                        <h3>{emptyThen(title, "Title")}</h3>
                    </EditField>
                    <EditField placeholder="How do you plan it?" value={desc} onChange={setDesc}>
                        <p>{emptyThen(desc, "Do something")}</p>
                    </EditField>
                    <Button variant="contained" color="primary">
                        resolve
                    </Button>
                    <Button variant="contained" color="secondary">
                        cancel
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
