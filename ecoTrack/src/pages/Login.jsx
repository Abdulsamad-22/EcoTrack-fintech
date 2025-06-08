import SignUpForm from "../components/forms/SIgnUpForm";
import WelcomeBackScreen from "../components/forms/WelcomeBackScreen";
import styles from "./login.module.css";

export default function Login({ heading, buttonLabels, message }) {
  return (
    <div className={styles.login}>
      <SignUpForm heading={heading} buttonLabels={"Login"} />
      <WelcomeBackScreen buttonLabels={buttonLabels} message={message} />
    </div>
  );
}
