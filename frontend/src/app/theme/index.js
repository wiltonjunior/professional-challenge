import { createMuiTheme } from '@material-ui/core/styles'

const palette = {
  primary: {
    main: '#3498db',
    strong: '#2980b9',
  },
  secondary: {
    main: '#bdc3c7',
    strong: '#3d3c3c',
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
  fontFamily: "'Cambria', 'Cochin', 'Georgia', 'Times', 'Times New Roman', 'serif'",
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
        background: palette.primary.main,
        fontFamily: typography.fontSemibold,
        '&:hover': {
          background: palette.primary.strong,
        },
      },
      textSecondary: {
        color: palette.text.white,
        backgroundColor: palette.secondary.main,
        fontFamily: typography.fontSemibold,
        '&:hover': {
          backgroundColor: palette.secondary.strong,
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
