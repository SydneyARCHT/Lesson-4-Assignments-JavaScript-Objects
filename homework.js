// Exploring JavaScript Objects

// Task 1:

function newBook(title, author, pages){
    this.title = title
    this.author = author 
    this.pages = pages
}

let book1 = new newBook("Dune", "Frank Herbert", 412)
let book2 = new newBook("The Hunger Games", "Suzanne Collins", 374);
let book3 = new newBook("Esperanza Rising", "Pam Muñoz Ryan", 304);

// Task 2:

newBook.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
};

book1.displayInfo();
book2.displayInfo();
book3.displayInfo();

// Exploring Objects and Math in JavaScript

// Task 1:

function account(accountNumber, balance, owner){
    this.accountNumber = accountNumber
    this.balance = balance
    this.owner = owner
}

let account1 = new account(745152, 100.75, "Alice Johnson")
let account2 = new account(312927, 180.25, "Bob Smith");
let account3 = new account(142817, 97.20, "Charlie Brown");

// Task 2:

// Method to deposit funds into the account
account.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log(`Deposit of $${amount} successful. New balance is $${this.balance}`);
};

// Method to withdraw funds from the account
account.prototype.withdraw = function(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawal of $${amount} successful. New balance is $${this.balance}`);
    } else {
        console.log(`Insufficient funds. Withdrawal of $${amount} cannot be processed.`);
    }
}

account1.deposit(50.25);
account2.withdraw(20);
account3.withdraw(150);

// checking the accounts afterwards to see if it properly deposited/withdrew
console.log(account1);
console.log(account2);
console.log(account3);

// Task 3:

account.prototype.calculateCompoundInterest = function(rate, years) {
    const n = 1; 
    let amount = this.balance;
    const base = 1 + rate / n;
    const exponent = n * years;

    for (let i = 0; i < exponent; i++) {
        amount *= base;
    }
    const roundedAmount = Math.ceil(amount);
    console.log(`Amount after ${years} years with an annual interest rate of ${(rate * 100)}% is $${roundedAmount}`);
    return roundedAmount;
};