import React from "react"
import { FadeInDown } from "components/@anim"
import { TaskCard } from "components/task-card"
import { Box, Paper } from "@material-ui/core"
import { pageStyle } from "global.style"

export type HomePageProps = {}
export const HomePage = (p: HomePageProps) => {
    return (
        <Paper classes={pageStyle()}>
            <Box pt={10}>
                <FadeInDown>
                    <TaskCard />
                </FadeInDown>
            </Box>
        </Paper>
    )
}
