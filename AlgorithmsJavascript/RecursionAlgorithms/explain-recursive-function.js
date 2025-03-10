/*
Recursive Function: A function that calls itself in order to solve a problem.
    * The function definition.
    * The base condition.
    * The recursive call.


*/

function doSomething(n) {   //function definition
    if (n === 0) {   //base condition
        console.log("TASK COMPLETED!")
        return
    } else {        //recursive case
        console.log("I'm doing something.")
        doSomething(n - 1); //recursive call
    }

}
//   doSomething(3)

const reduce = (fn, acc, [cur, ...rest]) => cur === undefined ? acc : reduce(fn, fn(acc, cur), rest)
const reducer = (accumulator, current) => accumulator + current;
const arr=[1, 2, 3, 4, 5]

console.log(reduce(reducer, 0, arr));