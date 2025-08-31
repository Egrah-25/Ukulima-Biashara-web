// auth.js
import { auth } from "./firebase.js";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// --- Sign Up ---
export async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
    window.location.href = "dashboard.html"; // redirect to dashboard after signup
  } catch (error) {
    alert(error.message);
  }
}

// --- Login ---
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
    window.location.href = "dashboard.html"; // redirect to dashboard after login
  } catch (error) {
    alert(error.message);
  }
}

// --- Logout ---
export async function logout() {
  try {
    await signOut(auth);
    console.log("User logged out");
    window.location.href = "login.html"; // redirect back to login after logout
  } catch (error) {
    alert(error.message);
  }
}

// --- Auth State Listener ---
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user.email);
  } else {
    console.log("No user signed in");
  }
});
