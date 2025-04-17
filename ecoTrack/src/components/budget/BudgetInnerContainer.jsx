import styles from "./budgetinnercontainer.module.css";
export default function BudgetInnerContainer({ children }) {
  return <div className={styles.innerContainer}>{children}</div>;
}
