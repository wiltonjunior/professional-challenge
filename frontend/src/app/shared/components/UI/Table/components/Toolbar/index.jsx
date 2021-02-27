import React, { useState } from 'react'

import { Search } from '@material-ui/icons'
import * as Material from '@material-ui/core'
import { TextField, InputAdornment } from '@material-ui/core'

import Typography from '@UI/Typography'

import useStyles from './styles'

const Toolbar = ({ selected, component, title, search }) => {
  const classes = useStyles()

  let [value, setValue] = useState('')
  const onChange = event => {
    setValue(event.target.value)
    search(event)
  }

  const actions = () => {
    if (component) {
      return component()
    } else {
      return (
        <TextField
          value={value}
          variant="outlined"
          onChange={onChange}
          label="Pesquisa"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                classes={{ root: classes.searchIcon }}
              >
                <Search className="searchIcon-application" />
              </InputAdornment>
            ),
          }}
        />
      )
    }
  }

  return (
    <Material.Toolbar className={classes.root} disableGutters={true}>
      <div className={classes.main}>
        <Typography variant="h6">
          {title}
        </Typography>
        {actions()}
      </div>
    </Material.Toolbar>
  )
}

export default Toolbar
