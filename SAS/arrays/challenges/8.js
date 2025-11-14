// completed ✅ //
// vowel counter

const exampleString = "hello, friend"

function vowelCouter(str){
    let vowels = ["a" , "i" , "o" , "u" , "e"]
    let vowelCount= 0;
    str.split("").map((char)=>{
        if(vowels.includes(char) > 0) vowelCount++
    })
    console.log(`
        Input string :${str}
        Number of vowels : ${vowelCount}
        `);
    
}

vowelCouter(exampleString)