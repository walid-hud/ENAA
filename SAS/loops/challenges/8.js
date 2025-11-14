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

    let maxNumberOfStars = primeNumbersArray.at(-1)

    for(let i = 0 ; i < primeNumbersArray.length ; i++){
        /*
        Calculates the space need for the pyramid to be asymmetric by
        subtracting the number of stars in the current line from the maximum 
        number of stars (which defines the width of the pyramid) and then dividing it by 2 
        so that the stars are pushed by half the space.
        if the space isn't divided, the stars will be pushed by all the spaces!
        */
        let spaces = (maxNumberOfStars - primeNumbersArray[i]) / 2

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
