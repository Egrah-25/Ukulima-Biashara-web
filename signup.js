// signup.js
import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("✅ Signup successful! Welcome " + userCredential.user.email);

    // Redirect after signup (change to your desired page)
    window.location.href = "dashboard.html";
  } catch (error) {
    alert("❌ Signup failed: " + error.message);
  }
});
