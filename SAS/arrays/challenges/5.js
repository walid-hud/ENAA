// completed ✅ //
// min / max

import {log} from "console"

let exampleArr = [11,2,32,43,6,20]
function minMax(arr = []){
    arr.sort((a , b )=>{return a - b})
    let min = arr.at(0);
    let max = arr.at(-1)
    console.log(`min : ${min} ; max : ${max}`);
}
minMax(exampleArr)