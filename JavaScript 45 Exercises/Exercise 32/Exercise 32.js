let current_users = ['hamad', 'admin','aqib', 'uzair', 'mohsin'];

let new_users = ['ali', 'Mumtaz','Admin', 'mzhar','uzair'];
// to lower case
let new_users_lower = [];
for (let i =0; i < new_users.length; i++){
    new_users_lower[i] = new_users[i].toLowerCase();
}

for(let a of new_users_lower){
    if (current_users.includes(a)){
        console.log("Enter a new Username")
    }
    else{
        console.log('Username '+ a +' is available')
    }
}