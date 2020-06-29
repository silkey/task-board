import { Box, Paper } from "@material-ui/core"
import { FadeInDown } from "components/@anim"
import { TaskCard } from "components/task-card"
import { pageStyle } from "global.style"
import React from "react"

export type HomePageProps = {}
export const HomePage = (p: HomePageProps) => {
    return (
        <Paper classes={pageStyle()}>
            <Box pt={10} pl={2} pr={2}>
                <FadeInDown>
                    <TaskCard />
                </FadeInDown>
            </Box>
        </Paper>
    )
}
