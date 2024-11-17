import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKWEXNx6RZ_enmt7EkFioCAMePLlWreBM",
  authDomain: "echobeat-f2fa1.firebaseapp.com",
  projectId: "echobeat-f2fa1",
  storageBucket: "echobeat-f2fa1.firebasestorage.app",
  messagingSenderId: "68276129615",
  appId: "1:68276129615:web:1173f2c07dd8ea03067f3a",
  measurementId: "G-6TE7RV0HFR",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
