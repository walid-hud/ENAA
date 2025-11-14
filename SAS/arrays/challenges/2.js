// completed ✅ //

// sum and average

const exampleArray = [1,2,3,4,5,6,7,8,9,10]

function getSumAndAverage(numbers = []){
    let avr , sum;
    sum = numbers.reduce((prev , current )=> prev + current )
    avr = sum / numbers.length
    console.log(`
        sum : ${sum}
        average : ${avr}
    `);
}


getSumAndAverage(exampleArray)