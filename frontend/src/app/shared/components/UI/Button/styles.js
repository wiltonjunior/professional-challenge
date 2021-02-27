import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(({ palette, typography }) => ({
  button: {
    fontSize: 16,
    borderRadius: 10,
    minWidth: '12rem',
    width: 'fit-content',
    padding: '6px 25px',
    fontFamily: typography.fontSemiBold,
    '&.Mui-disabled': {
      color: palette.common.white,
      backgroundColor: palette.grey[400],
    },
  },
  wrapper: {
    display: 'inline',
    position: 'relative',
  },
  buttonProgress: {
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
    position: 'absolute',
    color: palette.secondary.main,
  },
  icon: {
    '& .Icon': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}))
