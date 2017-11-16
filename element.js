const EventEmitter = require('event-emitter')

module.exports = class Element {
  // 事件名全小写，下划线连接
  static allState () {
    return []
  }

  constructor () {
    this._currState = ''

    this._prop = {}
    this._eventEmitter = new EventEmitter()
  }


  // state
  get state () {
    return this._currState
  }
  _setState (newState) {
    let oldState = this.state
    this.fire('stateWillChange', oldState, newState)
    this._currState = newState
    this.fire('stateDidChange', newState, oldState)
  }


  // prop
  getProp (prop) {
    return this._prop[prop]
  }
  setProp (prop, value) {
    this.fire(prop + 'WillChange', value)
    this._prop[prop] = value
    this.fire(prop + 'DidChange', value)
  }


  // event
  fire (event, ...args) {
    this._eventEmitter.emit(event, ...args)
  }

  on (event, listener) {
    this._eventEmitter.on(event, listener)
  }

  once (event, listener) {
    this._eventEmitter.once(event, listener)
  }

  off (event, listener) {
    this._eventEmitter.off(event, listener)
  }

  destroy () {
    this.fire('willDestroy')
    this._eventEmitter = null
  }
}
