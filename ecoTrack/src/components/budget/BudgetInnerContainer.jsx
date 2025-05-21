import styles from "../../../styles/budgetStyles/budgetinnercontainer.module.css";
import BudgetSetting from "./BudgetSetting";
import BudgetSummary from "./BudgetSummary";

export default function BudgetInnerContainer() {
  return (
    <div className={styles.innerContainer}>
      <BudgetSetting />
      <BudgetSummary />
    </div>
  );
}
