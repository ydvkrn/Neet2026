// ✅ Firebase Auth Detection (Reusable for all pages)

// Firebase config (same for all)
const firebaseConfig = {
  apiKey: "AIzaSyBosCBTgIDeRabFMkuqS_cbjkdHDcegFJw",
  authDomain: "msmneet1.firebaseapp.com",
  projectId: "msmneet1",
  storageBucket: "msmneet1.appspot.com",
  messagingSenderId: "920361933770",
  appId: "1:920361933770:web:4dba802da04a8548348d33"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Check login
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    document.getElementById("authHideStyle")?.remove();
    document.body.style.display = "block";
    console.log("✅ Logged in as:", user.email);
  } else {
    // Always redirect to main login path
    window.location.href = "/Neet2026/login.html";
  }
});