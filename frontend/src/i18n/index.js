import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ptBR from './locales/ptBR'

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      pt: {
        translation: ptBR
      }
    },
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    },
  })

export default i18n
