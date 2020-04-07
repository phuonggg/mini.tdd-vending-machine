const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

describe("vending machine", () => {
  it("should accept valid coins", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.insertCoin(500);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 0,
      50: 0,
      100: 0,
      500: 1,
    });
    expect(machine.balance).to.equal(500); // Use an ES6 getter
  });

  it("should select a row and column", () => {
    // Setup
    const machine = new VendingMachine();

    machine.pressButton("A", 1);

    expect(machine.selectedRow).to.equal("A");
    expect(machine.selectedColumn).to.equal(1);
  });

  it("should check inventory", () => {
    // Setup
    const machine = new VendingMachine();

    machine.checkInventory("A", 1);

    expect(machine.selectedItem).to.equal("juice");
  });
});
