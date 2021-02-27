import React, { useState, useEffect } from 'react'

import axios from 'axios'
import Utils from '@utils'
import configs from '@configs'
import ApiUtils from '@utils/api.utils'
import Toast from '@utils/toast.utils'

import { LoadConsumer } from '@contexts/Load'

const Axios = (props) => {
  const submitAsync = async () => {
    await submit({})
  }

  useEffect(() => {
    const initialize = () => {
      if (props.run) {
        submitAsync()
      }
    }
    initialize()
  }, [props.run])

  const [response, setResponse] = useState()

  let setLoad = () => true

  const activeLoad = (inLoad) => {
    const { loading = true } = props
    if (typeof inLoad === 'function' && loading) {
      setLoad = inLoad
    }
  }

  const showLoad = (show) => {
    if (typeof setLoad === 'function') {
      setLoad(show)
    }
  }

  const error = (error) => {
    const token = sessionStorage.getItem(configs.TokenSession)
    const message = Utils.getValue(error, 'response.data.message')
    props.onError(error)
    if (message) {
      Toast.set('warning', message || statusText)
    }
    if (message === 'TOKEN_EXPIRED' && token) {
      window.location = '/'
    }
  }

  const success = (data) => {
    const { onSuccess } = props
    onSuccess(data)
    setResponse(data)
    showLoad(false)
    if (data.message) {
      Toast.set('success', data.message || data)
    }
  }

  const submit = async (data) => {
    const { params } = data || {}
    const { onRequest, message } = props
    if (params) props = { ...props, params }
    showLoad(typeof message === 'string' ? message : true)
    try {
      onRequest()
      const response = (await http(props)) || {}
      onRequest()
      success(response)
    } catch (err) {
      onRequest()
      showLoad(false)
      error(err)
    }
  }

  const { children } = props
  return (
    <LoadConsumer>
      {({ setLoad: load }) => {
        activeLoad(load)
        if (typeof children === 'function') {
          return children({
            submit,
            response,
          })
        } else {
          return children
        }
      }}
    </LoadConsumer>
  )
}

Axios.defaultProps = {
  onError: () => true,
  onSuccess: () => true,
  onRequest: () => true,
}

const http = async ({ token, api, params, others, method = 'get' }) => {
  const { endpoints } = configs.api
  const urlBase = process.env.REACT_APP_API_URL
  let { external, url } = Utils.getValue(endpoints, api) || {}
  url = `${!external ? urlBase : ''}${ApiUtils.getParams(url, others)}`
  const auth = token || sessionStorage.getItem(configs.TokenSession)
  const headers = !external ? { Authorization: `Bearer ${auth}` } : {}
  const response = await axios({
    url,
    method,
    headers,
    data: { ...params },
  })
  return response.data
}

const getApi = (api) => {
  const urlBase = process.env.REACT_APP_API_URL
  const { endpoints } = configs.api
  const { url } = endpoints[api]
  return `${urlBase}${url}`
}

export { getApi, http }
export default Axios
