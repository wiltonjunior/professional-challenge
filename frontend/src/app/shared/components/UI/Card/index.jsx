import React from 'react'

import './styles.scss'

const Card = (props) => {
  const { close } = props
  return (
    <div className="Card">
      <div onClick={close} className="card-header">
        <h4 className="close">
          Fechar <strong>X</strong>
        </h4>
      </div>
      <div className="card-content">{props.children}</div>
    </div>
  )
}

export default Card
