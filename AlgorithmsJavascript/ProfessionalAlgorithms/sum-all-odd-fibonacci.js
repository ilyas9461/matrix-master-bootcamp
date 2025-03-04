/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is 
the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5, and 8.
*/


function getFibSeries(num){
    let series = []
    for (let index = 0; index <= num; index++) {
        if (index < 2) {
            series[index] = index
        }
        else {
            series[index] = series[index - 2] + series[index - 1]
        }
    }
    // console.log(series);
    return series
}

function sumFibsOdds(num) {
    let sum = 0
    let series = getFibSeries(num)
    for (let index = 0; index < series.length; index++) {
        if (series[index] % 2 !== 0) {
            sum += series[index]
        }
    }
    return sum;
  }

// console.log(getFibSeries(20), sumFibsOdds(20)); 
console.log(getFibSeries(10), sumFibsOdds(10));  

