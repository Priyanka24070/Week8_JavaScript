// Generate 5 random 3-digit numbers
let numbers = [
    Math.floor(Math.random() * 900) + 100,
    Math.floor(Math.random() * 900) + 100,
    Math.floor(Math.random() * 900) + 100,
    Math.floor(Math.random() * 900) + 100,
    Math.floor(Math.random() * 900) + 100
];

// Find minimum and maximum values
let min = Math.min(...numbers);
let max = Math.max(...numbers);

// Output results
console.log("Generated Numbers:", numbers);
console.log("Minimum Value:", min);
console.log("Maximum Value:", max);