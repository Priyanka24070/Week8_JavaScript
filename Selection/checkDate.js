// Get command-line arguments
let day = parseInt(process.argv[2]);   // First argument: day
let month = parseInt(process.argv[3]); // Second argument: month

// Check if the date falls between March 20 and June 20
let isValid =
    (month === 3 && day >= 20) ||  // March 20 - March 31
    (month > 3 && month < 6) ||    // April and May (full months)
    (month === 6 && day <= 20);    // June 1 - June 20

console.log(isValid);
