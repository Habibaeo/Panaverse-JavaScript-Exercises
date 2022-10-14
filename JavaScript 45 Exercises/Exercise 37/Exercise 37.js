function make_shirt(size= "Large", msg){
    if(size == "Large" || size== "Medium" )
    console.log(size + " I Love JavaScript.");

    else{
        console.log(size+ ' shirts are available in the market.');
    }

}

make_shirt();
make_shirt('Medium');
make_shirt('Any Size');