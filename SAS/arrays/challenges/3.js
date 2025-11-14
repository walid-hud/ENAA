
// completed ✅ //
import rl from "./shared.js"




let numberToSearch, numbers;

function findnumberAndIndex(numbers = [], numberToSearch) {
    let index = numbers.indexOf(numberToSearch);
    if (index < 0) {
        console.log(`${numberToSearch} not found`);
    } else {
        console.log(`the number ${numberToSearch} exists at index: ${index}`);
    }
    rl.close();
}

rl.question('Enter numbers separated by commas: ', (input) => {
    numbers = input.split(',').map(num => parseInt(num.trim()));
    
    rl.question('Enter number to search: ', (input) => {
        numberToSearch = parseInt(input);
        findnumberAndIndex(numbers, numberToSearch);
    });
});