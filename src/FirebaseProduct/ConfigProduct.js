import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAsLo6kjKZ24E-1-JMexMolVtFT2s5dgqU",
  authDomain: "fir-reactjs-fashion-shop.firebaseapp.com",
  projectId: "fir-reactjs-fashion-shop",
  storageBucket: "fir-reactjs-fashion-shop.appspot.com",
  messagingSenderId: "292183972264",
  appId: "1:292183972264:web:ced615ee2ea40482d7259d",
  // measurementId: "G-22WVFTHF2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);