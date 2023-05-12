const bankAccount = {
    balance: 0,
  
    deposit(amount) {
      this.balance += amount;
    },
  
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
      } else {
        console.log('Insufficient funds');
      }
    }
  };
  bankAccount.balance = 100;
  bankAccount.deposit(100);
  bankAccount.withdraw(50);
  console.log(bankAccount.balance); // Output: 50
  