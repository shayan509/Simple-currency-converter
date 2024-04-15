import inquirer from "inquirer";

console.log("Answer The below questions , note that the rates in our program are not ofter updated.")
const currency : any = {
  USD: 1,  //Base currency
  EUR: 0.91,
  GPB: 0.76,
  INR: 74.57,
  PKR: 280
};

let userAns = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from currency.",
    type: "list",
    choices: ["USD", "EUR", "GPB", "INR", "PKR"],
  },
  {
    name: "to",
    message: "Enter to currency.",
    type: "list",
    choices: ["USD", "EUR", "GPB", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "Enter your amount.",
    type: "number",
  },
]);
let fromAmount = currency[userAns.from];
let toAmount = currency[userAns.to]
let amount = userAns.amount
let baseAmount  = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(`Your amount is ${convertedAmount}.`);
console.log(`Thanks for using our program.`);
