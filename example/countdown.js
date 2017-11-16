const CountDown = require('../countdown')

let now = new Date()
const countdown = new CountDown(now.getTime()+60*60*1000)

countdown.on('tick', (s) => console.log(s))

countdown.start()

setTimeout(countdown.destroy.bind(countdown), 10000)
