let profile = {
  name: "Shayan",          
  age: 22,                 
  isStudent: true,         
  job: undefined,          
  middleName: null,        
  id: 12345678901234567890n, 
  symbol: Symbol("user")  
};

// Print each value and its typeof
console.log(profile.name, typeof profile.name);
console.log(profile.age, typeof profile.age);
console.log(profile.isStudent, typeof profile.isStudent);
console.log(profile.job, typeof profile.job);
console.log(profile.middleName, typeof profile.middleName);
console.log(profile.id, typeof profile.id);
console.log(profile.symbol, typeof profile.symbol);


// Object reference
let person1 = {
  name: "Shayan",
  age: 22
};

let person2 = person1;

person2.name = "Alex";
person2.age = 30;

console.log(person1);
console.log(person2);