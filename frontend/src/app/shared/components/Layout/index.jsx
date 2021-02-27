import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import useStyles from './styles.js'

const Layout = (props) => {
  const classes = useStyles()
  return (
    <>
      <Header {...props} />
      <div className={classes.main}>{props.children}</div>
      <Footer />
    </>
  )
}

export default Layout
