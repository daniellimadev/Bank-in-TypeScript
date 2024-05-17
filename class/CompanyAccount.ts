import { BankAccount } from "./BankAccount"


export class CompanyAccount extends BankAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }
    
    getLoan = (value: number): void => {
        if(this.validateStatus()){
            this.setBalance(this.getBalance() + value)
            console.log(`You took out a loan of ${value}`)
        } 
    }
}