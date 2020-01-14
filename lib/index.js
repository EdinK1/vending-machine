const initialInventory = [
  { name: 'coke', price: 1.5, quantity: 3 },
  { name: 'chips', price: 2, quantity: 2 },
  { name: 'water', price: 1, quantity: 5 }
]

const currentInventory = [
  { name: 'coke', price: 1.5, quantity: 3 },
  { name: 'chips', price: 2, quantity: 2 },
  { name: 'water', price: 1, quantity: 5 }
]

class VendingMachine {
  constructor() {
    this.inventory = currentInventory
    this.completeChange = 100
  }

  printStock() {
    console.table(this.inventory)
    return true
  }

  refillStock() {
    this.inventory = initialInventory
    return true
  }

  resupplyChange() {
    this.completeChange = 100
    return true
  }

  buy(quantity, index, money) {
    if (!quantity && !index && !money) {
      console.log('no params specified')
      return false
    }
    if (quantity > this.inventory[index].quantity) {
      console.log(
        `sorry, we only have ${this.inventory[index].quantity} ${this.inventory[index].name} left`
      )
      return false
    }

    if (money < this.inventory[index].price) {
      console.log('insufficient amount of money')
      return false
    }

    if (this.inventory[index].quantity === 0) {
      console.log('out of stock')
      return false
    }

    const product = this.inventory[index].name
    let change = Number.parseFloat(
      money - this.inventory[index].price * quantity
    )
    this.inventory[index].quantity = this.inventory[index].quantity - quantity
    this.completeChange = this.completeChange - change

    if (this.inventory[index].quantity === 0) {
      console.log('out of stock')
      return false
    }

    switch (change) {
      case 2:
        change = 'tonnie'
        break
      case 1:
        change = 'loonie'
        break
      case 0.25:
        change = 'quarter'
        break
      case 0.1:
        change = 'dime'
        break
      case 0.05:
        change = 'nickel'
        break
    }

    console.log(
      `You bought ${quantity} ${product}. Here's your change: ${change}`
    )
    return true
  }
}

let testing = new VendingMachine()

testing.printStock()
testing.refillStock()
testing.resupplyChange()
testing.buy(1, 1, 4)
testing.buy(1, 1, 3)
testing.buy(5, 2, 5)

module.exports = VendingMachine
