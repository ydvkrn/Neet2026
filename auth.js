import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBosCBTgIDeRabFMkuqS_cbjkdHDcegFJw",
  authDomain: "msmneet1.firebaseapp.com",
  projectId: "msmneet1",
  storageBucket: "msmneet1.firebasestorage.app",
  messagingSenderId: "920361933770",
  appId: "1:920361933770:web:4dba802da04a8548348d33",
  measurementId: "G-RWVBLW9YLK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = "login.html";
  }
});