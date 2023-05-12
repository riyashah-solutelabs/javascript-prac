class BankAccount{
    constructor(balance){
        this.balance = balance;
    }
    deposite(amount){
        this.balance = this.balance + amount;
    }
    withdraw(amount){
        if(this.balance >= amount){
            this.balance = this.balance - amount;
        }else{
            console.log("Insufficient funds");
        }
    }
}
let account = new BankAccount(100);
account.deposite(50);
console.log(account.balance);
account.withdraw(200);
console.log(account.balance);
