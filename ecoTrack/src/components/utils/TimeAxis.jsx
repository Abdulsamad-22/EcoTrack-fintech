import { useEffect } from "react";
import styles from "../../../styles/utilsStyles/timeaxis.module.css";
import { useState } from "react";
import { useBudget } from "../budget/BudgetProvider";

export const timeRanges = [
  { label: "2 Weeks", days: 14 },
  { label: "1 Month", days: 30 },
  { label: "3 Months", days: 90 },
  { label: "6 Months", days: 180 },
  { label: "1 Year", days: 365 },
];
export default function TimeAxis({ filterByRange }) {
  const [selectedContainer, setSelectedContainer] = useState(null);
  function handleClick(index) {
    setSelectedContainer(index);
  }

  return (
    <>
      <div className={styles.category2}>
        {timeRanges.map((time, index) => (
          <div
            key={index}
            className={`${styles.label} ${
              selectedContainer === index ? styles.selected : ""
            }`}
            onClick={() => {
              handleClick(index);
              filterByRange(time.days);
            }}
          >
            {time.label}
          </div>
        ))}
      </div>
    </>
  );
}
