import React from 'react'
import clsx from 'clsx'

import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'

import Button from '@UI/Button'
import Typography from '@UI/Typography'

import useStyles from './styles.js'

const Modal = (props) => {
  const classes = useStyles()
  const { children, title, open, close, onSubmit, className } = props
  const styles = clsx([classes.root, className])
  return (
    <Dialog className={styles} onClose={close} open={open}>
      <div className={classes.main}>
        <div className={classes.header}>
          <div className={classes.title}>
            <Typography variant="h5">{title}</Typography>
          </div>
          <div className={classes.close}>
            <IconButton onClick={close} >
              <CloseOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <div className={classes.body}>{children}</div>
        <div dividers className={classes.footer}>
          <Button variant="contained" color="secondary" onClick={close}>MODAL_BUTTON_CLOSE</Button>
          <Button variant="contained" onClick={onSubmit}>MODAL_ADD_CARD_SEND</Button>
        </div>
      </div>
    </Dialog>
  )
}

export default Modal
