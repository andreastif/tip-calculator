import Select from "react-select";
import { Tip, TipEnum, TipLabelEnum } from "./Types";

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

export const Appreciation = ({
  index,
  tip,
  onHandleTip,
  children,
}: {
  index: number;
  tip: Tip;
  onHandleTip: (satisfaction: TipEnum, label: string, index: number) => void;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col mx-auto px-4 py-2 gap-2">
      {children}
      <Select
        className="w-56"
        options={selectOptions}
        onChange={(e) => onHandleTip(e!.value, e!.label, index)}
        value={tip}
      />
    </div>
  );
};
