const { Greeter, SystemClock } = require('./greeter').Greeter
const UI = require('./ui').UI

const main = () => {
  const greeter = new Greeter(new SystemClock())
  const greetings = greeter.greet()
  console.log(greetings)

  const ui = new UI()
  ui.mainLoop()
}

main()
