/**
 There are many many sorting algorithms available to a programmer: 
 insertion sort, bubble sort, merge sort, heap sort, quick sort, etc.
 Bubble sort it's one of the easiest to learn at the beginning, so we're going to focus on this one. 
 The main idea of a bubble sort algorithm is to sort an array using bubbles of elements.
 How it does do that? Its underlying mechanism can be summarised as follows:
 While the array is not sorted, the code would do the following steps:
    1-Take each pair of 2 adjacent numbers and compare them.
    2-If their order is not correct, switch them.
 */

    function swapElementsArr(arr, a, b) {
        //a and b are indexes
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    function bubbleSort(arr){
        let len = arr.length;
        for (let i = len-1; i>=0; i--){
          for(let j = 1; j<=i; j++){
            if(arr[j-1]>arr[j]){
                //swap elements
                // let temp = arr[j-1];
                // arr[j-1] = arr[j];
                // arr[j] = temp;
                swapElementsArr(arr, j-1, j)
             }
          }
        }
        return arr;
    }

    console.log(bubbleSort([7,5,2,4,3,9])); // should give [2, 3, 4, 5, 7, 9]
    console.log(bubbleSort([9,7,5,4,3,1])); // should give [1, 3, 4, 5, 7, 9]   
    console.log(bubbleSort([1,2,3,12,4,5,6])); // should give [1, 2, 3, 4, 5, 6]