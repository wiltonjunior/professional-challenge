import React from 'react'

import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'

import useStyles from './styles.js'

export default function CheckboxComponent(props) {
  const classes = useStyles()

  const { label, value, name, helperText, onChecked } = props

  const onChange = ({ target: { name, checked } }) => {
    if (checked && onChecked) {
      onChecked()
    }
    const event = {
      target: {
        name,
        checked,
        value: checked,
      },
    }
    props.handleChange(event)
  }

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          label={label}
          control={<Checkbox checked={value} onChange={onChange} name={name} />}
        />
      </FormGroup>
      <FormHelperText>{helperText}</FormHelperText>
    </div>
  )
}
