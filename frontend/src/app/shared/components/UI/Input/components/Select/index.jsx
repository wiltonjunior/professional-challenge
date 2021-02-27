import React, { memo } from 'react'

import * as Material from '@material-ui/core'
import { MenuItem, FormControl, FormHelperText } from '@material-ui/core'

import useStyles from './styles.js'

const Select = (props) => {
  const classes = useStyles()
  let { error, value, disabled, nameValue, array = [], helperText, inputProps, nameText = nameValue } = props

  const handleChange = (e, { props: { value } }) => {
    const { array = [], nameValue, name } = props
    const event = {
      target: {
        name,
        value,
        item: array.find((item) => item[nameValue] === value),
      },
    }
    props.handleChange(event)
  }

  return (
    <FormControl className={classes.root}>
      <Material.Select
        error={error}
        value={value}
        variant="outlined"
        disabled={disabled}
        onChange={handleChange}
        inputProps={inputProps}
      >
        {array.map((item, index) => (
          <MenuItem key={index} value={nameValue ? item[nameValue] : item}>
            {nameText ? item[nameText] : item}
          </MenuItem>
        ))}
      </Material.Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}

Select.defaultProps = {
  value: '',
  array: [],
}

export default memo(Select)
