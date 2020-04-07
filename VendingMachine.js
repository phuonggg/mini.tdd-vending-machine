class VendingMachine {
  constructor() {
    const juice = { name: `Apple Juice`, price: 350, count: 5 };
    const coffee = { name: "Tully's", price: 250, count: 7 };
    const tea = { name: "Tully's", price: 250, count: 7 };
    const latte = { name: "Tully's", price: 250, count: 7 };

    const inventory = [
      [juice, coffee, tea, latte],
      [juice, coffee, tea, latte],
      [juice, coffee, tea, latte],
      [juice, coffee, tea, latte],
    ];

    const positionRow = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
    };

    this.balance = 0;
    this.till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };
    this.selectedRow = undefined;
    this.selectedColumn = undefined;
    this.selectedItem = undefined;
  }

  insertCoin(amount) {
    this.balance += amount;
    this.till[amount] += 1;
  }

  pressButton(selectedRow, selectedColumn) {
    this.selectedRow = selectedRow;
    this.selectedColumn = selectedColumn;
    console.log(selectedRow, selectedColumn);
  }

  checkInventory(selectedRow, selectedColumn) {
    this.selectedItem = inventory[positionRow[selectedRow]][selectedColumn - 1];
  }

  // buy(amount, selectedRow, selectedColumn) {
  //   this.insertCoin(amount);
  //   /*check inventory...*/
}

module.exports = VendingMachine;

/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/
