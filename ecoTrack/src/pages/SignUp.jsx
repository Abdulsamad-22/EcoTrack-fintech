import { useState } from "react";
import SignUpForm from "../Auth/SIgnUpForm";
import WelcomeBackScreen from "../Auth/WelcomeBackScreen";
import styles from "./login.module.css";

export default function signUp({ heading, buttonLabels, message }) {
  return (
    <div className={styles.login}>
      <WelcomeBackScreen
        buttonLabels={buttonLabels}
        message={message}
        mode={mode}
        setMode={setMode}
      />
      <SignUpForm heading={heading} buttonLabels={"Sign up"} />
    </div>
  );
}
