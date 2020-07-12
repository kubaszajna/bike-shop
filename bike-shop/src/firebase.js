import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCV8YYzM5Mg_Z_V5YXVlTXYQyKCaGJEhDM",
    authDomain: "bike-shop-vue.firebaseapp.com",
    databaseURL: "https://bike-shop-vue.firebaseio.com",
    projectId: "bike-shop-vue",
    storageBucket: "bike-shop-vue.appspot.com",
    messagingSenderId: "311721100438",
    appId: "1:311721100438:web:85613c08e6abb4dcb92eb7",
    measurementId: "G-DF5NLFV6L6"
};
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
firebase.analytics();