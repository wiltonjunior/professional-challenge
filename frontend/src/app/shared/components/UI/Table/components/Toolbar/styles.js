import { makeStyles, lighten } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'block',
  },
  main: {
    width: '100%',
    display: 'flex',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  selectHeader: {
    padding: 10,
    margin: '10px 0',
    color: theme.palette.primary.main,
    backgroundColor: lighten(theme.palette.secondary.light, 0.85),
  },
  selectTitle: {
    flex: '1 1 100%',
  },
  searchIcon: {
    color: theme.palette.text.secondary
  }
}));
