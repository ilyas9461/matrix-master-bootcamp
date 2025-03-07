/**
    We have a triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, 
    the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total 
    number of blocks in such a triangle with the given number of rows.
 */

const rTriangle = function (rows) {
    if (rows == 0) {
        return 0;
    } else {
        return rows + rTriangle(rows - 1);
    }
}

console.log(rTriangle(0)); // 0
console.log(rTriangle(1)); // 1 
console.log(rTriangle(2)); // 3
console.log(rTriangle(3)); // 6