import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styles from "../../pages/dashboard.module.css";

export default function Logout({ setConfirmLogout, setShowOverlay }) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log("error log out", error);
    }
  };
  return (
    <div className={styles.logOutContainer}>
      <h1 className={styles.logOutHeader}>Are you sure you want to log out?</h1>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setShowOverlay(false);
            setConfirmLogout(false);
          }}
          className={styles.cancelButton}
        >
          Cancel
        </button>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Log out
        </button>
      </div>
    </div>
  );
}
