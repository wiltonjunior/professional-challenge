import { createMuiTheme } from '@material-ui/core/styles'

const palette = {
  primary: {
    main: '#3498db',
    strong: '#2980b9',
  },
  grey: {
    150: '#F8F8F8',
    250: '#d9d9d9',
    350: '#f1f2f6'
  },
  text: {
    white: '#fff',
    black: '#000',
    title: '#4D4D4D',
    subtitle: '#1A1A1A',
    main: '#707070',
  },
}

const typography = {
  fontBold: 'Cambria',
  fontThin: 'Cambria',
  fontBlack: 'Cambria',
  fontLight: 'Cambria',
  fontItalic: 'Cambria',
  fontMedium: 'Cambria',
  fontRegular: 'Cambria',
  fontSemibold: 'Cambria',
  fontExtrabold: 'Cambria',
  fontExtraLight: 'Cambria',
}

const theme = createMuiTheme({
  palette,
  typography,
  overrides: {
    MuiButton: {
      text: {
        color: palette.text.white,
        textTransform: 'capitalize',
        background: palette.primary.main,
        fontFamily: typography.fontSemibold,
        '&:hover': {
          background: palette.primary.strong,
        },
      },
      outlined: {
        color: palette.primary.main,
        borderColor: palette.primary.main,
        fontFamily: typography.fontMedium,
      },
    },
  },
})

export default theme
