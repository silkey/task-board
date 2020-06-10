import React from "react"
import { FadeInDown } from "components/@anim"
import { TaskCard } from "components/task-card"

export type HomePageProps = {}
export const HomePage = (p: HomePageProps) => {
    return (
        <div>
            <FadeInDown>
                <TaskCard />
            </FadeInDown>
        </div>
    )
}
