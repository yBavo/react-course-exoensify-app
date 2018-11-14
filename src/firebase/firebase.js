import * as firebase from 'firebase'
import { FirebaseConfig } from './keys'

firebase.initializeApp(FirebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default }; 


// database.ref('expenses').push({
//   description: 'Vacations',
//   note: '',
//   amount: 5000.00,
//   createdAt: 5000064553684
// })

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((data) => {
//       expenses.push({
//         id: data.key,
//         ...data.val()
//       })
//     })
//     console.log('[Firebase]', expenses)
//   })



// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.companie}`);
// }, (e) => {
//   console.log('Error', e);
// });

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('Error!', e)
//   })

// database.ref().set({
//   name: 'Bob Bobino',
//   age: 39,
//   isSingle: false,
//   location: {
//     city: 'Philadelphia',
//     country: 'USA'
//   },
// }).then(() => {
//   console.log('Data saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });
// database.ref().update({
//   stressLevel: 9,
//   job: {
//     title: 'SD',
//     companie: 'Amazon'
//   },
//   'location/city': 'Seattle'
// })