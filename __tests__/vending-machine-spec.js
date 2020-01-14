const vendingMachine = require('../lib/index')
let testing = new vendingMachine()

describe(`vending machine`, () => {
  describe(`if there are no params specified`, () => {
    it(`should return true`, () => {
      const result = testing.buy()
      expect(result).toEqual(false)
    })
  })
  describe(`if user buys an item`, () => {
    it(`should return true`, () => {
      const result = testing.buy(1, 2, 1)
      expect(result).toEqual(true)
    })
  })
  describe(`if money provided by user is not enough to buy`, () => {
    it(`should return false`, () => {
      const result = testing.buy(1, 1, 1)
      expect(result).toEqual(false)
    })
  })
  describe(`if the user requests more quantity of an item than in the inventory`, () => {
    it(`should return false`, () => {
      const result = testing.buy(6, 2, 5)
      expect(result).toEqual(false)
    })
  })
  describe(`if the requested item is out of stock`, () => {
    it(`should return false`, () => {
      const result = testing.buy(5, 2, 5)
      expect(result).toEqual(false)
    })
  })
  describe(`if one parameter is not provided`, () => {
    it(`should return false`, () => {
      const result = testing.buy(5, 2)
      expect(result).toEqual(false)
    })
  })
  describe(`if one parameter is not provided`, () => {
    it(`should return false`, () => {
      const result = testing.buy(5, 2)
      expect(result).toEqual(false)
    })
  })
  describe(`if user uses the refillStock method`, () => {
    it(`should refill stock`, () => {
      const result = testing.refillStock()
      expect(result).toEqual(true)
    })
  })
  describe(`if user uses the resupplyChange method`, () => {
    it(`should refill stock`, () => {
      const result = testing.resupplyChange()
      expect(result).toEqual(true)
    })
  })
  describe(`if user uses the printStock method`, () => {
    it(`should print the inventory`, () => {
      const result = testing.printStock()
      expect(result).toEqual(true)
    })
  })
})
