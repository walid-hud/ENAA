import { log } from "console";


let exampleArr = [10 , 20 , 30 , 1 , 101]
function sum_max(numbers = []){
    let sum = 0;
    let max = 0;
    for(let i = 0 ; i < numbers.length ; i++){
        if(numbers[i] > 100) continue;
        if(numbers[i] % 10 === 0){
            sum+=numbers[i]
            if(max <  numbers[i]){max = numbers[i] }
        }
    }
    return {sum , max}
}

console.log(sum_max(exampleArr))
