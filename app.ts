import { CompanyAccount } from "./class/CompanyAccount";
import { OtherAccount } from "./class/OtherAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Daniel', 10)
peopleAccount.deposit(5)
console.log(peopleAccount.getBalance());
peopleAccount.withdraw(6)
console.log(peopleAccount.getBalance());

const companyAccount: CompanyAccount = new CompanyAccount('Work', 20)
companyAccount.deposit(10)
console.log(companyAccount.getBalance());
companyAccount.withdraw(5)
console.log(companyAccount.getBalance());
companyAccount.getLoan(50)
console.log(companyAccount.getBalance());

const otherAccount: OtherAccount = new OtherAccount('Bruno', 30)
otherAccount.deposit(10)
console.log(otherAccount.getBalance());