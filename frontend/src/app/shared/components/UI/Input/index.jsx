import React, { memo } from 'react'
import InputMask from 'react-input-mask'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'

import clsx from 'clsx'
import Icon from '@UI/Icon'
import Translate, { i18n } from '@UI/Translate'

import Select from './components/Select'
import CheckBox from './components/CheckBox'

import useStyles from './styles.js'

const Input = (props) => {
  const classes = useStyles()

  const onChange = (event) => {
    let { name, index } = props
    if (typeof props.onChange === 'function') {
      const { value, type } = event.target
      event.target = {
        type,
        name,
        index,
        value,
        ...event.target,
      }
      props.onChange(event)
    }
  }

  const label = () => {
    const { label, type, error } = props
    let styles = clsx([classes.label], { error })
    if (label && type !== 'radio' && type !== 'checkbox') {
      return (
        <label className={styles}>
          <Translate>{label}</Translate>
        </label>
      )
    }
  }

  const inputProps = () => {
    let { placeholder, helperText, label, startAdornment, icon } = props
    const InputProps = {}

    if (startAdornment) {
      InputProps.startAdornment = (
        <InputAdornment position="start">
          <Icon size={30} name={icon} />
        </InputAdornment>
      )
    }

    return {
      ...props,
      InputProps,
      variant: 'outlined',
      label: i18n.t(label),
      handleChange: onChange,
      helperText: i18n.t(helperText),
      placeholder: i18n.t(placeholder),
    }
  }

  const switchType = () => {
    let { type, mask, disabled } = props
    switch (type) {
      case 'checkbox':
        return <CheckBox {...inputProps()} />
      case 'select':
      default: {
        if (mask) {
          return (
            <InputMask {...inputProps()} onChange={onChange} formik={null}>
              {(inputProps) => (
                <TextField disableUnderline {...inputProps} disableUnderline disabled={disabled} label={null} />
              )}
            </InputMask>
          )
        } else {
          return <TextField {...inputProps()} label={null} formik={null} />
        }
      }
    }
  }

  const { className, error } = props
  let styles = clsx([classes.root, className], { error })

  return (
    <div className={styles}>
      {label()}
      {switchType()}
    </div>
  )
}

Input.defaultProps = {
  onChange: () => true,
}

export default memo(Input)
