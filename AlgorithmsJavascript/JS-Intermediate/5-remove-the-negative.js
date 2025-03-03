/**
    Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].
 */

let array = [1, -2, 4, 1, -5]

// for (let index = 0; index < array.length; index++) {
//     if(array[index]<0) array.splice(index,1)        
// }


function removeNegativeElements(array){
    let buf = []
    for (let index = 0; index < array.length; index++) {
        if (!(array[index] < 0)) {
            buf.push(array[index])
        }       
    }
    return buf
}

console.table(array);
array = removeNegativeElements(array)
console.table(array);
