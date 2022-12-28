// 2 arguments : student score, total possible score 
//output : percentage  and grade 

let scoreStudent 
function gradeCalc(scoreStudent,total=20){
    let percentage = scoreStudent/total
    let percentageConversion = percentage*100
    if(percentageConversion>=0 && percentageConversion< 60){
        return 'F'
    } else if (percentageConversion >=60 && percentageConversion<68 ){
        return 'E'
    }
}

console.log(gradeCalc(5))