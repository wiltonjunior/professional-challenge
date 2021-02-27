import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'

import Login from '@UI/Login'
import Image from '@UI/Image'
import Button from '@UI/Button'
import Typography from '@UI/Typography'

import useStyles from './styles.js'

import banner from '@icons/banner.svg'

export default function Banner() {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid className={classes.content} item xs={5}>
          <div className={classes.text}>
            <Typography variant="h1">HOME_BANNER_TITLE</Typography>
            <Typography variant="h6">HOME_BANNER_SUBTITLE</Typography>
          </div>
          <Button onClick={toggle} className={classes.action}>
            HOME_BANNER_BUTTON
          </Button>
        </Grid>
        <Grid className={classes.image} item xs>
          <Image src={banner} />
        </Grid>
      </Grid>
      <Login open={open} close={toggle} />
    </div>
  )
}
