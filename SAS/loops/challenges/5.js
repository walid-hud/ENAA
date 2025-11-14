// completed ✅ //

import { log } from "console";
import rl from "./shared.js";


function printPrimeNumbers(input) {
    const n = parseInt(input);
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            log(i)
        };
    }
    rl.close();
}

rl.question("number : " ,(num)=>printPrimeNumbers(num) )

