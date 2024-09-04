const billamount = 50; // This number is changed by user based on the bill amount.
const tip = billamount >50 ? billamount * 0.20 : billamount * 0.15; // This calculated the tip based on if the bill is more or less than 50.
console.log(`The calculated tip is $${tip.toFixed(2)}`); // Output of tip amount.

const totalamount = billamount + tip;
console.log(`Bill Amount = $${billamount.toFixed(2)}`); // This uses previously stated billamount from 1st task, Displays bill amount.
console.log(`Tip = $${tip.toFixed(2)}`); // This also uses previously stated tip from 1st task, Displays tip amount.
console.log(`Total Amount = $${totalamount.toFixed(2)}`); // Displays total cost amount.

function calculatetip(billamount) {
     const tip = billamount >50 ? billamount * 0.20 : billamount * 0.15; // The same tip calculator as used earlier.
     return tip };
const totalbill = 100; // This is our input slot for the total bill.
const tipamount = calculatetip(totalbill);
console.log(`A bill with the value of $${totalbill.toFixed(2)}, the tip amount would be $${tipamount.toFixed(2)}`) //Output slot for total bill with calculated tip.
