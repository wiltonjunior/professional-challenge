import configs from '@configs'

class UserUtils {
  getUser() {
    const { user } = JSON.parse(sessionStorage.getItem(configs.ObjectSession)) || {}
    return user
  }
}

export default new UserUtils()
