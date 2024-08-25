export default class LocalStorage {
  set<T>(key: string, value: T): this {
    const json = JSON.stringify(value)
    localStorage.setItem(key, json)
    return this
  }

  get<T>(key: string): T | undefined {
    try {
      const dataString = localStorage.getItem(key)
      if (dataString === null || dataString === 'undefined') {
        return undefined
      } else {
        return JSON.parse(dataString) as T
      }
    } catch (e) {
      console.log(e)
      return undefined
    }
  }

  delete(key: string): this {
    localStorage.removeItem(key)
    return this
  }

  dropAll() {
    localStorage.clear()
  }
}
