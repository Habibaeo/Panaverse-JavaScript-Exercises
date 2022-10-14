let personsAge = prompt("Write you age in number");

if(personsAge < 2){
    console.log('The person is a baby');
}


else if(personsAge >= 2 && personsAge < 4){
    console.log('The person is a toddler');
}


else if(personsAge >= 4 && personsAge < 13){
    console.log('The person is a kid');
}


else if(personsAge >= 13 && personsAge < 20){
    console.log('The person is a teenager');
}


else if(personsAge >= 20 && personsAge < 65){
    console.log('The person is an adult');
}


else if(personsAge >= 65 ){
    console.log('The person is a elder');
}