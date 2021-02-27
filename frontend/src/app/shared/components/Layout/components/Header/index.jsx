import React, { useEffect, useState } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@UI/Typography'

import useStyles from './styles.js'

export default function Header(props) {
  const classes = useStyles()

  const [title, setTitle] = useState('')

  useEffect(() => {
    const { pathname } = props.location;
    const value = pathname.substring(1);
    setTitle(`router_${value}`.toUpperCase())
  }, [props.location])

  const object = props.user() || {}

  const { user = {} } = object;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title}>
            <Typography>{title}</Typography>
          </div>
          <div className={classes.info}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
