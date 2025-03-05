// Get the year from the command line argument
let year = parseInt(process.argv[2]);

// Check if the year is a 4-digit number
if (year >= 1000 && year <= 9999) {
    // Leap year conditions
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year");
    } else {
        console.log(year + " is not a Leap Year");
    }
} else {
    console.log("Please enter a valid 4-digit year.");
}