import { ThemeOptions } from "@material-ui/core"
import { Theme } from "data/store"

export const theme: ThemeOptions = {
  typography: {
    fontFamily: ''
  },
  overrides: {
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

export const darkTheme: ThemeOptions = {
  ...theme,
  palette: {
    type: 'dark',
    primary: {
      main: '#1D3557',
    },
    secondary: {
      main: '#457B9D',
    },
    text: {
      primary: '#ffffff'
    }
  }
}

export const lightTheme: ThemeOptions = {
  ...theme,
  palette: {
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
}

export const themeSelector = (theme: Theme) => {
  switch (theme) {
    case 'dark': return darkTheme
    case 'light': return lightTheme
    default: return theme
  }
}
