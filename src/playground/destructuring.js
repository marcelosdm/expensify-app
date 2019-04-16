/**
 * Object Destructuring
 */

// const person = {
//   name: 'Vinícius',
//   age: 1,
//   location: {
//     temp: 28
//   }
// };

// const { name, age } = person;
// const { city = 'somewhere', temp: temperature } = person.location;

// console.log(`${name} is ${age}`);

// console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: 'Jornada dos Anjos',
//   author: 'Lucius',
//   publisher: {
//     // name: 'Amazon'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Publisher, Self-Published

/**
 * Array Destructuring
 */

 const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];

 const [coffe, , medium] = item;

 console.log(`A medium ${coffe} costs ${medium}`);