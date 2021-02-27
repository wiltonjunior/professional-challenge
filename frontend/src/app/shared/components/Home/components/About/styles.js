import { makeStyles } from '@material-ui/core/styles';

import project from '@images/project.png'

export default makeStyles(({ palette, typography }) => ({
  root: {
    display: 'flex',
    marginTop: '2rem',
    minHeight: '65rem',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${project})`,
  },
  main: {
    top: '-5rem',
    position: 'relative',
  },
  calculator: {
    display: 'block',
    marginBottom: '2rem',
    '& svg path': {
      fill: palette.common.white
    }
  },
  content: {
    textAlign: 'center',
    '& h3': {
      color: palette.primary.main,
      fontFamily: typography.fontSemibold,
    },
    '& p': {
      margin: '0 10rem',
      marginTop: '1.4rem',
      textAlign: 'center',
      marginBottom: '3rem',
      fontSize: '1.6rem',
      color: palette.common.white,
      fontFamily: typography.fontRegular,
    }
  },
  action: {
    marginTop: '4rem',
    textAlign: 'center',
    '& button': {
      marginLeft: 30
    }
  }
}));