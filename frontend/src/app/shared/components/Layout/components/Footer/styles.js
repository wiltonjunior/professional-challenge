import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ palette }) => ({
  root: {
    '@media print': {
      display: 'none',
    },
  },
  toolbar: {
    padding: '2rem 0',
    boxShadow: 'none',
    color: palette.common.white,
    backgroundColor: palette.secondary.main
  },
  logo: {
    textAlign: 'center',
    '& svg path': {
      fill: palette.common.white,
    },
    '& h4': {
      marginLeft: 10,
      fontWeight: 'bold',
    }
  },
  list: {
    padding: 0,
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  text: {
    textAlign: 'center',
  },
  listItemText: {
    cursor: 'pointer',
    '& span': {
      padding: '15px 0',
      fontSize: '1.2rem',
      textAlign: 'center',
      fontWeight: '500',
      color: palette.common.white
    }
  },
}));