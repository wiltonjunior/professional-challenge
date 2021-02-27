import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  header: {
    position: 'relative',
    backgroundColor: '#fff',
    color: theme.palette.text.primary,
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',
    '@media print': {
      display: 'none',
    },
  },
  list: {
    width: '100%',
  },
  listItemText: {
    '& span': {
      padding: '15px 0',
      fontSize: '1.3rem',
      textAlign: 'right',
      cursor: 'pointer',
      color: theme.palette.text.primary,
      fontFamily: theme.typography.fontRegular,
    },
    '&.active': {
      '& span': {
        fontFamily: theme.typography.fontSemibold,
      },
    },
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5rem',
    '& h4': {
      marginLeft: 10,
      fontWeight: 'bold',
    },
  },
  root: {
    flexGrow: 1,
    zIndex: 100,
    position: 'relative',
    '@media print': {
      display: 'none',
    },
  },
}))
