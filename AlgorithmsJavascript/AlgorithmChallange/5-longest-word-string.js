// Write a function that return the length of the longest word in the provided sentence. 
// Your response should be a number. Write the pseudocode for the string 
// “The quick brown fox jumped over the lazy dog”.


const findLongestWord = str => {
    strArr = str.split(' ')
    let max = 0
    strArr.forEach(el => {
        if (el.length > max)
            max = el.length
    });
    return max
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));