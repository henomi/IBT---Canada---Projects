// Step 1: Read input variables (you can change these values to test)
const rawBill = "450"; // Raw string input
const partySize = 3;
const paymentMethod = "TeleBirr"; // Options: "TeleBirr", "CBE Birr", or default

// Convert bill with Number()
const bill = Number(rawBill);

// Step 2: Add a 10% tip when bill is over 300 ETB, else 5%
const tipRate = bill > 300 ? 0.10 : 0.05;
const tipAmount = bill * tipRate;

// Step 5: Use a switch to add a TeleBirr / CBE Birr service fee
let serviceFee = 0;
switch (paymentMethod) {
  case "TeleBirr":
    serviceFee = 5; // Flat 5 ETB fee
    break;
  case "CBE Birr":
    serviceFee = 2; // Flat 2 ETB fee
    break;
  default:
    serviceFee = 0;
    break;
}

// Step 3: Compute total and per-person amount
const total = bill + tipAmount + serviceFee;
const amountPerPerson = total / partySize;

// Step 4: Print a clear message using a template literal
const output = `--- Bill Breakdown ---
Original Bill: ${bill.toFixed(2)} ETB
Tip (${tipRate * 100}%): ${tipAmount.toFixed(2)} ETB
Service Fee (${paymentMethod}): ${serviceFee.toFixed(2)} ETB
----------------------
Total Amount: ${total.toFixed(2)} ETB
Per Person (${partySize} people): ${amountPerPerson.toFixed(2)} ETB`;

console.log(output);