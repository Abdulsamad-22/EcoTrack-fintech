import { createContext, useContext, useEffect, useState } from "react";
import inflatedPrices from "../data/inflatedPrices.json";

const PriceContext = createContext();
export const usePrice = () => useContext(PriceContext);

function getFluctuatedPrice(price) {
  const fluctuation = Math.random() * 0.15 - 0.05;
  const newPrice = price + price * fluctuation;
  return Math.round(newPrice);
}
export default function FluctuatingPrices({ children }) {
  const [items, setItems] = useState(inflatedPrices);
  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) =>
        prevItems.map((item) => ({
          ...item,
          price: getFluctuatedPrice(item.price),
          newPrice: getFluctuatedPrice(item.price),
          rate: Math.abs(
            ((item.price - item.newPrice) / item.newPrice) * 100
          ).toFixed(1),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  //   useEffect(() => {
  //     localStorage.setItem("prices", JSON.stringify(items));
  //   }, [items]);
  return (
    <PriceContext.Provider value={{ items, setItems }}>
      {children}
    </PriceContext.Provider>
  );
}

/* () => {
    const storedPrices = localStorage.getItem("prices");
    return storedPrices ? JSON.parse(storedPrices) : inflatedPrices;
  }
    */
