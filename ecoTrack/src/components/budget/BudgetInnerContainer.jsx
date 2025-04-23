import styles from "./budgetinnercontainer.module.css";
import BudgetSetting from "./BudgetSetting";
import BudgetSummary from "./BudgetSummary";
import BudgetProvider from "./BudgetProvider";

export default function BudgetInnerContainer() {
  return (
    <div className={styles.innerContainer}>
      <BudgetProvider>
        <BudgetSetting />
        <BudgetSummary />
      </BudgetProvider>
    </div>
  );
}
