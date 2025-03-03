/**
 For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
 A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. 
 A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

            0 1 1 2 3 5 8 13 21...
 */

let series = []
for (let index = 0; index < 10; index++) {
    if (index < 2) {
        series[index] = index
    }
    else {
        series[index] = series[index - 2] + series[index - 1]
    }
}
console.log(series);

// [
//     0, 1, 1, 2, 3,
//     5, 8, 13, 21, 34
// ]

