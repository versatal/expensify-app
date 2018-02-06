//child_removed

database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());  
});

//child_changed

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());  
});

//child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());  
});

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });


// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'credit card',
//   note: '',
//   amount: 9500,
//   createdAt: 3000
// });    

//  CRUD data procedures
//
// Create - Adding data 
// database.ref().set({
//   name: 'Joe Hardin',
//   age: 51,
//   stressLevel: 6,
//   job: {
//     title: 'Letter Carrier',
//     company: 'UPS'
//   },
//   location: {
//     city: 'Bay City',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed', e);
// });


// Remove - Removing data - method one
//
// database.ref('isSingle')
//   .remove()
//   .then(() => { console.log('Data was removed')})
//   .catch((e) => {console.log('Did not remove data', e)});
//
//  remove method two
//database.ref('isSingle').set(null);


//  Update - updating data

// database.ref().update({
//   name: 'Roger',                 // update value
//   age: '33',                     // update value
//   job: 'Letter Carrier',         // add new property if it doesn't already exist
//   isSingle: null                 // remove propert
// });

//  Update for nested objects:
//
// Need the quotes around the nested property 
// because of the forward slash

// database.ref().update({
//   stressLevel: 9,
//   'location/city': 'Seattle',    
//   'job/company': 'FedEx'    
// });

// Read - fetching the data

// method one
// database.ref()
//   .once('value')
//   .then((snapshot) =>{
//     const val = snapshot.val();
//     console.log(val);    
//   })
//   .catch((e) => {console.log('Fetch failed.', e)});

// methon two set change listener(data subscription)
//
// const onValueChange = database.ref().on('value', (snapshot) => {
//   const name = snapshot.val().name;
//   const job = snapshot.val().job;
//   console.log(`${name} is a ${job.title} at ${job.company}`);  
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(61);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(62);
// }, 10500);