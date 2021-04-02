import * as yup from 'yup';

export const validationSchema = yup.object({
  description: yup.string().required('Description is required'),
  amount: yup.number().required('Amount is required'),
  categoryName: yup.string().required('CategoryName is required')
});
