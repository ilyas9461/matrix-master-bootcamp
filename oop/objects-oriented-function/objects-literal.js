//Object literals
const userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login() {
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out');
    }
};

userOne.login();
userOne.logout();

let car = { 
    wheels: 4,
    honk: function() {
      console.log('Beep!')
    }
  }
  
  let prius = Object.create(car)
  prius.manufacturer = 'Toyota'
  
  console.log(prius.manufacturer) // 'Toyota'
  console.log(prius.wheels) // 4
  console.log(prius.honk()) // Beep!