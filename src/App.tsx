import { AppBar, Box, Button, MuiThemeProvider, Toolbar } from "@material-ui/core"
import { SearchField } from "components/search-field"
import ThemeToggle from "components/theme-toggle"
import { AboutPage } from "pages/about"
import { HomePage } from "pages/home"
import React from "react"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import { useCurrentTheme } from "style/useTheme"
import "./App.css"

type NavigatorConf = {
    path: string
    name: string
    component: JSX.Element
}

const App = () => {
    const navConf: NavigatorConf[] = [
        { path: "/", component: <HomePage />, name: "HOME" },
        { path: "/About", component: <AboutPage />, name: "ABOUT" },
    ]

    const theme = useCurrentTheme()

    return (
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <AppBar>
                    <Toolbar>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            width="100%"
                        >
                            <Box>
                                {navConf.map((x) => (
                                    <Button key={x.name} color="secondary">
                                        <Link
                                            style={{ color: theme.palette.text.primary }}
                                            to={x.path}
                                        >
                                            {x.name}
                                        </Link>
                                    </Button>
                                ))}
                            </Box>
                            <ThemeToggle />
                            <SearchField />
                        </Box>
                    </Toolbar>
                </AppBar>
                <Switch>
                    {navConf.map((x) => (
                        <Route key={x.name} exact path={x.path}>
                            {x.component}
                        </Route>
                    ))}
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    )
}

export default App
