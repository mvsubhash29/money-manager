export interface LedgerPayloadType {
  month: string;
  year: number;
}

export interface LedgerDetailsType {
  date: string;
  income?: number;
  expense?: number;
  details: LedgerDailyDetails[];
}

export interface LedgerDailyDetails {
  description: string;
  amount: number;
  ledgerType: string;
  categoryName: string;
}

export interface SelectedLedgerEntry {
  date: string;
  ledger: LedgerDailyDetails;
  showDetailInfo: boolean;
}

export interface DashboardStateType {
  formMode: string;
  showForm: boolean;
  selectedMonthAndYear: {
    month: string;
    year: number;
  };
  formValues: {
    description: string;
    amount: number;
    ledgerType: string;
    categoryName: string;
  };
  view: string; // ledger dashboard
}
