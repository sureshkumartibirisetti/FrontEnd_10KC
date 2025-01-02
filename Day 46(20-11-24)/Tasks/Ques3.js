class BankAccount{
    accountHoldername;
    accountNumber;
    balance;
    constructor(accountHoldername, accountNumber,balance){
        this.accountHoldername=accountHoldername;
        this.accountNumber=accountNumber;
        this.balance=balance;
    }
    deposit(){
        var a=this.balance;
        console.log(a,"original Amount");
    }
    withdrawl(amount){
        console.log(amount,"withdrawel Amount");
        this.balance=this.balance-amount;
    }
    getBalance(){
        
        console.log(this.balance,"bank balance");
    }
}
var bb=new BankAccount("Inner","18029837762",5000);
bb.deposit();
bb.withdrawl(1000);
bb.getBalance();

