import React from 'react'
import { useTranslation } from 'react-i18next'

import Typography from '@material-ui/core/Typography'

export default function TypographyComponent(props) {
  const { t} = useTranslation()
  const { params = {}, children, html } = props
  const value = t(children, params)
  return <Typography {...props}>{html ? <span dangerouslySetInnerHTML={{ __html: value }} /> : value}</Typography>
}
