import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxsni1n2Zyv4slZq6FOUTBraHYh1Ey68c",
  authDomain: "ecommerce-mern-85080.firebaseapp.com",
  projectId: "ecommerce-mern-85080",
  storageBucket: "ecommerce-mern-85080.appspot.com",
  messagingSenderId: "686041100094",
  appId: "1:686041100094:web:07d1c126f0297c9adc866f",
  measurementId: "G-6Q0LE0JS2E",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
