import React from 'react'
import clsx from 'clsx'

import Button from '@UI/Button'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'

import Typography from '@UI/Typography'

import useStyles from './styles.js'

const Warning = (props) => {
  const classes = useStyles()
  const { title, text, open, close, className, onClose, onSuccess } = props
  const styles = clsx([classes.root, className])
  return (
    <Dialog className={styles} onClose={close} open={open}>
      <div className={classes.main}>
        <div className={classes.close}>
          <IconButton onClick={close}>
            <CloseOutlinedIcon />
          </IconButton>
        </div>
        <div className={classes.title}>
          <Typography variant="h3">{title}</Typography>
        </div>
        <div className={classes.body}>
          <Typography>{text}</Typography>
        </div>
        <div className={classes.footer}>
          <Button onClick={close} color="secondary">
            WARNING_FOOTER_ACTION_CLOSE
          </Button>
          <Button onClick={onSuccess}>WARNING_FOOTER_ACTION_SUCCESS</Button>
        </div>
      </div>
    </Dialog>
  )
}

export default Warning
