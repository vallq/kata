const BankAccount = require("./BankAccount");

describe("Bank Account", () => {
  it("should return a new Bank Account with 0 balance", () => {
    let myBankAccount = new BankAccount();
    expect(myBankAccount.balance).toEqual(0);
  });

  it("DEPOSIT / should return a balance of 2500 after depositing 2500", () => {
    let myBankAccount = new BankAccount();
    myBankAccount.deposit(2500);
    expect(myBankAccount.balance).toEqual(2500);
  });

  it("DEPOSIT / should return `You cannot deposit a zero or negative amount` when deposit is less than or equal to 0", () => {
    let myBankAccount = new BankAccount();
    expect(() => myBankAccount.deposit(-2500)).toThrow();
  });

  it("WITHDRAWAL / should return a balance of 2000 after withdrawing 500", () => {
    let myBankAccount = new BankAccount();
    myBankAccount.deposit(2500);
    myBankAccount.withdrawal(500);
    expect(myBankAccount.balance).toEqual(2000);
  });

  it("WITHDRAWAL / should return `Lol, you cannot withdraw a zero or negative amount`", () => {
    let myBankAccount = new BankAccount();
    expect(() => myBankAccount.withdrawal(-500)).toThrow();
  });

  it("TRANSFER / should return a balance of 2000 after transfering 2500", () => {
    let myBankAccount = new BankAccount();
    let myOtherBankAccount = new BankAccount();
    myBankAccount.deposit(4500);
    myBankAccount.transfer(myOtherBankAccount, 2500);
    expect(myBankAccount.balance).toEqual(2000);
    expect(myOtherBankAccount.balance).toEqual(2500);
  });
});
