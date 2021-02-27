import React from 'react';
import { Link } from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Header from './components/Header'
import Footer from './components/Footer'

import Translate from '@UI/Translate'

import useStyles from './styles.js'

export default function Layout(props) {
  const classes = useStyles();

  const router = [
    {
      icon: () => <InboxIcon />,
      href: "professional",
      title: "LAYOUT_LIST_ITEM_PROFESSIONAL"
    },
    {
      icon: () => <InboxIcon />,
      href: "type_professional",
      title: "LAYOUT_LIST_ITEM_TYPE_PROFESSIONAL"
    }
  ]

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar}>
          <Translate>LAYOUT_TITLE</Translate>
        </div>
        <Divider />
        <List>
          {router.map((item, index) => (
            <Link to={item.href}>
              <ListItem button key={index}>
                <ListItemIcon>{item.icon()}</ListItemIcon>
                <ListItemText>
                  <Translate>{item.title}</Translate>
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <Header {...props} />
        <div className={classes.main}>
          {props.children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
