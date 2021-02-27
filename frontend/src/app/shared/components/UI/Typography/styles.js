import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ palette, typography }) => ({
  root: {

  },
  text: {
    '& p': {
      fontSize: '1.4rem',
      marginBottom: '2rem',
      color: palette.text.title,
      fontFamily: typography.fontRegular,
    }
  },
  header: {
    marginBottom: '2rem',
    '& h3': {
      fontSize: '2.4rem',
      marginBottom: '.5rem',
      color: palette.text.title,
      fontFamily: typography.fontRegular
    },
    '& h5': {
      fontSize: '1.4rem',
      color: palette.primary.main,
      fontFamily: typography.fontRegular
    }
  }
}));