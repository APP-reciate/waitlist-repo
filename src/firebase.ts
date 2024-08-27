// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
    apiKey: "AIzaSyA83841DXq0fRXb6aihmhs1UU4qNMEBKSo",
    authDomain: "appreciate-6e9cc.firebaseapp.com",
    projectId: "appreciate-6e9cc",
    storageBucket: "appreciate-6e9cc.appspot.com",
    messagingSenderId: "734207915306",
    appId: "1:734207915306:web:bdc992a76a06618d5dda53",
    measurementId: "G-46FZ9ZW7V6"
  });
  
  type UserDoc = {
    name: string,
    email: string,
  }
  
  // Initialize Firebase
const db = getFirestore(firebaseApp);

export const userCollection = async(userDoc: UserDoc) => {
    console.log(userDoc)
    try {
        const docRef = await addDoc(collection(db, "users"), userDoc);
        console.log("Document written with ID", docRef.id)
        return docRef;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
  }

  console.log('Hello there, Firestore!')

const analytics = getAnalytics(firebaseApp);