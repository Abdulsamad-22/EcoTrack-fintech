import { signUp } from "./useAuth";
import { useState } from "react";
import styles from "../../styles/authStyles/signUpForm.module.css";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signUp(email, password);
      setMsg("Account created!");
    } catch (error) {
      setMsg(error.message);
    }
  }
  return (
    <form onSubmit={handleSubmit} className={styles.signUpForm}>
      <h1 className={styles.headerText}>Create an account</h1>
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
        Sign Up
      </button>
      <p>
        Already have an account? <a>Login</a>
      </p>
      <p>{msg}</p>
    </form>
  );
}
