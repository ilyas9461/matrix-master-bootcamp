/*  We want to play a "Game of 3s". Here's how you play it:
    First, you pick a random number. Then, repeatedly do the following:
    If the number is divisible by 3, divide it by 3.
    If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
    The game stops when you reach "1".
    //OUTPUT: gameOfThree(100);
                100 -1
                33 0
                11 1
                4 -1
                1
*/
function gameOfThree(n) {
    let isGameOver = false
    let resultDivide = n
    while (!isGameOver) {

        if (resultDivide % 3 == 0) {
            console.log(resultDivide, '0');
            resultDivide /= 3
        } else {
            if (resultDivide % 2 === 0) {
                console.log(resultDivide, '-1');
                resultDivide--
            }
            else {
                console.log(resultDivide, '+1');
                resultDivide++
            }
        }
        if (resultDivide < 2) isGameOver = true
    }
}

gameOfThree(100)