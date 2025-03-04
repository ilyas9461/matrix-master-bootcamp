/**
    The Fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. 
    The first two values in the sequence are 1 and 1 (essentially 2 base cases). Each subsequent value is 
    the sum of the previous two values, so the whole sequence is 1, 1, 2, 3, 5, 8, 13, 21 and so on. 
    Define a recursive fibonacci(n) method that returns the nth Fibonacci number, 
    with n=1 representing the start of the sequence.
 */
    let iterations = 0;
    let table = [];
    
    function rfib(n) {
        if (n <= 2) {
            return n;
        } else {
            iterations++;
            let serie = rfib(n - 1) + rfib(n - 2);
            table.push({ iteration: iterations, value: serie });
            return serie;
        }
    }
    
    console.log(rfib(7)); // 21    
    console.table(table);
    // console.log('Total iterations:', iterations); // Print the total iterations
    