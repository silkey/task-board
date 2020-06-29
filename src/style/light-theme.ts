import { clone } from "ramda"
import { baseTheme } from "./base-theme"

export const lightTheme = clone(baseTheme)
lightTheme.overrides = {
  ...lightTheme.overrides,
  MuiCard: {
    root: {
      backgroundColor: '#F7ECE1'
    }
  },
}

lightTheme.palette = {
  ...lightTheme.palette,
  type: 'light',
  primary: {
    main: '#A8DADC',
  },
  secondary: {
    main: '#F1FAEE',
  },
  text: {
    primary: '#000000'
  }
}
