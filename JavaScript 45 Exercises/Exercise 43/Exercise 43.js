let names = ['Saamri', ' Hamoon', 'Zakota', 'Gandalf'];
let great_magicians = [];

function show_magicians(a){
    console.log(a);
}

function make_great(name){
    for (let i=0; i < names.length; i++){
        great_magicians[i] = "The Great " + names[i];
    }
    return(great_magicians);
          
}      
    make_great(names);
    show_magicians("Original Magicians :" + names );
    show_magicians("Magicians with phrase :" + great_magicians);
