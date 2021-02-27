import React from 'react'

import { toast } from 'react-toastify'

import Image from '@UI/Image'
import Translate from '@UI/Translate'

class ToastUtils {
  set(type, message, params) {
    const Mensagem = () => (
      <div className="custom-toast">
        <div className="text center-center">
          <Translate parameters={params}>{String(message)}</Translate>
        </div>
      </div>
    )
    if (message) {
      toast[type](<Mensagem />, {
        autoClose: 5000,
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }
}

export default new ToastUtils()
