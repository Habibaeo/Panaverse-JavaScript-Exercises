let guestList = ["M Shahzad", "M Shahbaz", "Mehboob Ul Haq", "Irfan Ul Haq"];
guestList[2] = "Asim";

console.log(" It is my pleasure to announce that we have managed to arrange a bigger dinner table."+
" Which means More fun with More freinds.");
// Adding person to start of array
guestList.unshift("M Ibrahim");

console.log(guestList);

console.log(guestList.length);

guestList.splice(2,0, "M Uzair");

console.log(guestList);

console.log(guestList.length);

guestList.push("Suleman");

console.log(guestList);

console.log(guestList.length);

console.log("Hello Brother "+ guestList[0] + " you are invited to a Special Dinner coming Sunday at 8:00 pm in my house.");

console.log("Hello Brother "+ guestList[1] + " you are invited to a Special Dinner coming Sunday at 8:00 pm in my house.");

console.log("Hello Brother "+ guestList[2] + " you are invited to a Special Dinner coming Sunday at 8:00 pm in my house.");

console.log("Hello Brother "+ guestList[3] + " you are invited to a Special Dinner coming Sunday at 8:00 pm in my house.");
console.log("Hello Brother "+ guestList[4] + " you are invited to a Special Dinner coming Sunday at 8:00 pm in my house.");

console.log("Hello Brother "+ guestList[5] + " you are invited to a Special Dinner coming Sunday at 8:00 pm in my house.");

console.log("Hello Brother "+ guestList[6] + " you are invited to a Special Dinner coming Sunday at 8:00 pm in my house.");
