let varOne = 'varOne'
if (true){
    console.log(varOne)
    let varTwo = 'varTwo'
}
console.log(varTwo)

//Lexival Scope (static scope)
/*Global Scope 
Local Scope 
*/

if(true){
    if(true){
        jen = "jen"
    }
}
if(true){
    console.log(jen)
}