class Util {
  numberFormart(value, digits = 2) {
    return Number(value).toLocaleString('pt-BR', { minimumFractionDigits: digits })
  }

  isObject(value) {
    return value && value.constructor === Object
  }

  isArray(value) {
    return value && value.constructor === Array && value.length
  }

  getValue(obj, path) {
    return String(path)
      .replace(/\[(\w+)\]/g, '.$1')
      .replace(/^\./, '')
      .split('.')
      .reduce((acc, part) => acc && acc[part], obj)
  }

  setValue(obj = {}, path, value) {
    let i
    let array = String(path).replace(/^\./, '').split('.')
    for (i = 0; i < array.length - 1; i++) {
      if (!obj[array[i]]) obj[array[i]] = {}
      obj = obj[array[i]]
    }
    obj[array[i]] = value
  }

  filter(array = [], name, value = '') {
    if (name) {
      return array.filter(
        (o) => String(this.getValue(o, name)).toLowerCase().includes(String(value).toLowerCase()) || value === ''
      )
    } else {
      return array.filter((o) => String(o).toLowerCase().includes(String(value).toLowerCase()) || value === '')
    }
  }

  removeAccents(value) {
    return String(value)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  }

  transform(text) {
    const value = this.removeAccents(text)
    return value
      .trim()
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
  }

  descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1
    }
    if (b[orderBy] > a[orderBy]) {
      return 1
    }
    return 0
  }

  getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => this.descendingComparator(a, b, orderBy)
      : (a, b) => -this.descendingComparator(a, b, orderBy)
  }

  stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) return order
      return a[1] - b[1]
    })
    return stabilizedThis.map(el => el[0])
  }

}

export default new Util()
