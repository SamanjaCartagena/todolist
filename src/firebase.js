
import firebase from 'firebase';

const firebaseApp =firebase.initializeApp ({
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyA00ZdW8kn8oVyLKotLaXFA6h1hJHGn5KA",
    authDomain: "samanja-1826c.firebaseapp.com",
    databaseURL: "https://samanja-1826c.firebaseio.com",
    projectId: "samanja-1826c",
    storageBucket: "samanja-1826c.appspot.com",
    messagingSenderId: "843639804138",
    appId: "1:843639804138:web:630c399f60b1a5d77d0793",
    measurementId: "G-VR6ZEZMFP9"
  
});


  const db = firebaseApp.firestore();


  export default db;