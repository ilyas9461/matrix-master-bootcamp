/**
    Create an algorithm that inserts the numbers from 1 to 135 into an array, 
    while replacing the values that are divisible by 3 with the word "Fizz", 
    the numbers that are divisible by 5 with the word "Buzz", 
    and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".
 */
let arr=[]

for(i=1; i<135 ; i++){
    arr[i-1]=i
    if(i%3===0)  arr[i-1]='Fizz'
    if(i%5===0)  arr[i-1]='Buzz'
    if(i%3===0 && i%5===0)  arr[i-1]='FizzBuzz'    
}
console.log(arr);