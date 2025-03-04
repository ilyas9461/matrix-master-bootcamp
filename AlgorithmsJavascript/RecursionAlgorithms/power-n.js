/**
 * Power of n
Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, 
so powerN(3, 2) is 9 (3 squared).
 */

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(3, 2)); // 9
console.log(power(2, 3)); // 8    
console.log(power(5, 3)); // 125
