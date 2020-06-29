import { clone } from "ramda"
import { baseTheme } from "./base-theme"

export const darkTheme = clone(baseTheme)
darkTheme.overrides = {
  ...darkTheme.overrides,
  MuiCard: {
    root: {
      backgroundColor: '#322D4E'
    }
  },
}

darkTheme.palette = {
  ...darkTheme.palette,
  type: 'dark',
  primary: {
    main: '#8780C6',
  },
  secondary: {
    main: '#A9A2CA',
  },
  text: {
    primary: '#ffffff'
  }
}
