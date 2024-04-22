// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEcbi5VlbqHksbrEO8kt6FPQ2NEAMEOIM",
  authDomain: "mern-ecommerce-2024-bcbae.firebaseapp.com",
  projectId: "mern-ecommerce-2024-bcbae",
  storageBucket: "mern-ecommerce-2024-bcbae.appspot.com",
  messagingSenderId: "508214370167",
  appId: "1:508214370167:web:2ad1c92c68983385fa8b72",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
