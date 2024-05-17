export abstract class BankAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getaccountNumber = (): number => {
    return this.accountNumber
  }

  getName = (): string => {
    return this.name
  }

  setBalance = (value: number): void => {
    this.balance = value;
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value;
      console.log(`The amount of $ ${value} was deposited successfully!`)
    } 
  }

  withdraw = (value: number): void => {
    if(this.validatebalance(value)){
      this.balance -= value;
      console.log(`The amount of R$ ${value} was successfully withdrawn!`)
    } else {
      console.log(`It was not possible to withdraw the amount of R$ ${value} as there is no balance available!`)
    }
  }


  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Invalid account, check if your account is active!!!')
  }
  private validatebalance = (value: number): boolean => {
    if (this.balance >= value) {
      return true
    }else {
      return false
    }
  }
}