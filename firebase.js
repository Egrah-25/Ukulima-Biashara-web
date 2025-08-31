// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAflYgfEwwPYyGWIpx9pBfEoNvYJQnMnLk",
  authDomain: "ukulima-biashara.firebaseapp.com",
  projectId: "ukulima-biashara",
  storageBucket: "ukulima-biashara.firebasestorage.app",
  messagingSenderId: "330388889324",
  appId: "1:330388889324:web:1be9257f4ce33a0d1b4fc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔑 Logout function
export async function logout() {
  try {
    await signOut(auth);
    alert("You have been logged out.");
    window.location.href = "login.html"; // Redirect to login page
  } catch (error) {
    alert("Error logging out: " + error.message);
  }
}

export { auth };
