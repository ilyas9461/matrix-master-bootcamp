/** Constructor Functions (Pre-ES6)
 Before ES6 (ECMAScript 2015), JavaScript used constructor functions to create objects and simulate classes.

    How they work:

    * A constructor function is a regular JavaScript function that's intended to be called with the new keyword.
    * When new is used, it creates a new empty object, sets the this keyword inside the function to point 
      to that new object, and implicitly returns the new object.
    * You can add properties and methods to the this object within the constructor.
    * Prototype-based inheritance was achieved by manipulating the prototype property of the constructor function.
*/

//constructor function
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function () {
    this.online = true;
    console.log(this.email, 'has logged in ');

}

User.prototype.logout = function () {
    this.online = false;
    console.log(this.email, 'has logged out');

}
//prototype inheritance from User to Admin
function Admin(...args) {
    console.log(args);
    User.apply(this, args)
    this.role = 'super admin';
}
Admin.prototype = Object.create(User.prototype) ; //inheritance

Admin.prototype.deleteUser = function (u) {
    users = users.filter(user => {   //filter out the new aray of users and delete the target user.
        return user.email != u.email;
    });
}

const userOne = new User('ryu@ninjas.com', 'Ryu');
const userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
const admin = new Admin('shaun@ninjas.com', 'Shaun');

var users = [userOne, userTwo, admin];  // The varialble is housted to the top of the scope.

console.log(admin);
