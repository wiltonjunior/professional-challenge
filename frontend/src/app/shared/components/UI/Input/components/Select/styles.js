import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(({ palette, typography }) => ({
  root: {
    '& .MuiSelect-root': {
      padding: 15,
      fontSize: 18,
      color: palette.text.primary,
      fontFamily: typography.fontRegular,
    },
    '& .MuiFormHelperText-root': {
      color: 'red',
      right: '0px !important',
    },
  },
}))
