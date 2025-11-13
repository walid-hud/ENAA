import { log } from "console"

let exampleNumbers = [1 , 2 , 3 , -1 , -2]
function sumNonNegative(numbers = []){
    let sum = 0
    for(let i = 0 ; i < numbers.length ; i++){
        if(numbers[i]>0){
            sum+=numbers[i]
        }
    }

    log(sum)
}

sumNonNegative(exampleNumbers)