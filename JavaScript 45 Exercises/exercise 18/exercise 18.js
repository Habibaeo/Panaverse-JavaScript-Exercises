// Store the location in an array
let placesToVisit = ["Great China Wall","Khunjrab Pass","Ahraam e Misr","New York","Hunza"];

// print array in original order
console.log(placesToVisit);

// print array in alphabetical order without modifying the original list
let sortedPlacesWithoutMutation = [...placesToVisit].sort();

console.log(sortedPlacesWithoutMutation);

// show array in original order
console.log(placesToVisit);

// Array in reverse Alphabetical order
let reverseSortedWithoutMutation = [...placesToVisit].sort().reverse();

console.log(reverseSortedWithoutMutation);
// Array in original order
console.log(placesToVisit);

// Reverse the order of list
placesToVisit.reverse();

console.log(placesToVisit);

// Again reverse the order back to original list
placesToVisit.reverse();

console.log(placesToVisit);

// Array sorted to store in aalphabetical order
placesToVisit.sort();

console.log(placesToVisit);

// sorted array to store in reverse alphabetical order
placesToVisit.sort().reverse();

console.log(placesToVisit);