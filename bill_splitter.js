let billamount = 50; // This number is changed by user based on the bill amount.
let tip = billamount >50 ? billamount * 0.20 : billamount * 0.15; // This calculated the tip based on if the bill is more or less than 50.
console.log(`The calculated tip is $${tip.toFixed(2)}`); // Output of tip amount.

let totalamount = billamount + tip;
console.log(`Bill Amount = $${billamount.toFixed(2)}`); // This uses previously stated billamount from 1st task, Displays bill amount.
console.log(`Tip = $${tip.toFixed(2)}`); // This also uses previously stated tip from 1st task, Displays tip amount.
console.log(`Total Amount = $${totalamount.toFixed(2)}`); // Displays total cost amount.

function calculatetip(billamount) {
     let tip = billamount >50 ? billamount * 0.20 : billamount * 0.15; // The same tip calculator as used earlier.
     return tip };
let totalbill = 100; // This is our input slot for the total bill.
let tipamount = calculatetip(totalbill);
console.log(`A bill with the value of $${totalbill.toFixed(2)}, the tip amount would be $${tipamount.toFixed(2)}`); //Output slot for total bill with calculated tip.

let bills = [45, 50, 65, 75, 100]; // Array of the total bills
let tips = bills.map(bill => calculatetip(bill)); // Array of tip amounts
let totals = bills.map((bill, index) => bill + tips[index]); // Array of total amounts.
console.log("Bills:", bills, "Tips:", tips, "Totals:", totals); // A console log output with them all together.

function calculatebilldetails(bills) {
    let tips = bills.map(bill => calculatetip(bill))
    let totals = bills.map((bill, index) => bill + tips[index]);
    return { tips, totals}}
bills = [275, 40, 430]; // Inputs of Dataset1
let Dataset1 = calculatebilldetails(bills);
console.log("DataSet 1:", "Bills:", bills, "Tips:", Dataset1.tips, "Totals:", Dataset1.totals); // Outputs of Dataset1

bills = [125, 555, 44]; // Inputs of Dataset2
let Dataset2 = calculatebilldetails(bills);
console.log("DataSet 2:", "Bills:", bills, "Tips:", Dataset2.tips, "Totals:", Dataset2.totals); //Outputs of Dataset2