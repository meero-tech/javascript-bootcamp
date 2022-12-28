/*Array Input = [1, 2, 3, 4, 5, 6]
Output :
[ 6, 1, 2, 3, 4, 5 ]
[ 5, 6, 1, 2, 3, 4 ]
[ 4, 5, 6, 1, 2, 3 ]
[ 3, 4, 5, 6, 1, 2 ]
[ 2, 3, 4, 5, 6, 1 ]
[ 1, 2, 3, 4, 5, 6 ]*/
var arrNumber1 = [1, 2, 3, 4, 5, 6]
const sortingArray = function (arrNumber) {
    for (let i=arrNumber.length;i>0; i--){
        let pop = arrNumber.pop()
        console.log(pop)
        arrNumber.unshift(pop)
        
        console.log(arrNumber)
    }
}

console.log(sortingArray(arrNumber1))