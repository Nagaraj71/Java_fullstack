class Account{
open_Account(){
    console.log("Account Opened Successfully")
}
}
class Savings_Account extends Account{
    deposit_Account(){
        console.log("Account Deposited Successfully")
    }
}let C1= new Savings_Account
C1.open_Account()
C1.deposit_Account()