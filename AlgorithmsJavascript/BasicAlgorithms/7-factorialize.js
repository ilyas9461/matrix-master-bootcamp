/**
    Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.
    If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
    Factorials are often represented with the shorthand notation n!

    For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

    factorialize(0) should return 1.
    factorialize(10) should return 3628800.
    factorialize(20) should return 2432902008176640000.
 */

    function factorialize(n){
        if(n===0) return 1
        else{
            let mult=1
            for(let i=1;i<n+1;i++){
                mult*=i
            }
            return mult
        }
    }

    console.log(factorialize(10));
    