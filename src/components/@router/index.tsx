import React from "react"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"

export type NavigatorConf = {
    path: string
    component: JSX.Element
}
export type NavigatorProps = {
    conf: NavigatorConf[]
}
export const Navigator = (p: NavigatorProps) => {
    return (
        <BrowserRouter>
            {p.conf.map((x) => (
                <Link to={x.path}></Link>
            ))}
            <Switch>
                {p.conf.map((x) => (
                    <Route path={x.path}>{x.component}</Route>
                ))}
            </Switch>
        </BrowserRouter>
    )
}
