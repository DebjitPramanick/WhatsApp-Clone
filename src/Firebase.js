import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBQoK0zSQi5F1lVL-cSqy5DA_or3VydcP4",
  authDomain: "whatsapp-mern-clone-156c3.firebaseapp.com",
  projectId: "whatsapp-mern-clone-156c3",
  storageBucket: "whatsapp-mern-clone-156c3.appspot.com",
  messagingSenderId: "981513484646",
  appId: "1:981513484646:web:f53fd0b2adebc63ed3f0a7"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth,provider};