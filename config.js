import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAyN3lBtLaMYcqpQaXIIBtDiU6GqWRXgjA",
  authDomain: "barteringapp.firebaseapp.com",
  projectId: "barteringapp",
  storageBucket: "barteringapp.appspot.com",
  messagingSenderId: "273816431720",
  appId: "1:273816431720:web:699ad6056bb1767938dfdd"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
