import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240;

export default makeStyles((theme) => ({
  main: {
    padding: '2rem',
    minHeight: 'calc(100vh - 100px)',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: {
    minHeight: 64,
    fontSize: 16,
    display: 'flex',
    fontWeight: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  }
}))
