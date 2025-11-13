import { log } from "console";
import rl from "./shared.js"


rl.question("number : " ,(num)=>{
    if(isPrime(num)){
        log(`${num} is a prime`)
    }else{
        log(`${num} is not a prime`)
    }
    rl.close()
} )




function isPrime(num) {
    const x = parseInt(num)
    if (x <= 1) {return false}
    for (let i = 2; i < x; i++) {
        if (x % i === 0) return false; 
    }
    return true; 
}


isPrime(5)

export default isPrime