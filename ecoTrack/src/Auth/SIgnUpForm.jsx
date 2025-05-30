import { signUp } from "./useAuth";
import { login } from "./useAuth";
import { useState } from "react";
import styles from "../../styles/authStyles/signUpForm.module.css";
import Dashboard from "../pages/Dashboard";

export default function SignUpForm({
  heading,
  buttonLabels,
  defaultMode = "Sign up",
}) {
  const [mode, setMode] = useState(defaultMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (mode === "Sign up") {
        await signUp(email, password);
        setMsg("Account created!");
      } else {
        await login(email, password);
        setMsg("created acount");
      }
    } catch (error) {
      setMsg(error.message);
    }
  }
  return (
    <form onSubmit={handleSubmit} className={styles.signUpForm}>
      <h1 className={styles.headerText}>
        {mode === "Sign up" ? "Create an account" : "Login"}
      </h1>
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
        {mode === "Sign up" ? "Sign up" : "Login"}
      </button>
      <p>
        {mode === "signup"
          ? "Already have an account?"
          : "Don't have an account?"}
        <button
          type="button"
          className={styles.toggleBtn}
          onClick={() => setMode(mode === "signup" ? "login" : "signup")}
        >
          {mode === "signup" ? "Login" : "Sign Up"}
        </button>
      </p>
      <p>{msg}</p>
    </form>
  );
}
