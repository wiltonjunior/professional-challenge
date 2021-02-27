import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import Icon from '@UI/Icon'
import { i18n } from '@UI/Translate'
import Container from '@UI/Container'
import Typography from '@UI/Typography'

import useStyles from './styles.js'

export default function Header() {
  const classes = useStyles()

  const getLink = (item, index) => {
    const { href, onClick, title, hide } = item
    if (!hide) {
      if (onClick) {
        return (
          <ListItemText
            key={index}
            onClick={onClick}
            primary={i18n.t(title)}
            className={clsx([classes.listItemText])}
          />
        )
      } else {
        return (
          <Link href={href}>
            <ListItemText key={index} primary={i18n.t(title)} className={clsx([classes.listItemText])} />
          </Link>
        )
      }
    }
  }

  const list = [
    {
      href: '/terms',
      title: 'LAYOUT_FOOTER_LIST_ITEM_TERMS',
    },
    {
      href: '/privacy',
      title: 'LAYOUT_FOOTER_LIST_ITEM_POLICY',
    },
    // {
    //   title: 'LAYOUT_FOOTER_LIST_ITEM_USE_GUIDE',
    // },
    {
      onClick: () => console.log('aaaa'),
      title: 'LAYOUT_FOOTER_LIST_ITEM_METHODOLOGY',
    },
    {
      href: '/faq',
      title: 'LAYOUT_FOOTER_LIST_ITEM_FAQ',
    },
  ]

  return (
    <div className={classes.root}>
      <AppBar className={classes.toolbar} position="static">
        <Toolbar>
          <Container>
            <div className={classes.main}>
              <div className={classes.logo}>
                <Icon size={60} name="logo" />
                <Typography variant="h4">CECarbon</Typography>
              </div>
              <List className={classes.list}>
                <ListItem>{list.map((item, index) => getLink(item, index))}</ListItem>
              </List>
              <div className={classes.text}>
                <Typography>LAYOUT_FOOTER_TEXT</Typography>
              </div>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  )
}
