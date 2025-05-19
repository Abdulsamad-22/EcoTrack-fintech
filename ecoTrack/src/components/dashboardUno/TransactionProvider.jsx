import { createContext, useContext, useState, useEffect } from "react";
const TransferContext = createContext();
export const useTransfer = () => useContext(TransferContext);
export default function TransactionProvider({ children }) {
  const [transaction, setTransaction] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions
      ? JSON.parse(savedTransactions)
      : [
          {
            name: "Wisdom Obinna Hart",
            type: "Debit",
            date: "12 Dec, 2024",
            amount: 120000,
            category: "Food and Groceries",
            status: "Pending",
          },
          {
            name: "Choli Frank",
            type: "Credit",
            date: "12 Dec, 2024",
            amount: 120000,
            category: "Food and Groceries",
            status: "Successful",
          },
          {
            name: "AEDC",
            type: "Debit",
            date: "12 Dec, 2024",
            amount: 20000,
            category: "Electricity",
            status: "Pending",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transaction));
  }, [transaction]);
  return (
    <TransferContext.Provider value={{ transaction, setTransaction }}>
      {children}
    </TransferContext.Provider>
  );
}
