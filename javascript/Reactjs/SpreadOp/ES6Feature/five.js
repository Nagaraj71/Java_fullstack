class Account{
    open_Account(){
        console.log("Opened Account Successfully")
    }
}
class Savings_Account extends Account{
    deposit(){
        console.log("Amount deposited")
    }
}let C1= new Savings_Account;

C1.open_Account()
C1.deposit()
