// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer. 
// a factorial is the product of all positive integers less than or equal to n. For example: 5! = 1 * 2 * 3 * 4 * 5 = 120. 
// Build the complete T diagram for it.

const factorial=n=>{
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));