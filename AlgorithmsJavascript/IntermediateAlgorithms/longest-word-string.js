/**
    Return the length of the longest word in the provided sentence.
    Your response should be a number. For these algorithms, you are allowed to use the split() method.  

    findLongestWord("The quick brown fox jumped over the lazy dog")  // should return a number.
    findLongestWord("The quick brown fox jumped over the lazy dog"). // should return 6.
    findLongestWord("May the force be with you")  // should return 5.
 */

    function findLongestWord(str){
        strArr=str.split(' ')
        let max=0
        strArr.forEach(el => {
            if(el.length>max)
                max=el.length
        });
        return max
    }

    console.log(findLongestWord("May the force be with you"));
    