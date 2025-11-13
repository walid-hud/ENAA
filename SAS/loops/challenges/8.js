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

    log(primeNumbersArray)
    let spaces= 10
    for(let i = 0 ; i < primeNumbersArray.length ; i++){
        let line= " "
        
        for(let i = 0; i < spaces ; i++){
            line+=" "
            spaces
        }
        for(let j = 0; j< primeNumbersArray[i] ; j++){
            line+="*"
            // spaces = (primeNumbersArray[i] - primeNumbersArray[i+1]) * -1 /2
        }
        console.log(line)
        
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
