export default function mixins(base, ...extendList) {
  let _allState = []

  let mixClass = class extends base{
    static get allState () {
      return base.allState.concat(_allState)
    }

    constrctor () {
      super()
      extendList.forEach(_ => _.constrctor.call(this))
    }
  }

  extendList.forEach(function (extendClass) {
    if (extendClass.allState) _allState.push(...extendClass.allState)
    Object.assign(mixClass.prototype, extendClass.prototype)
  })

  return mixClass
}
