let numbers = [1,2,3,4,5,6,7,8,9,10];

for(let a = 0; a < numbers.length; a++ ){
    if ( numbers[a] == 1 ){
        console.log('1st');
    }

    else if ( numbers[a] == 2 ){
        console.log('2nd');
    }
    else if ( numbers[a] == 3 ){
        console.log('3rd');
    }
    else {
        console.log(numbers[a] + 'th');
    }
        
 
}