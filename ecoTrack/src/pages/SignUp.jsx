import { useState } from "react";
import SignUpForm from "../components/forms/SIgnUpForm";
import WelcomeBackScreen from "../components/forms/WelcomeBackScreen";
import styles from "./login.module.css";

export default function signUp({ heading, buttonLabels, message }) {
  return (
    <div className={styles.login}>
      <WelcomeBackScreen buttonLabels={buttonLabels} message={message} />
      <SignUpForm heading={heading} buttonLabels={"Sign up"} />
    </div>
  );
}
