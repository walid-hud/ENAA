// completed ✅ //


// reverse array


import rl from "./shared.js"


rl.question("enter 5 numbers : " , (input)=>{
    let numbers = input.trim().split(" ").map((num)=> parseInt(num))
    revArr(numbers)
    rl.close()
})
function revArr(numbers = []){
    console.log(numbers.reverse())
}