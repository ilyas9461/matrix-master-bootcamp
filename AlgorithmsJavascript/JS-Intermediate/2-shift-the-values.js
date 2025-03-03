/**
    Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. 
    When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].
 */

let arr = [2, 1, 6, 4, -7]
let buf = []
for (let i = 0; i < arr.length; i++) {
    buf[i]=arr[arr.length-1-i]
    console.log(buf);
}

