let num = 103.941
//pembulatan
/*
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))*/

function guessingGame(input){
    let min = 1
    let max = 5
    let rand = Math.floor(Math.random()*(max-min+1))+min
    if(input == rand){
        console.log("yes")
    }else{
        console.log("no")

    }

}
guessingGame(5)