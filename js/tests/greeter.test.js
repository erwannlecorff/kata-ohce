const test = require('tape')
const Greeter = require('../greeter').Greeter

class MockSystemClock {
  constructor(date) {
    this.date = date
  }

  currentHour () {
    return this.date.getHours()
  }
}

test('should say "good night" at midnight', (t) => {
  const midnight = new Date();
  midnight.setHours(0, 0, 0);
  const mock = new MockSystemClock(midnight)

  const greeter = new Greeter(mock);

  t.equal(greeter.greet(), "Good night", 'Midnight should return "Good night"')
  t.end()
})

test('should never return undefined', (t) => {
  const midnight = new Date();

  for (let i = 0; i < 24; i++){
    midnight.setHours(i, 0, 0);
    const mock = new MockSystemClock(midnight)

    const greeter = new Greeter(mock);

    t.ok(greeter.greet(), `Hour ${i} should return a value`)
  }


  t.end()
})
