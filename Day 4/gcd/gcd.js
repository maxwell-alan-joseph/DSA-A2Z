const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter num1 & num2: ', (input) => {
    const numbers = input.split(' ');
    let num1 = parseInt(numbers[0]);
    let num2 = parseInt(numbers[1]);

    const N1 = num1;
    const N2 = num2;

    while(num1 > 0 && num2 > 0){
        if( num1 > num2){
            num1 = num1 % num2; 
        } else {
            num2 = num2 % num1;
        }
    }

    let gcd = "";
    if (num1 === 0){
        gcd = num2;
    } else {
        gcd = num1;
    }

    console.log(`GCD of ${N1} & ${N2}: ${gcd}`);
    r1.close();
});