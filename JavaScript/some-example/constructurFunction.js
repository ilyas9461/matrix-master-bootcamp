// Constructor Function
/**
    The Function() constructor creates Function objects. Calling the constructor directly can create 
    functions dynamically, but suffers from security and similar (but far less significant) performance 
    issues as eval(). However, unlike eval (which may have access to the local scope), the Function 
    constructor creates functions which execute in the global scope only.
 */
function SuperElement(type, content) {
    this.el = document.createElement(type)
    this.el.innerText = content
    document.body.append(this.el)
    this.el.addEventListener('click', () => {
        console.log(this.el)
    })
}
const h1 = new SuperElement('h1', 'Hellooo!')