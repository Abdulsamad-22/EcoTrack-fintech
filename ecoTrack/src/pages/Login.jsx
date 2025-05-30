import SignUpForm from "../Auth/SIgnUpForm";
import WelcomeBackScreen from "../Auth/WelcomeBackScreen";
import styles from "./login.module.css";

export default function Login({ heading, buttonLabels, message }) {
  return (
    <div className={styles.login}>
      <SignUpForm heading={heading} buttonLabels={"Login"} />
      <WelcomeBackScreen buttonLabels={buttonLabels} message={message} />
    </div>
  );
}
