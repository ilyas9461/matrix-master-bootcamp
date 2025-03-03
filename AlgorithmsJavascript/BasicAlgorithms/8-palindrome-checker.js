/**
    Declare a function isPalindrome(str) that takes a string as an input.
    Return true if the given string is a palindrome. Otherwise, return false.
    A palindrome is a word or sentence that's spelled the same way both forward and backward, 
    ignoring punctuation, case, and spacing.
 */

    function revStr(str){
        let buf = ''
        let strLower=str.toLowerCase()
        for(let i=0;i<strLower.length;i++)
            buf+=strLower[strLower.length-1-i]
        return buf
    }

    const reverseString = str => [...str].reverse().join("");
    // const reverseString = str => str.split("").reduce((rev, char) => char + rev, "");
    // const reverseString = str => [...str].reverse().join("");

    function  isPalindrome(str){
        let rev=revStr(str)
        console.log(rev); 
        if(rev===str.toLowerCase()) return true
        return false       
    }

    console.log(isPalindrome('Saas'));
    