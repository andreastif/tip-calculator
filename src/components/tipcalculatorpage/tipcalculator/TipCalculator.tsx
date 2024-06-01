import { useState } from "react";
import { Appreciation } from "./Appreciation";
import { ResetBtn } from "./ResetBtn";
import { Summary } from "./Summary";
import { TipInput } from "./TipInput";
import { Bill, TipEnum, TipLabelEnum } from "./Types";

export const TipCalculator = () => {
  const [bill, setBill] = useState<Bill>({
    price: 0,
    tips: [
      { value: TipEnum.POOR, label: TipLabelEnum.POOR },
      { value: TipEnum.POOR, label: TipLabelEnum.POOR },
    ],
  });

  const handleSetPrice = (amount: number) => {
    setBill((bill: Bill) => {
      return { ...bill, price: amount };
    });
  };

  const handleSetTip = (satisfaction: TipEnum, label: string, index: number) => {
    setBill((bill: Bill) => {
      const tips = bill.tips.map((tip, i) => {
        return i === index ? { ...tip, value: satisfaction, label } : tip;
      });

      return { ...bill, tips };
    });
  };

  const handleOnReset = () => {
    setBill(() => {
      return {
        price: 0,
        tips: [
          { value: TipEnum.POOR, label: TipLabelEnum.POOR },
          { value: TipEnum.POOR, label: TipLabelEnum.POOR },
        ],
      };
    });
  };

  return (
    <div className="my-20 font-mono">
      <div className="border-2 rounded-sm shadow-lg min-h-screen-60 py-10 w-78 sm:w-96 bg-fuchsia-50">
        <h1 className="text-center text-4xl my-3 uppercase tracking-tighter ">Tip Calculator</h1>
        <TipInput onHandleSetPrice={handleSetPrice} price={bill!.price!}>
          How much was the bill?
        </TipInput>
        {bill.tips?.map((item, key) => {
          return (
            <Appreciation index={key} onHandleTip={handleSetTip} tip={item} key={"Appreciation: " + key}>
              How did person [{key + 1}] like the service?
            </Appreciation>
          );
        })}

        <ResetBtn onReset={handleOnReset}>Reset</ResetBtn>
        <Summary bill={bill} />
      </div>
    </div>
  );
};
