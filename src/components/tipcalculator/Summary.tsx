import { useMemo } from "react";
import { Bill } from "./Types";

interface SummaryProps {
  bill: Bill;
}

const Summary = ({ bill }: SummaryProps) => {
  const tips = useMemo(() => {
    return (bill.price * bill.tips.reduce((acc, curr) => (acc += curr.value), 0)) / 100;
  }, [bill.price, bill.tips]);

  const total = useMemo(() => {
    return bill.price + tips;
  }, [bill.price, tips]);

  return (
    <div className="text-center my-3">
      You pay <span className="font-semibold">{total.toFixed(2)}$</span> ({bill.price.toFixed(2)}$ + {tips.toFixed(2)}$
      tip)
    </div>
  );
};

export default Summary;
