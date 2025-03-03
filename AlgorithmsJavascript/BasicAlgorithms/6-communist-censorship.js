/**
    Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], 
    replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. 
    Then make your algorithm work for any word of your choice
 */

let x = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program']

/**
    When using array.forEach(), you cannot modify the original array's elements directly inside the callback function. 
    This is because forEach() does not return a new array, nor does it allow modifying elements directly through 
    the callback’s parameters. Alternative: Use map()
 */

x.forEach((el, index) => {
    // console.log(el)
    if (el === 'Program') {
        // let buf = ''
        // for (let i = 0; i < el.length; i++) {
        //     buf += '*'
        // }
        // x[index] = buf
        x[index] = '*'.repeat(el.length)

    }
})

console.log(x);
