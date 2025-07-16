import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBosCBTgIDeRabFMkuqS_cbjkdHDcegFJw",
  authDomain: "msmneet1.firebaseapp.com",
  databaseURL: "https://msmneet1-default-rtdb.firebaseio.com",
  projectId: "msmneet1",
  storageBucket: "msmneet1.appspot.com",
  messagingSenderId: "920361933770",
  appId: "1:920361933770:web:4dba802da04a8548348d33"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    const currentSession = localStorage.getItem("sessionID");
    const sessionRef = ref(db, `sessions/${uid}`);

    onValue(sessionRef, (snapshot) => {
      const dbSession = snapshot.val();
      if (dbSession !== currentSession) {
        alert("❌ Your account was logged in from another device. You are logged out.");
        signOut(auth).then(() => {
          localStorage.removeItem("sessionID");
          window.location.href = "login.html";
        });
      }
    });
  } else {
    window.location.href = "login.html";
  }
});