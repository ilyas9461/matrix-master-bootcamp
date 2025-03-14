// Given an array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].  
// Solve this recursively. For this algorithm, write the pseudocode, before your JS code.

const arr = [1, -2, 4, -1]

const removeNegElArr = (arr) => {
    let temp=[]
    for (let index = 0; index < arr.length; index++) {
        // if (arr[index]< 0) arr.splice(index, 1)
        if (arr[index]>= 0) temp.push(arr[index])
        
    }
    // return arr
    return temp
   
}

console.log(removeNegElArr(arr));
