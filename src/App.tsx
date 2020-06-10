import { AppBar, MuiThemeProvider, Toolbar } from "@material-ui/core"
import { Navigator, NavigatorConf } from "components/@router"
import React from "react"
import { theme } from "style/mui-theme"
import "./App.css"
import { HomePage } from "pages/home"
import { AboutPage } from "pages/about"

const App = () => {
    const navConf: NavigatorConf[] = [
        { path: "/", component: <HomePage /> },
        { path: "/About", component: <AboutPage /> },
    ]
    return (
        <MuiThemeProvider theme={theme}>
            <AppBar>
                <Toolbar>
                    <Navigator conf={navConf} />
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    )
}

export default App
