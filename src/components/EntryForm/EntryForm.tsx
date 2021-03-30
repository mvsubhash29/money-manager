import React from 'react';
import {useFormik} from 'formik';
import {Button, TextField} from '@material-ui/core';
import {validationSchema} from './EntryForm.schema';
import {useStyles} from './EntryForm.style';

export const EntryForm = () => {
  const classes = useStyles();

  const [initialValues, setInitialValues] = React.useState({
    description: '',
    amount: ''
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id='description'
        name='description'
        label='Description'
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <TextField
        fullWidth
        id='amount'
        name='amount'
        label='Amount'
        value={formik.values.amount}
        onChange={formik.handleChange}
        error={formik.touched.amount && Boolean(formik.errors.amount)}
        helperText={formik.touched.amount && formik.errors.amount}
      />
      <Button
        className={classes.btn}
        color='primary'
        variant='contained'
        fullWidth
        type='submit'
      >
        Submit
      </Button>
    </form>
  );
};
