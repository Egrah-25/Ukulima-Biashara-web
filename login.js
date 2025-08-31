// login.js
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    // Sign in user
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("✅ Login successful! Welcome back " + userCredential.user.email);

    // Redirect after login (change to your desired page)
    window.location.href = "dashboard.html";
  } catch (error) {
    alert("❌ Login failed: " + error.message);
  }
});
