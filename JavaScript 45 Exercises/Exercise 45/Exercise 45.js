
function car(manufacturer, model, a={}) {
    return {manufacturer , model , ...a,
    }

}

console.log(car('Changan','Alswin',{color: 'Blue'}));

console.log(car('Audi','A3',{color: 'Black', airbags : 'Yes'}));

console.log(car('Suzuki','Alto',{Color: 'White ', Airbags : 'No', Registration : ' Lahore'}));