import { useContext, createContext, useState, useEffect } from "react";

const BudgetContext = createContext();
export const useBudget = () => useContext(BudgetContext);
export default function BudgetProvider({ children }) {
  const allocation = [
    {
      category: "Rent",
      spentAmount: "70,000",
      totalAmount: "320,000",
      status: "/src/images/check-icon-onPlain.svg",
    },
    {
      category: "Food Item",
      spentAmount: "155,000",
      totalAmount: "200,000",
      status: "/src/images/warning-icon.svg",
    },
    {
      category: "Transportation",
      spentAmount: "92,000",
      totalAmount: "170,000",
      status: "/src/images/warning-icon.svg",
    },
    {
      category: "Electricity",
      spentAmount: "20,000",
      totalAmount: "100,000",
      status: "/src/images/check-icon-onPlain.svg",
    },
  ];

  const [budget, setBudget] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");

  const [category, setCategory] = useState("");
  const [sentAmount, setSentAmount] = useState("");
  const [newBudget, setNewBudget] = useState(() => {
    const stored = localStorage.getItem("newBudget");
    return stored ? JSON.parse(stored) : allocation;
  });

  // const [budgetState, setBudgetState] = useState({
  //   categoryTotalSpent: 0,
  //   budgetBalance: 0,
  // });

  useEffect(() => {
    localStorage.setItem("newBudget", JSON.stringify(newBudget), [newBudget]);
  });

  const formattedAmount = budgetAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  /*const expenseBudgetCalc = () => {
    const matchedCategory = newBudget.find(
      (item) => item.category === category
    );

    if (matchedCategory) {
      console.log(matchedCategory);
      const totalAmount = parseFloat(
        matchedCategory.totalAmount.replace(/,/g, "")
      );
      const spentCategoryAmount = parseFloat(sentAmount);

      const budgetBalance = totalAmount - spentCategoryAmount;
      console.log(budgetBalance);

      const totalSpent = parseFloat(
        matchedCategory.spentAmount.replace(/,/g, "")
      );
      const categoryTotalSpent = totalSpent + spentCategoryAmount;

      console.log(categoryTotalSpent);
      // setBudgetState({ categoryTotalSpent, budgetBalance });
    }
  };*/

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

    // Empty budget category and amount input fields
    setBudget("");
    setBudgetAmount("");
    // console.log(newBudget);
  }

  // Adds all initial budget amount
  const total = newBudget.reduce((acc, current) => {
    const amount = Number(current.totalAmount);
    return acc + amount;
  }, 0);
  const formattedTotal = total.toLocaleString();

  // Adds all spent budget amount
  const totalSpent = allocation.reduce((acc, item) => {
    const clean = Number(item.spentAmount.replace(/,/g, "") || 0);
    return acc + clean;
  }, 0);

  const formattedSpent = totalSpent.toLocaleString();

  // Calculates the percentage of the spent budget
  const spent = Number(formattedSpent.replace(/,/g, ""));
  const totalBudget = Number(formattedTotal.replace(/,/g, ""));
  const percentageSpent = Number(100 * (spent / totalBudget)).toFixed(1);

  // const numericTotal = parseFloat(formattedTotal.replace(/,/g, ''));

  return (
    <BudgetContext.Provider
      value={{
        newBudget,
        percentageSpent,
        formattedTotal,
        formattedSpent,
        formattedAmount,
        budget,
        budgetAmount,
        sentAmount,
        category,
        setNewBudget,
        setCategory,
        setBudget,
        handleSubmit,
        setBudgetAmount,
        setSentAmount,
        // expenseBudgetCalc,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}
