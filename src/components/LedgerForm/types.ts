export interface LedgerFormValues {
  description: string;
  amount: number;
  ledgerType: string;
  categoryName: string;
}

export interface LedgerFormProps {
  initialValues: LedgerFormValues;
  onSubmit: (values: LedgerFormValues) => void;
  onCancel: () => void;
}
