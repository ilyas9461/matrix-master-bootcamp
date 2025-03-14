/*
    1- Given an array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. 
    When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2]., write the pseudocode, before your JS code.

*/

const arr = [2, 1, 6, 4, -7]
console.log(arr);

// Comple reverse arr to front.
const shiftArrToFront = (arr) => {
    let tempArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        tempArr.push(arr[i]);
    }
    return tempArr;
}
// console.log(shiftArrToFront(arr)); // [-7,4,6,1,2]

// shift arr element to left then the element is first element.
const leftShiftArr = (arr, el) => {
    let tempArr = []
    for (let i = el; i < arr.length; i++) {
        tempArr.push(arr[i])
    }
    for (let i = 0; i < el; i++) {
        tempArr.push(arr[i])
    }
    return tempArr
}
// console.log(leftShiftArr(arr,2))

// Shift arr element to right then the element is last element.
const rightShiftArr = (arr, el) => {
    let tempArr = []
    for (let i = arr.length - 1; i > el; i--) {
        tempArr.push(arr[i])
    }
    for (let i = 0; i <= el; i++) {
        tempArr.push(arr[i])
    }
    return tempArr
}

// for (let index = 0; index < arr.length; index++) {
//     console.log(rightShiftArr(arr,index));   
// }

const shiftElLeftBy = (arr, index, shiftCount) => {
    if (arr.length === 0 || index < 0 || index >= arr.length) return arr; // Handle edge cases

    let newIndex = Math.max(0, index - shiftCount); // Ensure new index is not negative
    let element = arr[index]; // Store the selected element

    // Shift elements in the range [newIndex, index]
    for (let i = index; i > newIndex; i--) {
        arr[i] = arr[i - 1]; 
    }

    arr[newIndex] = element; // Place element in new position
    return arr;
}

console.log(shiftElLeftBy(arr, 2, 1));
