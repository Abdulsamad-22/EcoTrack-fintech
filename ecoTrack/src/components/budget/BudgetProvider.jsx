import { useContext, createContext, useState, useEffect } from "react";

const BudgetContext = createContext();
export const useBudget = () => useContext(BudgetContext);
export default function BudgetProvider({ children }) {
  const allocation = [
    {
      icon: "/images/House.svg",
      category: "Rent",
      spentAmount: 70000,
      totalAmount: 320000,
      status: "/images/check-icon-onPlain.svg",
    },
    {
      icon: "/images/food-icon.svg",
      category: "Food Item",
      spentAmount: 155000,
      totalAmount: 200000,
      status: "/images/warning-icon.svg",
    },
    {
      icon: "/images/transport-icon.svg",
      category: "Transportation",
      spentAmount: 92000,
      totalAmount: 170000,
      status: "/images/warning-icon.svg",
    },
    {
      icon: "/images/fuel-icon.svg",
      category: "Electricity",
      spentAmount: 20000,
      totalAmount: 100000,
      status: "/images/check-icon-onPlain.svg",
    },
  ];

  const [budget, setBudget] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");
  const [originalBalance, setOriginalBalance] = useState(100758030.1);
  const [balance, setBalance] = useState(originalBalance);
  const [errors, setErrors] = useState({});

  const [accountNum, setAccountNum] = useState("");
  const [category, setCategory] = useState("");
  const [sentAmount, setSentAmount] = useState("");
  const [newBudget, setNewBudget] = useState(allocation);

  useEffect(() => {
    localStorage.setItem("newBudget", JSON.stringify(newBudget), [newBudget]);
  });

  const formattedAmount = parseFloat(budgetAmount);

  const expenseBudgetCalc = () => {
    const spentCategoryAmount = parseFloat(sentAmount);
    const matchedCategory = newBudget.find(
      (item) => item.category === category
    );

    if (matchedCategory) {
      setNewBudget((prevBudget) =>
        prevBudget.map((item) =>
          item.category.toLowerCase() === category.trim().toLowerCase()
            ? {
                ...item,
                spentAmount: item.spentAmount + spentCategoryAmount,
                totalAmount: item.totalAmount - spentCategoryAmount,
              }
            : item
        )
      );
    }
  };

  function validateInputs() {
    const errors = {};
    budget.trim() === ""
      ? (errors.budget = "Please enter a budget category name")
      : "";

    budgetAmount.trim() === "" ? (errors.budgetAmount = "Enter an amount") : "";
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = validateInputs();
    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    } else {
      const newBalance = Number(balance - formattedAmount);
      setBalance(newBalance);
      setNewBudget((prev) => [
        ...prev,
        {
          // icon: icon,
          category: budget,
          spentAmount: 0,
          totalAmount: formattedAmount,
          status: "/images/check-icon-onPlain.svg",
        },
      ]);
    }

    // Empty budget category and amount input fields
    setBudget("");
    setBudgetAmount("");
    // console.log(newBudget);
  }

  // Adds all initial budget amount
  const total = newBudget.reduce(
    (acc, current) => acc + current.totalAmount,
    0
  );
  const formattedTotal = total;

  // Adds all spent budget amount
  const totalSpent = newBudget.reduce((acc, item) => acc + item.spentAmount, 0);

  const formattedSpent = totalSpent;
  console.log(formattedSpent);

  // Calculates the percentage of the spent budget
  const spent = Number(formattedSpent);
  const totalBudget = Number(formattedTotal);
  const percentageSpent = Number(100 * (spent / totalBudget)).toFixed(1);

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
        originalBalance,
        balance,
        errors,
        accountNum,
        setAccountNum,
        setBalance,
        setOriginalBalance,
        setNewBudget,
        setCategory,
        setBudget,
        handleSubmit,
        setBudgetAmount,
        setSentAmount,
        expenseBudgetCalc,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

/*() => {
    const stored = localStorage.getItem("newBudget");
    return stored ? JSON.parse(stored) : */
