import { Bill } from "./Types";

export const Summary = ({ bill }: { bill: Bill }) => {
  const tips = bill.price * (bill.tips[0].value / 100 + bill.tips[1].value / 100);
  const total = bill.price + tips;

  return (
    <div className="text-center my-3">
      You pay <span className="font-semibold">{total.toFixed(2)}$</span> ({bill.price.toFixed(2)}$ + {tips.toFixed(2)}$
      tip)
    </div>
  );
};
