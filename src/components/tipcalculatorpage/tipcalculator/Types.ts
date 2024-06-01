export enum TipEnum {
  POOR = 0,
  OKAY = 5,
  GOOD = 10,
  AMAZING = 20,
}

export enum TipLabelEnum {
  POOR = "Poor (0% tip)",
  OKAY = "Okay (5% tip)",
  GOOD = "Good (10% tip)",
  AMAZING = "Amazing (20% tip)",
}
export interface Tip {
  value: TipEnum;
  label: string;
}

export interface Bill {
  price: number;
  tips: Tip[];
}
