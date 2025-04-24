import { useContext, createContext, useState, useEffect } from "react";
import { allocation } from "./BudgetAllocation";

const BudgetContext = createContext();
export const useBudget = () => useContext(BudgetContext);
export default function BudgetProvider({ children }) {
  const [budget, setBudget] = useState("");
  const [amount, setAmount] = useState("");
  const [newBudget, setNewBudget] = useState(() => {
    const stored = localStorage.getItem("newBudget");
    return stored ? JSON.parse(stored) : allocation;
  });

  useEffect(() => {
    localStorage.setItem("newBudget", JSON.stringify(newBudget), [newBudget]);
  });

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

  // Adds all initial budget amount
  const total = newBudget.reduce((acc, current) => {
    const amount = Number(current.totalAmount.replace(/,/g, ""));
    return acc + amount;
  }, 0);
  const formattedTotal = total.toLocaleString();

  const totalSpent = allocation.reduce((acc, item) => {
    const clean = Number(item.spentAmount.replace(/,/g, "") || 0);
    return acc + clean;
  }, 0);

  const formattedSpent = totalSpent.toLocaleString();

  return (
    <BudgetContext.Provider
      value={{
        newBudget,
        formattedTotal,
        formattedSpent,
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
