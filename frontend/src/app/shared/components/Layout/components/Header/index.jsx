import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import Typography from '@UI/Typography'

import useStyles from './styles.js'

export default function Header(props) {
  const classes = useStyles()
  const history = useHistory()

  const [title, setTitle] = useState('')

  useEffect(() => {
    const { pathname } = props.location;
    const value = pathname.substring(1);
    setTitle(`router_${value}`.toUpperCase())
  }, [props.location])

  const goTo = (link) => {
    history.push(link)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title}>
            <Typography>{title}</Typography>
          </div>
          <Button onClick={() => goTo('/login')} color="inherit">
            <Typography>HEADER_LOGOUT</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
