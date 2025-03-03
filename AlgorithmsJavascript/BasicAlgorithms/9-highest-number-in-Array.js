/**
    Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. 
    Your algorithm should do only one iteration of the array (just one for/while loop).
 */

function thirdHighest(input) {
    let highstThird = [0, 0, 0]
    input.forEach(el => {
        if (el > highstThird[0]) {
            highstThird[2] = highstThird[1] //third
            highstThird[1] = highstThird[0] //second
            highstThird[0] = el             //first
        } else if (el > highstThird[1]) {
            highstThird[2] = highstThird[1]
            highstThird[1] = el
        } else if (el > highstThird[2]) {
            highstThird[2] = el
        }
    });
    return highstThird
}

const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]

console.log(thirdHighest(arr));
