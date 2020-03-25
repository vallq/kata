class BankAccount {
  constructor() {
    (this.balance = 0), (this.statements = []);
  }

  createTransactionDate() {
    const date = new Date().toLocaleString().split(",");
    return date[0];
  }

  deposit(amount) {
    const date = this.createTransactionDate();
    if (amount <= 0) {
      throw new Error("You cannot deposit a zero or negative amount");
    }
    this.balance = this.balance + amount;
    this.statements.push(new Statement("deposit", amount, date));
  }

  withdrawal(amount) {
    const date = this.createTransactionDate();
    if (amount <= 0) {
      throw new Error("Lol, you cannot withdraw a zero or negative amount");
    }
    if (amount > this.balance) {
      throw new Error("Oops, you do not have enough dough to withdraw");
    }
    this.balance = this.balance - amount;
    this.statements.push(new Statement("withdrawal", amount, date));
  }

  transfer(destination, amount) {
    const date = this.createTransactionDate();
    if (amount <= 0) {
      throw new Error("Haha, you can't transfer a zero or negative amount");
    }
    this.withdrawal(amount, date);
    destination.deposit(amount, date);
  }

  filterStatements(transactionType) {
    return this.statements.filter(
      statement => statement.transactionType === transactionType
    );
  }

  printOneStatement(statement) {
    if (statement.transactionType === "deposit") {
      console.log(
        `${statement.date}  | ${statement.amount} |          | ${this.balance}`
      );
    }
    if (statement.transactionType === "withdrawal") {
      console.log(
        `${statement.date}  |      |     ${statement.amount} | ${this.balance}`
      );
    }
  }

  printStatements() {
    console.log("date       || credit   || debit    || balance");
    this.statements.forEach(statement => this.printOneStatement(statement));
    return true;
  }
}

class Statement {
  constructor(transactionType, amount, date) {
    (this.transactionType = transactionType),
      (this.amount = amount),
      (this.date = date);
  }
}

module.exports = BankAccount;

