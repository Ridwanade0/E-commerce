import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7DVA1qvV_OvIEM3EoabVXMSjTKo97dZg",
  authDomain: "ecommerce-e09b7.firebaseapp.com",
  projectId: "ecommerce-e09b7",
  storageBucket: "ecommerce-e09b7.appspot.com",
  messagingSenderId: "212623621893",
  appId: "1:212623621893:web:29af9abbb33e4fad64816c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
