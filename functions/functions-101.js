let greetUser = function(){
    console.log('welcome user!')
}

greetUser()

let square = function(a){
    return a*a
}

console.log(square(3))

function convertFahrenheitToCelcius(fahrenheit){
    let celcius = (5/9)*(fahrenheit-32)
    return console.log(celcius)
}
convertFahrenheitToCelcius(32)
convertFahrenheitToCelcius(68)