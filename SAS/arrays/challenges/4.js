// completed ✅ //
import {log} from "console"

import rl from "./shared.js"



rl.question("enter 3 strings separated by commas : " , (input)=>{
    const stringInput = input
    rl.question("enter string to search for : " , (input)=>{
        const stringToSearch = input
        findSubString(stringInput , stringToSearch) 
    })
    
})


function findSubString(string  , subString){
    let index  = string.split(",").indexOf(subString)
    if(index > 0){
        log(`string "${subString}" exists at index : ${index}`)
    }else{
        console.log(`string "${subString}" doesn't exist`);
        
    }
    rl.close()
}