import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';

import Icon from '@UI/Icon'
import Translate from '@UI/Translate'

import useStyles from './styles.js'

const ButtonComponent = (props) => {
  const classes = useStyles()
  const { loading, className, basic, href, color="primary", variant="contained", ...rest } = props

  const styles = classNames([classes.root, className], { basic })

  const icon = () => {
    if (props.icon) {
      return (
        <span className={classes.icon}>
          <Icon size={40} name={props.icon} />
        </span>
      )
    }
  }

  const component = (event) => {
    return (
      <div className={styles}>
        <Button variant={variant} color={color} disabled={loading} {...event} className={classes.button} >
          {icon()}
          <Translate>{props.children}</Translate>
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    )
  }

  if (href) {
    return <Link href={href}>{component(rest)}</Link>
  } else {
    return component(rest)
  }
}

export default ButtonComponent
