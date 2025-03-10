/*      Classes (ES6 and Later)
    ES6 introduced the class keyword, providing a more familiar syntax for object-oriented programming. 
    However, it's important to understand that classes in JavaScript are still syntactic sugar over prototype-based inheritance. They don't introduce a new object-oriented model.

    How they work:

    * The class keyword defines a blueprint for creating objects.
    * The constructor method is a special method within the class that's called when a new instance of the class is created with new.
    * Methods are defined within the class body.
    * Inheritance is achieved using the extends keyword.
    * The super keyword is used to call the parent classes constructor.
    
    * Syntactic Sugar:
      It's crucial to remember that ES6 classes are primarily syntactic sugar over JavaScript's prototype-based inheritance.
      This means that under the hood, they largely operate in the same way as constructor functions
*/

class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = new Person("Jane", "Smith");
  console.log(person2.getFullName()); // Output: Jane Smith
  
  class Employee extends Person{
      constructor(firstName, lastName, employeeID){
          super(firstName, lastName);
          this.employeeID = employeeID;
      }
      getEmployeeID(){
          return this.employeeID;
      }
  }
  
  const employee1 = new Employee("Bob", "builder", 1234);
  console.log(employee1.getEmployeeID()); //output 1234
  console.log(employee1.getFullName()); //output Bob builder