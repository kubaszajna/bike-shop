import firebase from 'firebase';
// import 'firebase/firestore';
import { ref, onUnmounted } from 'vue';
// import 'firebase/storage';

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

export const fb = firebase.initializeApp(firebaseConfig)

export const db = fb.firestore()
const productsCollection = db.collection('products')

// export const createUser = user => {
//   return usersCollection.add(user)
// }

// export const getUser = async id => {
//   const user = await usersCollection.doc(id).get()
//   return user.exists ? user.data() : null
// }

// export const updateUser = (id, user) => {
//   return usersCollection.doc(id).update(user)
// }

// export const deleteUser = id => {
//   return usersCollection.doc(id).delete()
// }

export const getProducts = () => {
  
}

// export const getUser = async id => {
//   const user = await usersCollection.doc(id).get()
//   return user.exists ? user.data() : null
// }

// export const updateUser = (id, user) => {
//   return usersCollection.doc(id).update(user)
// }

// export const deleteUser = id => {
//   return usersCollection.doc(id).delete()
// }

// export const useLoadUsers = () => {
//   const users = ref([])
//   const close = usersCollection.onSnapshot(snapshot => {
//     users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
//   })
//   onUnmounted(close)
//   return users
// }

// Initialize Firebase
// export const fb = firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();
// firebase.analytics();

class FirebaseData {
  getProducts(){
    const products = ref([])
    const close = productsCollection.onSnapshot(snapshot => {
      products.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return products
  }
}

export default new FirebaseData();