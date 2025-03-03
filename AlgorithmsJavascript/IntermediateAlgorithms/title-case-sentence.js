/**
    Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.
    For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".
    For this algorithm, you can use the split() method.

    titleCase("I'm a little tea pot")  // should return a string.
    titleCase("I'm a little tea pot")  // should return "I'm A Little Tea Pot".
    titleCase("sHoRt AnD sToUt")  // should return "Short And Stout".
 */

    function titleCase(str){
        const arrStr=str.split(' ')
        let newStr=''
        arrStr.forEach(el => {
            el=el.toLowerCase()
            // let chars = el.split('');
            let chars = [...el];   // string to array
            chars[0]=chars[0].toUpperCase()  
            newStr+=' '+chars.join('')           
        });
        return newStr
    }

    console.log(titleCase("sHoRt AnD sToUt"));
    