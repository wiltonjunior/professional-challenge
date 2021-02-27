import React, { Component } from 'react'
import classNames from 'classnames'

import Icons from './dictionary'

import './styles.scss'

class Icon extends Component {
  static defaultProps = {
    name: '',
  }
  render() {
    const { className, size, name } = this.props

    const Image = Icons[name]
    const styles = classNames(['Icon', className])

    if (Image) {
      return (
        <span className={styles}>
          <Image style={size ? { width: size, height: size } : null} />
        </span>
      )
    } else {
      return null
    }
  }
}

export default Icon
