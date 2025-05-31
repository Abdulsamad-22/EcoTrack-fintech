import { signUp } from "./useAuth";
import { login } from "./useAuth";
import { useState } from "react";
import styles from "../../styles/authStyles/signUpForm.module.css";

export default function SignUpForm({ heading, buttonLabels }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

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
      setMsg(error.message);
    }
  }
  console.log(buttonLabels);
  return (
    <form onSubmit={handleSubmit} className={styles.signUpForm}>
      <h1 className={styles.headerText}>{heading}</h1>
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
        {buttonLabels === "Sign up"
          ? "Already have an account?"
          : "Forgot password?"}
        <button
          type="button"
          className={styles.toggleBtn}
          onClick={() => (buttonLabels === "Sign up" ? "/login" : "Sign up")}
        >
          {buttonLabels === "Sign up" ? "Login" : ""}
        </button>
      </p>
      <p>{msg}</p>
    </form>
  );
}
