// Converting Name to Lowercase
let personsName = prompt("Enter your Name");
let nameToLowercase = personsName. toLowerCase();
console.log("Typed Name is "+personsName);
console.log("Name After converting to lower case is "+nameToLowercase);
// Converting Name to Uppercase
let nameToUppercase = personsName. toUpperCase();
console.log("Name After converting to Upper case is "+nameToUppercase);

// Converting Name containing only 1 word to titlecase

let titleCase1 = personsName. toUpperCase().slice(0,1);
let titlecase2 = personsName. toLowerCase().slice(1);
console.log("Single word name After converting to titlecase is "+titleCase1+titlecase2);

// Converting Name containing multiple words with spaces b/w for e.g. Habib Ur Rehman

let titleCase3 = personsName. toLowerCase().split(" ");
for (var i = 0; i < titleCase3.length;i++){
    titleCase3[i] = titleCase3[i].charAt(0).toUpperCase() + titleCase3[i].slice(1);
}

//console.log(titleCase3)

console.log(titleCase3.join(" "));

