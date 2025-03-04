/*
Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, one and itself. 
For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

sumPrimes(10)  // should return a number.
sumPrimes(10) // should return 17.
sumPrimes(977)  // should return 73156.
*/

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
function sumPrimes(num) {
    if (num < 2 || num % 1 !== 0) {   //Number.isInteger(inputNumber);
        console.log('The number must be bigger than 1 or the number only integer.');
        return
    }
    let sum = 0  // 1 is not prime number

    for (let n = 2; n <= num; n++) {
       if(isPrime(n)) sum+=n
    }
    return sum
}

console.log(sumPrimes(977));
