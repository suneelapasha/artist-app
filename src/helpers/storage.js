const STORAGE = localStorage


export default class Storage {
  static set(name, value) {
    STORAGE.setItem(name, value)
  }

  static get(name) {
    return STORAGE.getItem(name)
  }

  static remove(name) {
    STORAGE.removeItem(name)
  }
}
