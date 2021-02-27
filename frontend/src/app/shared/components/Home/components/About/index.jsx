import React from 'react'

import Icon from '@UI/Icon'
import Button from '@UI/Button'
import Typography from '@UI/Typography'

import useStyles from './styles.js'

export default function About() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.content}>
          <Icon className={classes.calculator} name="calculator" />
          <Typography variant="h3">HOME_ABOUT_TITLE</Typography>
          <Typography>HOME_ABOUT_SUBTITLE</Typography>
        </div>
        <div className={classes.action}>
          <Button href="/about" >HOME_ABOUT_BUTTON_KNOW_MORE</Button>
          {/* <Button color="secondary">HOME_ABOUT_BUTTON_GUIDE</Button> */}
        </div>
      </div>
    </div>
  )
}
