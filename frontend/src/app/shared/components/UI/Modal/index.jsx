import React from 'react'
import clsx from 'clsx'

import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'

import Typography from '@UI/Typography'

import useStyles from './styles.js'

const Modal = (props) => {
  const classes = useStyles()
  const { children, title, open, close, className } = props
  const styles = clsx([classes.root, className])
  return (
    <Dialog className={styles} onClose={close} open={open}>
      <div className={classes.main}>
        <div className={classes.close}>
          <IconButton onClick={close} >
            <CloseOutlinedIcon />
          </IconButton>
        </div>
        <div className={classes.title}>
          <Typography variant="h3">{title}</Typography>
        </div>
        <div className={classes.body}>{children}</div>
      </div>
    </Dialog>
  )
}

export default Modal
