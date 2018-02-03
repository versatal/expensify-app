//
// Object Destructuring
//


// const person = {
//   name: 'Joe',
//   age: 51,
//   location: {
//     city: 'Bay City',
//     temp: 30
//   }
// };

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);


// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holliday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'self-published' } = book.publisher;

// console.log(publisherName);




// const address = ['1811 5th St', 'Bay City', 'Michigan', '49708'];

// const [, city, state] = address;
//const [, city, state = "MI"] = address;
//const [street, city, state, zip] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`);
