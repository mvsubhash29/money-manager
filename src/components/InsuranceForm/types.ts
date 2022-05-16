export interface InsuranceFormValues {
  description: string;
  premiumAmount?: number;
  premiumMode: string;
  sumAssured?: number;
  insurerName: string;
  insurancePlan: string;
  insuranceCompanyName: string;
}

export interface InsuranceFormProps {
  initialValues: InsuranceFormValues;
  onSubmit: (values: InsuranceFormValues) => void;
  onCancel: {
    // eslint-disable-next-line @typescript-eslint/ban-types
    bivarianceHack(event: {}): void;
  }['bivarianceHack'];
}
