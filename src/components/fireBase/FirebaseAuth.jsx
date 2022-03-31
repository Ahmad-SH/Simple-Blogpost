import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCReqQflPdMlcO1Eh_SwsorN141tReUKNA",
    authDomain: "blogpost-22277.firebaseapp.com",
    projectId: "blogpost-22277",
    storageBucket: "blogpost-22277.appspot.com",
    messagingSenderId: "167545030235",
    appId: "1:167545030235:web:6f4e80821bf10bb7b6217e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


export {app};