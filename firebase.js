import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCzDqZMNCmQ8awb2Vp5EfdtxWtIgvd6ouo',
  authDomain: 'uber-eats-9aa55.firebaseapp.com',
  projectId: 'uber-eats-9aa55',
  storageBucket: 'uber-eats-9aa55.appspot.com',
  messagingSenderId: '951829520282',
  appId: '1:951829520282:web:4b0eabac6a7046c2476423',
  measurementId: 'G-D1GRJTQ0ZN',
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
