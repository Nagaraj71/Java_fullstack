class Account{
    open_Account(){
        console.log("Account opened successfully")
    }

    
}
class Savings_Account extends Account{
    deposit(){
        console.log("Amount Deposited Successfully")
    }
}
let C1=new Savings_Account()
C1.deposit()
C1.open_Account()
