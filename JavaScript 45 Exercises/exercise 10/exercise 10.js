// Exercise 10 Adding Comments

//This code is designed to measure the Body Mass Index(BMI)
let heightInInches = prompt("To calculate BMI 1st enter height in inches");
let heightInCm = heightInInches * 2.54;
console.log("Your height in centimeters = " + heightInCm);
let weightInPounds = prompt("To Calculte BMI Now enter weight in pounds");
let weightInKilos = weightInPounds / 2.2046;
console.log("Your Body weight in Kilos = " + weightInKilos);
// Now we convert cm to meters
// As we know 
// 1 meter = 39 inches
// and 1 meter contains 39(inch) * 2.54(cm) = 99.06 cm
// Now we convert obtained cm value through prompt to meter by following below equation
let heightInMeters = heightInCm / 99.1;
let squaredHeightInMeters = heightInMeters * heightInMeters;
//console.log("Your height in meters = " +heightInMeters)
//console.log("Your squared height in meters = " +squaredHeightInMeters)

let BMI = weightInKilos / squaredHeightInMeters;
console.log ("Your Body Mass Index (BMI) = "+ BMI);