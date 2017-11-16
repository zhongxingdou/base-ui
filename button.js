import mixins from './mixins'
import ElementDisable from './element-disable'
import { throttle } from './util'

const CLICK_EVENT = 'click'

export default class Button extends Element {
  get static allEvent () {
    return [CLICK_EVENT]
  }

  get static allState () {
    return Element.allState.concat([])
  }

  get throttleTimeInMilliseconds () {
    return this.getProp('throttleTimeInMilliseconds')
  }

  set throttleTimeInMilliseconds (milliseconds) {
    this.prop('throttleTimeInMilliseconds', milliseconds)
  }

  constructor () {
    this.throttleTimeInMilliseconds = 0
  }

  get clickFirstHandler () {
    let ms = this.throttleTimeInMilliseconds
    let handler = () => this.fire(CLICK_EVENT, ...args)
    return ms ? throttle(handler, ms) : handler
  }
}

export default mixins(Button, ElementDisable)
