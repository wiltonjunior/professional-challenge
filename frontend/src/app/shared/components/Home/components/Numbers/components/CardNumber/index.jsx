import React from 'react'

import Typography from '@material-ui/core/Typography'

import Translate from '@UI/Translate'
import Unity from '@UI/Unity'

import useStyles from './styles.js'

export default function CardNumber(props) {
  const classes = useStyles()
  const { item } = props
  return (
    <div className={classes.root}>
      <div className={classes.number}>
        <span>{item.value}</span>
        <Unity type={item.unit} />
      </div>
      <Typography className={classes.text} variant="subtitle1">
        <Translate>{item.description}</Translate>
      </Typography>
    </div>
  )
}
