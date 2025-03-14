// Write a program that Shifts each number in an array by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2]. 
// Write the pseudocode, before your JS code.


const arr = [2, 1, 6, 4, -7]
console.log(arr);

// Comple reverse arr to front.
const shiftArrToFront = (arr) => {
    let tempArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);        
        tempArr.push(arr[i]);
    }
    return tempArr;
}
console.log(shiftArrToFront(arr)); 