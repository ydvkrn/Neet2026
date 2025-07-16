const firebaseConfig = {
  apiKey: "AIzaSyBosCBTgIDeRabFMkuqS_cbjkdHDcegFJw",
  authDomain: "msmneet1.firebaseapp.com",
  projectId: "msmneet1",
  storageBucket: "msmneet1.appspot.com",
  messagingSenderId: "920361933770",
  appId: "1:920361933770:web:4dba802da04a8548348d33"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    document.getElementById("authHideStyle")?.remove();
    document.body.style.display = "block";
    console.log("✅ Logged in:", user.email);
  } else {
    // 🔁 Detect current domain
    const currentHost = window.location.hostname;
    let loginPath;

    if (currentHost.includes("github.io")) {
      loginPath = "/Neet2026/login.html";
    } else {
      // for aiims.pages.dev and other domains
      loginPath = "/login.html";
    }

    window.location.href = loginPath;
  }
});