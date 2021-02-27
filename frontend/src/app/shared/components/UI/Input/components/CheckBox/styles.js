import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(({ palette, typography }) => ({
  root: {
    '& .MuiFormHelperText-root': {
      color: 'red',
    },
  },
}))
