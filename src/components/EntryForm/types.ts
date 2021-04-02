export interface LedgerFormValues {
  description: string;
  amount: number;
}

export interface LedgerFormProps {
  initialValues: LedgerFormValues;
  onSubmit: (values: LedgerFormValues) => void;
}
