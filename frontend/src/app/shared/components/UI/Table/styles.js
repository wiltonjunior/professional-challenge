import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    padding: 20,
    width: '100%',
  },
  empty: {
    padding: '3rem',
    textAlign: 'center'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
}));
