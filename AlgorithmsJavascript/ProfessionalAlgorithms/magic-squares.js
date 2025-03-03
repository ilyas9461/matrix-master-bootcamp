/**
 A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15. Here's an example:
<code>
8 1 6
3 5 7
4 9 2
</code>
The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.
[8, 1, 6, 3, 5, 7, 4, 9, 2] => true
[2, 7, 6, 9, 5, 1, 4, 3, 8] => true
[3, 5, 7, 8, 1, 6, 4, 9, 2] => false
[14, 1, 6, 1, 4, 3, 4, 9, 2] => false
 */

function magicSquare(arr){
    if(arr.length!==9) {
        console.log('You need at least 9 numbers....');
        return
    }
    let arrWith2Dimensions=[]
    let temp=[]
    for (let i = 0; i < arr.length+1; i++) {        
       if(i%3===0 && i!==0)  {
        arrWith2Dimensions.push(temp)
        temp=[]
       }     
       temp.push(arr[i])    
    }

    let sumSquareLeft=0
    let sumSquareRight=0
    arrWith2Dimensions.forEach((el,index)=>{
        console.log(el);
        sumSquareLeft+=el[index]
        sumSquareRight+=el[el.length-1-index]        
    })
    console.log(sumSquareLeft, sumSquareRight)
    if(sumSquareLeft===sumSquareRight) return true
    else return false
    
}

// console.log(magicSquare([8, 1, 6, 3, 5, 7, 4, 9, 2]))
console.log(magicSquare([14, 1, 6, 1, 4, 3, 4, 9, 2]));
 