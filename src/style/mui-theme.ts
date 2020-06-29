import { Theme } from "data/store"
import { darkTheme } from "./dark-theme"
import { lightTheme } from "./light-theme"

export const themeSelector = (theme: Theme) => {
  switch (theme) {
    case 'dark': return darkTheme
    case 'light': return lightTheme
    default: return theme
  }
}
