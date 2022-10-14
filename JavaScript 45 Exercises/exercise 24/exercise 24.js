// (1) equality, inequality with strings

let country = "Pakistan";
//true
console.log(country == "Pakistan");
//false
console.log(country == 'pakistan');

// (2) Test using lower case function

let province = 'PuNJab';

let province1 = province.toLowerCase();

let province2 = 'punjab';
// True
console.log(province1 == province2);
//False
console.log(province1 != province2);

//(3) Numerical tests 
//(i) equality, inequality
let shopNumber = 23 ;
// true
console.log(shopNumber == 23);

console.log(shopNumber === 23);
// false

console.log(shopNumber == 32);

console.log(shopNumber != 23);

//(ii) greater than, less than
// true

console.log(shopNumber > 3);

console.log(shopNumber < 32);

// false

console.log(shopNumber > 32);

console.log(shopNumber < 3);

// (iii) greater than equal to
// flase
console.log(shopNumber >= 32);

// (iv) less than equal to
//true

console.log(shopNumber <= 32);

// (4) tests using and operator
// true
console.log(shopNumber == 23 && typeof shopNumber == 'number');

// false
console.log(shopNumber == 23 && typeof shopNumber == 'bolean');

// tests using or operators

// true
console.log(shopNumber == 3 || typeof shopNumber == 'number');

// false
console.log(shopNumber != 23 || typeof shopNumber == 'bolean');

// (5) Test whether an item is in an array

let cityArray = ["lahore", "islambad", "karachi", "peshawar"];

// true
console.log(cityArray.includes("karachi"));

// false
console.log(cityArray.includes("gujranwala"));