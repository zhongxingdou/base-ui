import mixins from './mixins'
import ElementDisable from './element-disable'
import Element from './Element'

const EMPTY_STRING = ''
const PROP_VALUE = 'value'

class Input extends Element {
  get static allState () {
    return Element.allState
  }

  constructor () {
    this.value = EMPTY_STRING
  }

  get value () {
    return this.getProp(PROP_VALUE)
  }

  set value (value) {
    this.setProp(PROP_VALUE, value)
  }
}

export default mixins(Input, ElementDisable)
