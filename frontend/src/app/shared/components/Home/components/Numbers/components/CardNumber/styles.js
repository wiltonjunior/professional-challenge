import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(({ palette, typography }) => ({
  root: {},
  text: {
    fontSize: '1.2rem',
    textAlign: 'center',
    color: palette.text.primary,
    fontFamily: typography.fontRegular,
  },
  number: {
    fontSize: '3rem',
    textAlign: 'center',
    color: palette.primary.main,
    fontFamily: typography.fontSemibold,
    '& span': {
      marginRight: '0.5rem',
    },
  },
}))
