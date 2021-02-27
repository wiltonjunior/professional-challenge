import React from 'react'
import configs from '@configs'
import { useHistory } from 'react-router-dom'

const { Provider, Consumer } = React.createContext()

const UserConsumer = props => {
  return <Consumer>{props.children}</Consumer>
}

const UserProvider = props => {
  const user = () => {
    try {
      const token = sessionStorage.getItem(configs.TokenSession)
      if (!token) return null
      return uptateToken(token)
    } catch (e) {
      return null
    }
  }

  const uptateToken = (token) => {
    let object = Buffer.from(token.split('.')[1], 'base64').toString()
    return JSON.parse(object)
  }

  const value = { user: user }
  return <Provider value={value}>{props.children}</Provider>
}

const UserValidate = props => {
  const history = useHistory()

  const isLogged = (item) => {
    const user = item()
    const { pathname } = props.location;
    const isPublic = configs.routes.publics.indexOf(pathname) > -1
    if (user && !isPublic) {
      const expTime = parseInt(`${String(user.exp).toString()}000`, 0)
      if (Date.now() >= expTime) {
        history.push('/login')
        return 0;
      }
    } else if (!isPublic) {
      history.push('/login')
      return 0;
    }
    return props.children
  }

  return <UserConsumer>{({user}) => isLogged(user)}</UserConsumer>
}

const User = () => {
  return null
}

export { UserProvider, UserConsumer, UserValidate }

export default User
