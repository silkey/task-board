import { ThemeOptions } from "@material-ui/core/styles"

export const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: ''
  },
  overrides: {
    MuiInputAdornment: {
      root: {
        alignItems: 'flex-end'
      }
    },
    MuiTextField: {
      root: {
        '&focus': {
          outline: 'none'
        }
      }
    },
    MuiButtonBase: {
      root: {
        '&:focus': {
          outline: 'none'
        }
      }
    }
  }
}
