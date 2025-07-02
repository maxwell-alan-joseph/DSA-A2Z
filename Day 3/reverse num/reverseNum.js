const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('Enter an Integer: ', (input) => {
    let N = parseInt(input);
    let reverseN = 0;

    while (N > 0){
        let lastDigit = N % 10;
        reverseN = (reverseN * 10) + lastDigit; 
        N = Math.floor( N / 10)
    }
    console.log(reverseN);

    r1.close();
})