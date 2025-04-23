import { useContext, createContext, useState } from "react";
import { allocation } from "./BudgetAllocation";

const BudgetContext = createContext();
export const useBudget = () => useContext(BudgetContext);
export default function BudgetProvider({ children }) {
  const [budget, setBudget] = useState("");
  const [amount, setAmount] = useState("");
  const [newBudget, setNewBudget] = useState(allocation);

  const formattedAmount = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  function handleSubmit(e) {
    e.preventDefault();
    setNewBudget((prev) => [
      ...prev,
      {
        category: budget,
        spentAmount: "00",
        totalAmount: formattedAmount,
        status: "/src/images/check-icon-onPlain.svg",
      },
    ]);
    setBudget("");
    setAmount("");
    console.log(newBudget);
  }

  const total = newBudget.reduce((acc, current) => {
    const amount = Number(current.totalAmount.replace(/,/g, ""));
    return acc + amount;
  }, 0);
  const formattedTotal = total.toLocaleString();
  return (
    <BudgetContext.Provider
      value={{
        newBudget,
        formattedTotal,
        budget,
        amount,
        setBudget,
        setAmount,
        handleSubmit,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}
