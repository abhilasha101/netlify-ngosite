import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAhFyMdkooD0mpMQaltKiZXRhjb35LRBt4",
    authDomain: "ngosite-f38a4.firebaseapp.com",
    databaseURL: "https://ngosite-f38a4.firebaseio.com",
    projectId: "ngosite-f38a4",
    storageBucket: "ngosite-f38a4.appspot.com",
    messagingSenderId: "741002520437"
  };
 
 
const fire = firebase.initializeApp(config);

export default fire;
