import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(({ palette, typography }) => ({
  root: {
    '& .MuiPaper-root': {
      width: '100%',
      padding: '3rem',
      borderRadius: 30,
      minWidth: '40rem',
      position: 'relative',
      backgroundColor: palette.common.white,
    },
  },
  close: {
    top: 25,
    right: 25,
    position: 'absolute',
    '& svg': {
      fill: palette.text.title,
    },
  },
  title: {
    textAlign: 'center',
    marginBottom: '1rem',
    color: palette.primary.main,
    fontFamily: typography.fontSemibold,
    '& h3': {
      fontSize: '2rem',
      fontFamily: typography.fontRegular,
    },
  },
  body: {
    padding: '2rem',
    textAlign: 'center',
    '& p': {
      fontSize: '1.2rem',
    },
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& button': {
      minWidth: '10rem',
    },
  },
}))
