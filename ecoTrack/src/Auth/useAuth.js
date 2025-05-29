import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

export async function signUp(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}
