import Select, { SingleValue } from "react-select";
import { Tip, TipEnum, TipLabelEnum } from "./Types";

interface Appreciationprops {
  index: number;
  tip: Tip;
  onHandleTip: (e: SingleValue<Tip>, index: number) => void;
  children?: React.ReactNode;
}

interface ISelectOptions {
  readonly value: TipEnum;
  readonly label: string;
}

const selectOptions: ISelectOptions[] = [
  { value: TipEnum.POOR, label: TipLabelEnum.POOR },
  { value: TipEnum.OKAY, label: TipLabelEnum.OKAY },
  { value: TipEnum.GOOD, label: TipLabelEnum.GOOD },
  { value: TipEnum.AMAZING, label: TipLabelEnum.AMAZING },
];

const Appreciation = ({ index, tip, onHandleTip, children }: Appreciationprops) => {
  return (
    <div className="flex flex-col mx-auto px-4 py-2 gap-2">
      {children}
      <Select
        className="w-56"
        options={selectOptions}
        onChange={(singleValueTip) => onHandleTip(singleValueTip, index)}
        value={tip}
      />
    </div>
  );
};

export default Appreciation;
