import { createMuiTheme } from '@material-ui/core/styles'
import { getStyles }      from 'core/libs/lib-style-helpers'

const colors = getStyles([
  'error',
  'primary',
  'secondary'
])

const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
    },
    error: {
      main: colors.error
    }
  },
  typography: {
    useNextVariants: true
  }
})

export default theme
