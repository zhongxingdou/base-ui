const PROP_VALUE = 'value'
const EMPTY_STRING = ''

export default class InputClearable {
  get clearable () {
    return this.getProp(PROP_VALUE) !== EMPTY_STRING
  }

  clear () {
    this.setProp(PROP_VALUE, EMPTY_STRING)
  }
}

// <div>
//    <input type="text" value="{{ value }}" />
//    <i onclick="clear()" class="icon-input-clear, {{!clearable ? 'disabled' : ''}}"></>
// </div>
