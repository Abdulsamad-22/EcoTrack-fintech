import DefensePlan from "./DefensePlan";
import Expenses from "./Expenses";
import styles from "../../../styles/trackingStyles/defenseexpensecontainer.module.css";
export default function DefenseExpenseContainer() {
  return (
    <div className={styles.defenseExpense}>
      <DefensePlan />
      <Expenses />
    </div>
  );
}
