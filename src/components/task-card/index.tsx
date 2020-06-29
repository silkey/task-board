import {
    Button,
    ButtonGroup,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    TextField,
    Box,
} from "@material-ui/core"
import { Skeleton } from "@material-ui/lab"
import React, { useState } from "react"

const useStyle = makeStyles({
    root: {
        maxWidth: "400px",
        paddingBottom: "20px",
    },
    media: {
        width: "400px",
        height: "200px",
    },
    maxWidth: {
        maxWidth: "400px",
    },
})

export type TaskCardProps = {}
export const TaskCard = (p: TaskCardProps) => {
    const classes = useStyle()
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [mediaReady, setMediaReady] = useState(false)
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media}>
                <img
                    style={mediaReady ? {} : { display: "none" }}
                    onLoad={() => setMediaReady(true)}
                    src="https://picsum.photos/400/200"
                    alt="just a img for good looking"
                />
                <Skeleton
                    style={!mediaReady ? {} : { display: "none" }}
                    animation="wave"
                    variant="rect"
                    width={400}
                    height={200}
                />
            </CardMedia>
            <CardContent>
                <TextField
                    fullWidth
                    label="Title"
                    placeholder="Give it a name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Box mb={1} />
                <TextField
                    multiline
                    fullWidth
                    label="Description"
                    placeholder="How do you plan it?"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
            </CardContent>
            <CardActions>
                <ButtonGroup>
                    <Button variant="contained" color="primary">
                        resolve
                    </Button>
                    <Button variant="contained" color="secondary">
                        cancel
                    </Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    )
}
