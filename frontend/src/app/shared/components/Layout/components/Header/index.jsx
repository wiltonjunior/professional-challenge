import clsx from 'clsx'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import Icon from '@UI/Icon'
import Container from '@UI/Container'
import { i18n } from '@UI/Translate'
import Typography from '@UI/Typography'

import UserUtils from '@utils/user.utils'

import useStyles from './styles.js'

export default function Header(props) {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  const routerHome = [
    {
      onClick: toggle,
      title: 'LAYOUT_HOME_HEADER_LIST_ITEM_LOGIN',
    },
    {
      href: '/register',
      title: 'LAYOUT_HOME_HEADER_LIST_ITEM_REGISTER',
    },
    {
      href: '/simulation/orientation',
      title: 'LAYOUT_HOME_HEADER_LIST_ITEM_SIMULATION',
    },
    {
      href: '/about',
      title: 'LAYOUT_HOME_HEADER_LIST_ITEM_ABOUT',
    },
    {
      title: 'LAYOUT_HOME_HEADER_LIST_ITEM_BLOG',
    },
  ]

  const routerAdmin = [
    {
      href: '/admin/works',
      title: 'LAYOUT_ADMIN_HEADER_LIST_ITEM_MY_WORD',
    },
    {
      href: '/admin/feature',
      hide: !UserUtils.isCreator(),
      title: 'LAYOUT_ADMIN_HEADER_LIST_ITEM_ADD_WORD',
    },
    {
      title: 'LAYOUT_ADMIN_HEADER_LIST_ITEM_GUIDE',
    },
    {
      href: '/',
      title: 'LAYOUT_ADMIN_HEADER_LIST_ITEM_EXIT',
    },
  ]

  const isActive = ({ href }) => {
  
  }

  const getLink = (item, index) => {
    const { href, onClick, title, hide } = item
    if (!hide) {
      if (onClick) {
        return (
          <ListItemText
            key={index}
            onClick={onClick}
            primary={i18n.t(title)}
            className={clsx([classes.listItemText, { active: isActive(item) }])}
          />
        )
      } else {
        return (
          <Link href={href}>
            <ListItemText
              key={index}
              primary={i18n.t(title)}
              className={clsx([classes.listItemText], { active: isActive(item) })}
            />
          </Link>
        )
      }
    }
  }

  const { user } = props
  const list = user ? routerAdmin : routerHome
  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="static">
        <Toolbar>
          <Container>
            <div className={classes.menu}>
              <Link href="/">
                <div className={classes.logo}>
                  <Icon size={60} name="logo" />
                  <Typography variant="h4">CECarbon</Typography>
                </div>
              </Link>
              <List className={classes.list}>
                <ListItem>{list.map((item, index) => getLink(item, index))}</ListItem>
              </List>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  )
}
