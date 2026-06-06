import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDs_ESYVzEl6VkzT9YoqjBCrtfUh2f7_GI",
  authDomain: "collagervs-ac20b.firebaseapp.com",
  projectId: "collagervs-ac20b",
  storageBucket: "collagervs-ac20b.firebasestorage.app",
  messagingSenderId: "72719889492",
  appId: "1:72719889492:web:d8a4782246700aa2ad69c1",
  measurementId: "G-J2Q3SHXRB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
