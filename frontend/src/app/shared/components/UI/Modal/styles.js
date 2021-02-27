import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(({ palette, typography }) => ({
  root: {
    '& .MuiPaper-root': {
      width: "100%",
      padding: '0rem',
      minWidth: '60rem',
      position: 'relative',
      backgroundColor: palette.common.white,
    }
  },
  header: {
    padding: '1.5rem',
    marginBottom: '2rem',
    borderBottom: `solid 1px ${palette.grey[400]}` 
  },
  close: {
    top: 15,
    right: 25,
    position: 'absolute',
    '& svg': {
      fill: palette.text.title
    }
  },
  title: {
    textAlign: 'center',
    color: palette.primary.main,
    '& h3': {
      fontSize: '2.5rem',
      fontFamily: typography.fontSemibold,
    }
  },
  body: {
    padding: '0 1.5rem',
  },
  footer: {
    display: 'flex',
    padding: '1.5rem',
    alignItems: 'cemter',
    justifyContent: 'space-between',
    borderTop: `solid 1px ${palette.grey[400]}` 
  }
}))
