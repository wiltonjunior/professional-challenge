import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: palette.grey[150],
  },
  loginForm: {
    width: 400,
    height: 300,
    padding: 20,
    display: "flex",
    borderRadius: 5,
    marginTop: "3rem",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: '#fff',
    boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)'
  },
  button: {
    margin: '0 auto'
  },
  title: {
    marginBottom: 20,
    textAlign: 'center'
  },
  footerMark: {
    bottom: 30,
    position: 'absolute',
  },
}));

export default useStyles