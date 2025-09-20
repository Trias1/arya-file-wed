import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChMzaKgsAv5UaeCI2N4xTC3VsfgqUzFkg",
  authDomain: "weddinngarna.firebaseapp.com",
  projectId: "weddinngarna",
  storageBucket: "weddinngarna.firebasestorage.app",
  messagingSenderId: "130618727205",
  appId: "1:130618727205:web:a68a2af0cf4264af2dd8cc",
  measurementId: "G-FCCBSMKH4D"
};

// Cegah inisialisasi ulang
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
