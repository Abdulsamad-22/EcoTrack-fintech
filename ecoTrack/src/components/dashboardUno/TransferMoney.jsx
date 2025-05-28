import { useEffect, useState } from "react";
import styles from "../../../styles/dashboardStyles/transfermoney.module.css";
import RecentTransaction from "./RecentTransaction";
import axios from "axios";
import { useBudget } from "../budget/BudgetProvider";
import Select from "react-select";

export default function TransferMoney({
  setOpenTransfer,
  setSelectedBankName,
}) {
  const [errors, setErrors] = useState({});
  const [error2, setError2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [banks, setBanks] = useState([]);
  const [selectedBankCode, setSelectedBankCode] = useState("");
  // const [accountName, setAccountName] = useState("");
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

  function handleBankChange(selectedOption) {
    const selectedBankCode = selectedOption?.value;
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
      } catch (error) {
        setError2("Failed to fetch banks. Please try again.");
        setLoading(false);
      }
    }
    fetchBanks();
  }, []);

  // const BUDPAY_SECRET_KEY = process.env.REACT_APP_BUDPAY_SECRET_KEY;

  /*useEffect(() => {
    const fetchBanks = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.budpay.com/api/v2/bank_list/NGN",
          {
            headers: {
              Authorization: `Bearer sk_test_txs4wrjnhrzuxqa1y8dc9jp0vx0rifkznpxqipm`,
            },
          }
        );
        const data = await response.json();
        if (data.success) {
          setBanks(data.data);
          console.log(banks)
          setLoading(false);
          console.log(data.data);
        } else
          setErrors((prev) => ({
            ...prev,
            bankFetch: "Failed to fetch bank list",
          }));
      } catch (error) {
        setErrors((prev) => ({ ...prev, bankFetch: "Error fetching banks" }));
        setLoading(false);
      }
    };
    fetchBanks();
  }, []);*/

  const bankOptions = banks.map((bank) => ({
    value: bank.code,
    label: bank.name,
  }));
  return (
    <div>
      <form className={styles.accountDetailsForm} onSubmit={handleSubmit}>
        <div className={styles.acctNumInput}>
          <label className={styles.labelName}>Recepient Account</label>
          <input
            className={styles.inputField}
            onChange={(e) => setAccountNum(e.target.value)}
            value={accountNum}
            placeholder="Account Number (10 digits)"
            type="text"
            maxLength={10}
            aria-label="Account number"
          />
          {errors.accountNum && (
            <div className={styles.errorText}>{errors.accountNum}</div>
          )}
        </div>
        <div className={styles.bankNameInput}>
          {loading && <p className={styles.loadingText}>Loading banks...</p>}
          <label className={styles.labelName}>Select Bank</label>
          <br />

          {!loading && !error2 && (
            <Select
              className={styles.bankInput}
              classNamePrefix={styles.bankInput}
              options={bankOptions}
              onChange={handleBankChange}
              placeholder="Select a Bank"
              menuPlacement="bottom"
              value={bankOptions.find((opt) => opt.value === selectedBankCode)}
            />
            // <select
            //   onFocus={(e) =>
            //     e.target.scrollIntoView({ behavior: "smooth", block: "center" })
            //   }
            //   className={styles.inputField}
            //   value={selectedBankCode}
            //   onChange={handleBankChange}
            //   menuPlacement="bottom"
            // >
            //   <option value=""> Select a Bank </option>
            //   {banks.map((bank) => (
            //     <option key={bank.id} value={bank.code}>
            //       {bank.name}
            //     </option>
            //   ))}
            // </select>
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
