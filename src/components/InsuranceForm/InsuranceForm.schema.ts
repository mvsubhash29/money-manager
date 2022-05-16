import * as yup from 'yup';

export const validationSchema = yup.object({
  description: yup.string().required('Description is required'),
  premiumAmount: yup.number().required('Premium Amount is required'),
  premiumMode: yup.string().required('Premium mode is required'),
  sumAssured: yup.number().required('Sum Assured is required'),
  insurerName: yup.string().required('Insurer name is required'),
  insurancePlan: yup.string().required('Insurance plan is required'),
  insuranceCompanyName: yup
    .string()
    .required('Insurance company name is required')
});
