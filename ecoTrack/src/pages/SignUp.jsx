import SignUpForm from "../Auth/SIgnUpForm";
import WelcomeBackScreen from "../Auth/WelcomeBackScreen";

export default function signUp() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <WelcomeBackScreen />
      <SignUpForm />
    </div>
  );
}
