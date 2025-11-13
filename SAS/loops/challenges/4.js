import { log } from "console"
import rl from "./shared.js"


rl.question("number : " , (num)=>{
    reverseNum((num))
    rl.close()
})

function reverseNum(num = ""){
    let reversed = ""
    let arrayFromNumber = []
    let reverseNumArray = []
    for(let i = 0; i < num.length ; i++){arrayFromNumber.push(num[i])}
    for(let i = arrayFromNumber.length -1  ; i >= 0   ; i-- ){
        reverseNumArray.push(arrayFromNumber[i])
    }
    for(let i = 0 ; i < reverseNumArray.length ; i++){reversed+=reverseNumArray[i]}
    log(`reversed :  ${reversed}`)
}