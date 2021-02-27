import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(({ palette, typography }) => ({
  label: {
    fontSize: 16,
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: '0.5rem',
    fontFamily: typography.fontRegular,
    '&.error': {
      color: palette.error.main,
    },
  },
  tooltip: {
    width: 25,
    height: 25,
    display: 'flex',
    marginLeft: 10,
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.primary.main,
    '& svg g': {
      fill: '#fff',
    },
  },
  root: {
    marginBottom: '1.5rem',
    '& .MuiFormControl-root': {
      width: '100%',
      '& .MuiInputBase-root': {
        borderRadius: 10,
        '& input': {
          fontSize: 19,
          height: '2rem',
          padding: '12px 20px',
          color: palette.text.primary,
          fontFamily: typography.fontRegular,
        },
        '& .Mui-disabled': {
          backgroundColor: palette.grey[300],
          borderRadius: 10,
          color: palette.text.primary,
          fontFamily: typography.fontRegular,
        },
        '& fieldset': {
          top: 0,
          '& legend': {
            display: 'none',
          },
        },
        '& svg': {
          fill: palette.primary.main,
        },
      },
      '& .MuiFormHelperText-root': {
        right: -10,
        bottom: -20,
        fontSize: 12,
        position: 'absolute',
      },
    },
  },
}))
