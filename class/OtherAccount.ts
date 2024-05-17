import { BankAccount } from "./BankAccount"

export class OtherAccount extends BankAccount {

    constructor(name: string, accountNumber: number){
      super(name, accountNumber)
    }

    deposit = (value: number): void => {
      if(this.validateStatus()){
        this.setBalance(this.getBalance() + value + 10)
        console.log(`The amount of $ ${value + 10} has been deposited successfully!`)
      } 
    }
}