// completed ✅ // 

import { log } from "console"
function asciiPyramid(){
    let primeNumbersArray = [1]
    let range= 8 ;
    for(let num = 3; range >= 0; num++){
        if(isPrime(num)){
            primeNumbersArray.push(num)
            range--
        }
    }

    for(let i = 0 ; i < primeNumbersArray.length ; i++){
        let spaces = (primeNumbersArray[primeNumbersArray.length-1] - primeNumbersArray[i]) /2
        let line= ""
        
        for(let i = 0; i < spaces ; i++){
            line+=" "
        }
        for(let j = 0; j< primeNumbersArray[i] ; j++){
            line+="*"
        }
        log(line)
        
    }
}

asciiPyramid()

function isPrime(num) {
    const x = parseInt(num)
    if (x <= 1) {return false}
    for (let i = 2; i < x; i++) {
        if (x % i === 0) return false; 
    }
    return true; 
}
