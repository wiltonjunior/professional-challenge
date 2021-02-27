import React from 'react'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'

import Routes from './routes/Routes'
import { UserProvider } from '@contexts/User'
import Load, { LoadProvider } from '@contexts/Load'

import theme from '@theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <LoadProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
          <ToastContainer />
          <Load />
        </LoadProvider>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
