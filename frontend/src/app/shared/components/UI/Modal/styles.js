import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(({ palette, typography }) => ({
  root: {
    '& .MuiPaper-root': {
      width: "100%",
      padding: '4rem',
      borderRadius: 30,
      minWidth: '60rem',
      position: 'relative',
      backgroundColor: palette.common.white,
    }
  },
  close: {
    top: 25,
    right: 25,
    position: 'absolute',
    '& svg': {
      fill: palette.text.title
    }
  },
  title: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: palette.primary.main,
    '& h3': {
      fontSize: '2.5rem',
      fontFamily: typography.fontSemibold,
    }
  },
  main: {
  },
}))
