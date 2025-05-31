import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const AUTO_LOGOUT_MINUTES = 10;

export default function useAutoLogout() {
  useEffect(() => {
    let timeout;

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        signOut(auth);
      }, AUTO_LOGOUT_MINUTES * 60 * 1000);
    };

    // Activity listeners
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keypress", resetTimer);
    window.addEventListener("click", resetTimer);
    window.addEventListener("scroll", resetTimer);

    resetTimer();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
      window.removeEventListener("click", resetTimer);
      window.removeEventListener("scroll", resetTimer);
    };
  }, []);
}
