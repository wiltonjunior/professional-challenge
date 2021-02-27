import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'

import Title from '@UI/Title'
import Axios from '@UI/Axios'
import CardNumber from './components/CardNumber'

import useStyles from './styles.js'

export default function Numbers() {
  const classes = useStyles()
  const [list, setList] = useState([])

  const onSuccess = ({ data }) => {
    setList(data)
  }

  return (
    <Axios run api="indicators" onSuccess={onSuccess} loading={false}>
      <div className={classes.root}>
        <Title>HOME_NUMBERS_TITLE</Title>
        <div className={classes.main}>
          <Grid container justify="center" spacing={10}>
            {list.map((item, index) => (
              <Grid key={index} item>
                <CardNumber item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Axios>
  )
}
