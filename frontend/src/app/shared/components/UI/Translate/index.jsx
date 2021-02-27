import i18n from '@i18n'

const Translate = (props) => {
  const { word = '', children = '' } = props
  if (children) {
    return i18n.t(children)
  } else if (word) {
    return i18n.t(word)
  } else {
    return ''
  }
}

export { i18n }
export default Translate
