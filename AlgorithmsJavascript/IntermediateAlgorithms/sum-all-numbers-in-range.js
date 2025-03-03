/**
  We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
    sumAll([1, 4])  // should return a number.
    sumAll([1, 4])  // should return 10.
    sumAll([4, 1])  // should return 10.
    sumAll([5, 10])  // should return 45.
 */

function swapValue(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a,b]
}
function sumAll(range) {
    let sum=0
    let [firstVal, secondVal] = range
    if (firstVal > secondVal) {
        [firstVal, secondVal] = swapValue(...range)
    }

    for(let i=firstVal;i<=secondVal;i++) sum+=i
    return sum
    
}

console.log(sumAll([10,10]));
