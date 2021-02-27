import React from 'react'

import Typography from '@UI/Typography'

import useStyles from './styles.js'

export default function Header() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.text}>FOOTER_TITLE</Typography>
    </div>
  )
}
