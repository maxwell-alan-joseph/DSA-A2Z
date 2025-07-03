/* 
Given an integer N, return true it is an armstrong number
ex 
input = 153
output = true

explanation = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
*/
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter a number: ', (input) => {
    let number = parseInt(input);

    const l = String(number).length;
    let sum = 0;

    let tempN = number; 

    while ( tempN > 0){
        const lastDigit = tempN % 10;

        sum += Math.pow(lastDigit, l);

        tempN = Math.floor( tempN / 10);
    }

    if (sum === number) {
        console.log(`Given number ${number} is an armstrong number`);
    } else {
        console.log(`Given number ${number} is not an armstrong number`);
    }

    r1.close();
});

