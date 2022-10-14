let favourite_fruits = ['apple','banana','pineapple'];

let fruits = prompt("Enter your favourite fruit in small letters")

if(fruits == favourite_fruits[0]){
    console.log('you really like Apple!');
}

if(fruits == favourite_fruits[1]){
    console.log('you really like banana!');
}
if(fruits == favourite_fruits[2]){
    console.log('you really like pineapple!');
}
if(fruits == 'mango'){
    console.log('Not present in Array list');
}
/*
if(fruits == 'strawberry'){
    console.log('you really like ' + fruits + '!');
}*/

if(fruits == 'strawberry'){
    console.log('Not present in Array list');
}