import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({palette, typography}) => ({
  root: {
    marginTop: '4rem'
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    width: '100%',
    maxWidth: '26rem',
    '& h1': {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: palette.text.title
    },
    '& h6': {
      marginTop: '1rem',
      color: palette.text.subtitle,
      fontFamily: typography.fontRegular
    }
  },
  action: {
    marginTop: '4rem',
    minWidth: '12rem'
  }
}));