
/**
 How does it work: This is very simple.
 1- Go through the array, find the index of the lowest element swap the lowest element 
 with the first element. Hence first element is the lowest element in the array.
 2- Now go through the rest of the array (excluding the first element) find the index of the lowest and swap it with the second element.
 That is how it continues to select (find out) the lowest element of the array and put it on the left until it hits the last element.
 */

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
            // let temp = arr[i];
            // arr[i] = arr[minIndex];
            // arr[minIndex] = temp;
            swapElementsArr(arr, i, minIndex)
        }
    }
    
    return arr;
}

// Example usage:
const array = [64, 25, 12, 22, 11];
console.log(selectionSort(array)); // Output: [11, 12, 22, 25, 64]
console.log(selectionSort([7, 5, 2, 4, 3, 9])); // should give [2, 3, 4, 5, 7, 9]