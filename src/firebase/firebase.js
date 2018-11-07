import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAAJAPE5c6CmPJp_kNVpbj22caoZrJa_ew",
  authDomain: "expensify-40a8b.firebaseapp.com",
  databaseURL: "https://expensify-40a8b.firebaseio.com",
  projectId: "expensify-40a8b",
  storageBucket: "expensify-40a8b.appspot.com",
  messagingSenderId: "721337451311"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Bavotor2'
});

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

//export default database