import { useEffect, useState } from "react";
import styles from "./transfermoney.module.css";
import RecentTransaction from "./RecentTransaction";
import axios from "axios";
import { useBudget } from "../budget/BudgetProvider";

export default function TransferMoney({
  setOpenTransfer,
  setSelectedBankName,
}) {
  const [errors, setErrors] = useState({});
  const [error2, setError2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [banks, setBanks] = useState([]);
  const [selectedBankCode, setSelectedBankCode] = useState("");
  const { accountNum, setAccountNum } = useBudget();

  function validateInputs() {
    const errors = {};
    accountNum.trim() === ""
      ? (errors.accountNum = "Account number cannot be empty")
      : accountNum.trim().length !== 10
      ? (errors.accountNum = "Check account number and try again")
      : "";
    selectedBankCode === ""
      ? (errors.selectedBankCode = "Please select a bank")
      : "";
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = validateInputs();
    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setOpenTransfer("confirm");
  }

  function handleBankChange(e) {
    const selectedBankCode = e.target.value;
    const selectedBank = banks.find((bank) => bank.code === selectedBankCode);
    setSelectedBankCode(selectedBankCode);
    setSelectedBankName(selectedBank ? selectedBank.name : "");
  }
  useEffect(() => {
    async function fetchBanks() {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.tryduplo.com/v1/merchants/utilities/banks/list?country=Nigeria",
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_DUPLO_API_KEY}`,
            },
          }
        );
        setBanks(response.data.data);
        setLoading(false);
        console.log(response.data.data);
      } catch (error) {
        console.log("Failed to fetch banks. Please try again.");
        setError2("Failed to fetch banks. Please try again.");
        setLoading(false);
      }
    }
    fetchBanks();
  }, []);

  return (
    <div>
      <form className={styles.accountDetailsForm} onSubmit={handleSubmit}>
        <div className={styles.acctNumInput}>
          <label className={styles.labelName}>Recepient Account</label>
          <input
            className={styles.inputField}
            onChange={(e) => setAccountNum(e.target.value)}
            value={accountNum}
            placeholder="Enter 10-digit account number"
            type="number"
          />
          {errors.accountNum && (
            <div className={styles.errorText}>{errors.accountNum}</div>
          )}
        </div>
        <div className={styles.bankNameInput}>
          {loading && <p>Loading banks...</p>}
          <label className={styles.labelName}>Select Bank</label>
          <br />

          {!loading && !error2 && (
            <select
              className={styles.inputField}
              value={selectedBankCode}
              onChange={handleBankChange}
            >
              <option value="">-- Select a Bank --</option>
              {banks.map((bank) => (
                <option key={bank.id} value={bank.code}>
                  {bank.name}
                </option>
              ))}
            </select>
          )}
          {errors.selectedBankCode && (
            <p className={styles.errorText}>{errors.selectedBankCode}</p>
          )}
          {error2 && <div className={styles.errorText}>{error2}</div>}
        </div>
        <button className={styles.ctaButton} type="submit">
          Next
        </button>
      </form>
      <div className={styles.recentContainer}>
        <RecentTransaction />
      </div>
    </div>
  );
}
