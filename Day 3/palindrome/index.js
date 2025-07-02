/*
Given an integer N, return true if it is a palindrome
else return false
*/function palindrome(N) {
    let revNum = 0;
    let dup = N;

    while ( N > 0) {
        let lastDigit = N % 10;

        revNum = (revNum * 10) + lastDigit;

        N = Math.floor( N / 10);
    }

    return dup === revNum;
}

function main() {
    let number = 4554;

    if(palindrome(number)) {
        console.log(`${number} is a palindrome`);
    } else {
        console.log(`${number} is not a palindrome`);
    }
}

main();