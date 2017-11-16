const DISABLE_STATE = 'disabled'
const ENABLE_STATE = 'enabled'

export default class ElementDisable {
  static get allState () {
    return [ENABLE_STATE, DISABLE_STATE]
  }

  constructor () {
    this.enable()
  }

  get disabled () {
    return this.getState() === DISABLED_STATE
  }

  disable () {
    this._setState(DISABLED_STATE)
  }

  enable () {
    this._setState(ENABLE_STATE)
  }
}
