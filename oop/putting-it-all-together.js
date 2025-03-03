// Task 1: Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
// Task 2: `this`
const person1 = new Person("John", 25);

function describePerson(callback) {
    return callback();
}

// Task 3: Promises
function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// Task 4: Putting it all together
console.log(person1.introduce());

describePerson(function () {
    console.log(this.introduce());
}.bind(person1));