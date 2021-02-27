import Utils from '@utils'

class ApiUtils {
  _setParams = (others, value) => {
    if (Utils.isObject(others)) {
      let params = `${value}?`
      for (const key in others) {
        if (others[key]) {
          params = `${params}${key}=${others[key]}&`
        }
      }
      return params.substring(0, params.length - 1)
    } else {
      return `/${others}`
    }
  }

  getUrl(object, value) {
    let path, api
    const array = String(value).split('.')
    for (const item of array) {
      path = path ? `${path}.${item}` : item
      const {url} = Utils.getValue(object, path)
      api = api ? `${api}${url}` : url
    }
    return api
  }

  getParams(url, others) {
    let params = ''
    if (others) {
      let value = ''
      if (Utils.isArray(others)) {
        value = `/${others[0]}`
        params = this._setParams(others[1], value)
      } else {
        params = this._setParams(others, value)
      }
    }
    return `${url}${params}`
  }
}

export default new ApiUtils()
