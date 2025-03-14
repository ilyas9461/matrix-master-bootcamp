// Given an array of integers IntAtt, for example, IntArr = [2,7,1,-2], 
// implement a function to sort this array in ascending order (from lowest to largest) using
//  the Selection Sort method. For this algorithm, write the pseudocode, 
// before your JS code.

function swapElementsArr(arr, a, b) {
    //a and b are indexes
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function selectionSort(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            swapElementsArr(arr, i, minIndex)
        }
    }
    
    return arr;
}

const array = [2,7,1,-2];
console.log(selectionSort(array)); 
