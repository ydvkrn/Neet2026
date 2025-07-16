// authcheck.js

// Firebase SDK load (only once)
document.write('<script src="https://www.gstatic.com/firebasejs/11.10.0/firebase-app-compat.js"><\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/11.10.0/firebase-auth-compat.js"><\/script>');

// Run auth check after window load
window.addEventListener("load", () => {
  const checkAuth = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyBosCBTgIDeRabFMkuqS_cbjkdHDcegFJw",
        authDomain: "msmneet1.firebaseapp.com",
        projectId: "msmneet1",
        storageBucket: "msmneet1.appspot.com",
        messagingSenderId: "920361933770",
        appId: "1:920361933770:web:4dba802da04a8548348d33"
      });
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        window.location.href = "login.html";
      } else {
        console.log("✅ Logged in:", user.email);
      }
    });
  };

  // Wait for firebase to be available
  const waitForFirebase = setInterval(() => {
    if (typeof firebase !== "undefined") {
      clearInterval(waitForFirebase);
      checkAuth();
    }
  }, 100);
});