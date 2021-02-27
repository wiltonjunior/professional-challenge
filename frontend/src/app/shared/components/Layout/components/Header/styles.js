import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  info: {
    '& p': {
      margin: 0,
      textAlign: 'right',
      '&:first-child': {
        fontSize: 18
      },
      '&:last-child': {
        fontSize: 12
      }
    }
  }
}))
