import React from 'react'
import { useHistory } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { i18n } from '@UI/Translate'

import Typography from '@UI/Typography'

import useStyles from './styles.js'

export default function Header(props) {
  const classes = useStyles()
  const history = useHistory()

  const goTo = (link) => {
    history.push(link)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title}>
            <Typography>HEADER_LOGOUT</Typography>
          </div>
          <Button color="inherit">
            <Typography>HEADER_LOGOUT</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
