/**
    Search and Replace 

    Perform a search and replace the sentence using the arguments provided and return the new sentence. The 
    first argument is the sentence to perform the search and replace on.The second argument is the word that 
    you will be replacing (before). The third argument is what you will be replacing the second argument with 
    (after). 

    NOTE: Preserve the case of the original word when you are replacing it. 

    For example, if you mean to replace the word "Book" with the word "dog", it should be replaced with 
    "Dog" 

    'quick brown Fox Jumped over the lazy dog'
 */

let str = 'quick Brown Fox jumped over the lazy dog'
// str=str.toLowerCase()
// console.log(str);

function SearchandReplace(string, before, after) {
    let arr = string.trim().split(' ')

    for (let i = 0; i < arr.length; i++) {
       if(arr[i]===before){
            if(arr[i][0]===arr[i][0].toUpperCase())
                arr[i]=after[0].toUpperCase()+after.slice(1)
            else arr[i]=after
       }
        
    }
    return arr.join(' ')
}

console.log(SearchandReplace(str, 'Brown' ,'yellow'))