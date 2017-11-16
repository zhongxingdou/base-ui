const Element = require('./element')

// state unstart -> running -> timeout
const STATE = {
  UNSTART: Symbol('UNSTART'),
  RUNNING: Symbol('RUNNING'),
  TIMEOUT: Symbol('TIMEOUT')
}

const MILLISECOND_CONVERSION = {
  DAYS: 1000 * 60 * 60 * 24,
  HOURS: 1000 * 60 * 60,
  MINUTES: 1000 * 60,
  SECONDS: 1000
}

function formatMilliseconds (milliseconds) {
  const days = Math.floor(milliseconds / MILLISECOND_CONVERSION.DAYS)
  milliseconds %= MILLISECOND_CONVERSION.DAYS

  const hours = Math.floor(milliseconds / MILLISECOND_CONVERSION.HOURS)
  milliseconds %= MILLISECOND_CONVERSION.HOURS

  const minutes = Math.floor(milliseconds / MILLISECOND_CONVERSION.MINUTES)
  milliseconds %= MILLISECOND_CONVERSION.MINUTES

  const seconds = Math.floor(milliseconds / MILLISECOND_CONVERSION.SECONDS)

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
}

const TICK_EVENT = 'tick'
let _tickMilliseconds = 1000

module.exports = class Countdown extends Element {
  static allEvent () {
    return [TICK_EVENT]
  }

  static allState () {
    return Object.assign({}, STATE)
  }

  static getTickMilliseconds () {
    return _tickMilliseconds
  }
  static setTickMilliseconds (value) {
    _tickMilliseconds = value
  }

  constructor (endTime) {
    super()
    this._setState(STATE.UNSTART)
    this.endTime = endTime
  }

  get endTime () {
    return this.getProp('endTime')
  }

  set endTime (endTime) {
    if (this.state === STATE.UNSTART) {
      this.setProp('endTime', endTime)
    }
  }

  destroy () {
    super.destroy()
    this.stop()
  }

  stop () {
    clearInterval(this._timer)
  }

  start () {
    if (this.endTime) {
      this._setState(STATE.RUNNING)

      let timer = this._timer = setInterval(() => {
        let remaning = this.endTime - new Date()
        if (remaning > 0) {
          this.fire(TICK_EVENT, formatMilliseconds(remaning))
        } else {
          clearInterval(timer)
          this._setState(STATE.TIMEOUT)
        }
      }, Countdown.getTickMilliseconds())
    } else {
      throw new Error('the end time of countown un set')
    }
  }
}
