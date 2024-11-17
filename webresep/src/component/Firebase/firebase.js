import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDhPdwT1UXVPskH9AwSmifeQz_W-AdHrY",
  authDomain: "frontendgroup-a8e24.firebaseapp.com",
  projectId: "frontendgroup-a8e24",
  storageBucket: "frontendgroup-a8e24.firebasestorage.app",
  messagingSenderId: "1082679235596",
  appId: "1:1082679235596:web:93a6fec2c27455acbb4a29",
  measurementId: "G-M44566121F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app );
export default app;