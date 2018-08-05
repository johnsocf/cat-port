import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBL67SHxHo33ICwhsghC1VtVHmeQzpMCVw",
    authDomain: "portfilio-form.firebaseapp.com",
    databaseURL: "https://portfilio-form.firebaseio.com",
    projectId: "portfilio-form",
    storageBucket: "portfilio-form.appspot.com",
    messagingSenderId: "841478938105"
};

var fire = firebase.initializeApp(config);
export default fire;