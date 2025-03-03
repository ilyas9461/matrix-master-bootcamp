// Return an array consisting of the largest number from each provided sub-array. For simplicity, 
// the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
// [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
// Returns [5,27,39,1001]

const arrFour=[[4, 5, 1, 30], [13, 27, 18, 26], [32, 350, 37, 39], [1000, 1001, 857, 1]]

function maxInArrWithFor(arr){
    let max=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}

function maxInArrWithForEach(arr){
    let max=0
    arr.forEach(el=>{
        if(el>max) max=el
    })
    return max
}

function maxInArrWithReduce(arr){
    let max=0    
    max=arr.reduce((a,b)=>{
        if(a<b) a=b
        return a
    },0)
    return max    
}

function largestOfFour(arr){
    let maxArr=[]
    arr.forEach(el=>{       
        maxArr.push(maxInArrWithFor(el))
        maxArr.push(maxInArrWithForEach(el))
        maxArr.push(maxInArrWithReduce(el))
        maxArr.push(Math.max(...el))
    })
    return maxArr
}

// largestOfFour(arrFour)

console.table(largestOfFour(arrFour));
