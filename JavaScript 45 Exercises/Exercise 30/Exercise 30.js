let userNames = ['hamad', 'admin','aqib', 'uzair', 'mohsin'];

for(i= 0; i < userNames.length; i++) {
    if(userNames[i] != 'admin'){
        console.log('Hello ' + userNames[i] + ' thank you for logging in again.');
    }
    else{
        console.log('Hello ' + userNames[i] + ',would you like to see a status report.')
    }
}

//console.log(userNames.length);

