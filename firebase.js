const firebaseConfig = {
  apiKey: "AIzaSyAaECyPbRGtPf3-of_uWflCe-p76eOVb_U",
  authDomain: "coins-20081.firebaseapp.com",
  projectId: "coins-20081",
  storageBucket: "coins-20081.firebasestorage.app",
  messagingSenderId: "826169825033",
  appId: "1:826169825033:web:c957dec918eb36c97da5d8"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
