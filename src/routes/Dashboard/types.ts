export interface LedgerPayloadType {
  month: string;
  year: number;
}

export interface LedgerDetailsType {
  date: string;
  income?: number;
  expenses?: number;
  details: LedgerDailyDetails[];
}

export interface LedgerDailyDetails {
  description: string;
  amount: number;
  isExpense: boolean;
}
