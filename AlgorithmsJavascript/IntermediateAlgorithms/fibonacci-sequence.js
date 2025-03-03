/**
     Immediately you find the pattern: setting the first two terms to be 1, 
    any other term is the sum of the two previous terms. 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13 and so on.
    In this way, if n would be equal to 4 your result should be 3; but if n is 7, then the result is 13.
 */

function Fib(num) {
    let seq = 1
    let seq1 = 0
    let seq2 = 0

    for (let i = 2; i <= num; i++) {
        seq2 = seq1
        seq1 = seq
        seq = seq1+seq2

        console.log(i, seq);
        
    }

    return seq
}
console.log(Fib(7))