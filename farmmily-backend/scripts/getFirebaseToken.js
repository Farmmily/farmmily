// scripts/getFirebaseToken.js
const { initializeApp } = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyBaQPLI4M_1U0oPetSKRCqaTBjhgJxzXKo",
  authDomain: "farmmily-rbac.firebaseapp.com",
  projectId: "farmmily-rbac",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function getToken() {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      "test@example.com",
      "Test@1234"
    );

    const token = await userCredential.user.getIdToken();
    console.log("\n✅ Firebase ID Token:\n");
    console.log(token);
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

getToken();
