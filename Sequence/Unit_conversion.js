//Convert 42 inches to feet
let inches = 42;
let feet = inches / 12;
console.log(`${inches} inches = ${feet} feet`);

//Convert Rectangular Plot (60ft x 40ft) to Meter
let lengthFeet = 60, widthFeet = 40;
let lengthMeters = lengthFeet * 0.3048;  // 1ft = 0.3048m
let widthMeters = widthFeet * 0.3048;
console.log(`Plot size in meters: ${lengthMeters.toFixed(2)}m x ${widthMeters.toFixed(2)}m`);

//Calculate Area of 25 Such Plots in Acr
let plotAreaFeet = lengthFeet * widthFeet; // Area of one plot in square feet
let totalAreaFeet = plotAreaFeet * 25;  // Area of 25 plots
let totalAreaAcres = totalAreaFeet / 43560; // 1 Acre = 43560 sq ft
console.log(`Total Area of 25 plots: ${totalAreaAcres.toFixed(2)} acres`);
