import React, { useState } from 'react'

import Translate from '@UI/Translate'

import './styles.scss'

const defaultContext = {
  isShow: false,
  message: '',
  setLoad: () => {},
}

const { Consumer, Provider } = React.createContext(defaultContext)

const LoadConsumer = props => {
  return <Consumer>{props.children}</Consumer>
}

const LoadProvider = props => {
  let timer

  const [message, setMessage] = useState()
  const [isShow, setIsShow] = useState()

  const setLoad = show => {
    if (!show) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        setIsShow(show)
      }, 300)
    } else {
      setIsShow(show)
    }
  }

  const value = {
    isShow,
    setLoad,
    message,
    setMessage,
  }

  return <Provider value={value}>{props.children}</Provider>
}

const Load = () => {
  const getTemplate = message => {
    message = !message ? 'LOAD' : message
    return (
      <div className="image">
        <div className="LoadImage lds-css ng-scope">
          <div className="lds-rolling">
            <div />
          </div>
        </div>
        <h5 className="text-center pl-3 pr-3">
          <Translate>{message}</Translate>
        </h5>
      </div>
    )
  }

  return (
    <LoadConsumer>
      {({ isShow, message }) => {
        if (isShow) {
          return (
            <div className="Load">
              <div className="background" />
              {getTemplate(message)}
            </div>
          )
        } else {
          return null
        }
      }}
    </LoadConsumer>
  )
}

Load.defaultProps = {
  text: '',
  internalLoad: false,
}

export { LoadConsumer, LoadProvider }

export default Load
