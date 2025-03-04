/**
 * Title: Recursive Factorial
    A recursive function is a function that calls itself in order to solve a problem. 
    The key to a successful recursive function is having a base case that stops the recursion and 
    prevents an infinite loop. Let's break down the provided factorial function as an example:

    factorial(5) calls factorial(4)
    factorial(4) calls factorial(3)
    factorial(3) calls factorial(2)
    factorial(2) calls factorial(1)
    factorial(1) calls factorial(0)

    factorial(0) returns 1 (base case)
    factorial(1) returns 1 * 1 = 1
    factorial(2) returns 2 * 1 = 2
    factorial(3) returns 3 * 2 = 6
    factorial(4) returns 4 * 6 = 24
    factorial(5) returns 5 * 24 = 120

    Base Case: Stops the recursion.
    Recursive Case: The function calls itself with a modified argument.
    Stack: Each function call is placed on the call stack until the base case is reached.
 */ 

const num = 5;
//recursive
const factorial = function(n) {
    if(n == 0) {    //base case
        return 1
    } else {        //recursive case
        return n * factorial(n - 1);  //recursive call
    }
}
console.log(factorial(num));