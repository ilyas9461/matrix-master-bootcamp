
// Define a function rFib(num) that takes a positive integer as an input. Returns the Nth Fibonacci number, 
// with n=1 representing the start of the sequence. Solve this recursively. For this algorithm, 
// write the pseudocode, before your JS code.

function rfib(n) {
    if (n < 2) {
        return n;
    } else {
        let sum = rfib(n - 1) + rfib(n - 2);
        console.log(sum)
        return sum;
    }
}

console.log(rfib(7));    
