/*let fahrenheit = 32 
let celcius = (5/9)*(fahrenheit-32)
console.log(celcius)

let kelvin = (fahrenheit - 32+273.15)
console.log(kelvin)*/

function calcTemperature(fahrenheit){
    let convert1 = {
        fahrenheit : fahrenheit,
        celcius : (5/9)*(fahrenheit-32),
        kelvin : fahrenheit - 32+273.15
     
}
return console.log(convert1) 
}
calcTemperature(40)