import React from 'react';
import {useFormik} from 'formik';
import {Button, Grid, Paper, TextField} from '@material-ui/core';

import {validationSchema} from './EntryForm.schema';
import {useStyles} from './EntryForm.style';
import {LedgerFormProps} from './types';

export const EntryForm: React.FC<LedgerFormProps> = ({
  initialValues,
  onSubmit
}) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <Paper className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id='description'
          name='description'
          label='Description'
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
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
        <Grid container justify='space-between'>
          <Button
            className={classes.btn}
            color='primary'
            variant='outlined'
            type='submit'
          >
            Back
          </Button>
          <Button
            className={classes.btn}
            color='primary'
            variant='contained'
            type='submit'
          >
            Submit
          </Button>
        </Grid>
      </form>
    </Paper>
  );
};
