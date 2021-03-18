
import firebase from 'firebase';

const firebaseApp =firebase.initializeApp ({
    apiKey: "AIzaSyChs2UzI638NyjyR6wkWlAyi4c3AbwulbU",
    authDomain: "blogx-3615d.firebaseapp.com",
    databaseURL: "https://blogx-3615d.firebaseio.com",
    projectId: "blogx-3615d",
    storageBucket: "blogx-3615d.appspot.com",
    messagingSenderId: "720982853163",
    appId: "1:720982853163:web:3fd2d96b3fb3ffdd63cc6e",
    measurementId: "G-0DX4PT4T8R"
});
  
  const db = firebaseApp.firestore();

  export default db;