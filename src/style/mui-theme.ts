import { createMuiTheme } from "@material-ui/core"

export const theme = createMuiTheme(
  {
    typography: {
      fontFamily: ''
    },
    palette: {
      primary: {
        main: '#54C678',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#C95454',
        contrastText: '#ffffff'
      },
    },
    overrides: {
      MuiButton: {
        root: {
          '&:focus': {
            outline: 'none'
          }
        }
      }
    },
    mixins: {

    }
  }
)

