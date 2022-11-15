const test = require('tape')
const { UI } = require('../ui')
const ui = require('../ui')

class MockConsoleInteractor {

  constructor(list){
    this.list = list
    this.output = []
  }
  readInput () {
    let imput = this.list.shift()
    return imput
  }

  printMessage (message) {
    this.output.push(message)
  }
  getOutput(){
    return this.output
  }
}
test('main loop', (t) => {
  let list = ["hello","oto","quit"]
  let iterator = new MockConsoleInteractor(list)
  let ui = new UI(iterator)
  ui.mainLoop()
  let output = iterator.getOutput()
  let expectedOutput = ["olleh","oto","That was a palindrome!"]
  t.deepEqual(output,expectedOutput)
  t.end()
})
