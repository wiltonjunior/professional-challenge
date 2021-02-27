import React from 'react';

import { i18n } from '@UI/Translate'

const ImageComponent = (props) => {
  const { alt = 'IMAGE' } = props || {};
  return <img {...props} alt={i18n.t(alt)} />
}

export default ImageComponent;
