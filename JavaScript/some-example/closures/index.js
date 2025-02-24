
/**  Closures
    A closure is the combination of a function bundled together (enclosed) with references 
    to its surrounding state (the lexical environment). In other words, a closure gives a 
    function access to its outer scope. In JavaScript, closures are created every time 
    a function is created, at function creation time.

    Closures are useful because they let you associate data (the lexical environment) with a function that
    operates on that data. This has obvious parallels to object-oriented programming, where objects allow you to
    associate data (the object's properties) with one or more methods.
    
    Consequently, you can use a closure anywhere that you might normally use an object with only a single
    method.
 */

function makeSizer(size) {
    return function () {
        document.body.style.fontSize = size + 'px';
    };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;