import { signUp } from "../../Auth/useAuth";
import { login } from "../../Auth/useAuth";
import { useEffect, useState } from "react";
import styles from "../../../styles/authStyles/signUpForm.module.css";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const errorMessages = {
  "auth/email-already-in-use": "This account already exist, login instead.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/weak-password": "Password should be at least 6 characters.",
  "auth/user-not-found": "No account found with this email.",
  "auth/wrong-password": "Incorrect password. Please try again.",
  "auth/network-request-failed": "Network error. Please check your connection.",
};
export default function SignUpForm({ heading, buttonLabels }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (buttonLabels === "Sign up") {
        await signUp(email, password);
        setMsg("Account created!");
      } else {
        await login(email, password);
        setMsg("created acount");
      }
    } catch (error) {
      const friendlyMessage =
        errorMessages[error.code] || "Something went wrong. Please try again.";
      setMsg(friendlyMessage);
    }

    useEffect(() => {
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { creationTime, lastSignInTime } = user.metadata;
          const isNewUser = creationTime !== lastSignInTime;

          // Clear existing values if new user
          if (isNewUser) {
            localStorage.setItem("isFirstTimeUser", "true");
            localStorage.removeItem("pin"); // Better than setting empty string
            localStorage.removeItem("displayName");
          } else {
            // For returning users, ensure we don't overwrite existing values
            const existingPin = localStorage.getItem("pin");
            const existingName = localStorage.getItem("displayName");

            if (!existingPin) localStorage.setItem("pin", "");
            if (!existingName) localStorage.setItem("displayName", "");
          }
        }
      });

      return () => unsubscribe(); // Cleanup subscription
    }, []);
  }
  console.log(buttonLabels);
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.headerText}>{heading}</h1>

      <form onSubmit={handleSubmit} className={styles.signUpForm}>
        <input
          className={styles.emailInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
        />
        <br />
        <input
          className={styles.password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <button className={styles.signUpBtn} type="submit">
          {buttonLabels}
        </button>
        <p className={styles.toggleOption}>
          {buttonLabels === "Sign up" ? (
            "Already have an account?"
          ) : (
            <button>Forgot password?</button>
          )}
          <button
            type="button"
            className={styles.toggleBtn}
            onClick={() => navigate("/login")}
          >
            {buttonLabels === "Sign up" ? "Login" : ""}
          </button>
        </p>
        <p className={styles.errorMsg}>{msg}</p>
      </form>
    </div>
  );
}
