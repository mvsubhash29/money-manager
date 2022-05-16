import React from 'react';
import {Box, Button, Grid, TextField, Typography} from '@mui/material';
import {useFormik} from 'formik';
import {useStyles} from './InsuranceForm.style';
import {InsuranceFormProps} from './types';
import {validationSchema} from './InsuranceForm.schema';

export const InsuranceForm: React.FC<InsuranceFormProps> = (props) => {
  const {onSubmit, onCancel, initialValues} = props;

  const classes = useStyles();

  function onClose(event: React.SyntheticEvent<EventTarget>) {
    onCancel(event);
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <Box className={classes.root}>
      <Typography variant='h3'>Insurance Form</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id='insuranceCompanyName'
          name='insuranceCompanyName'
          label='Insurance Company Name'
          margin='normal'
          value={formik.values.insuranceCompanyName}
          onChange={formik.handleChange}
          error={
            formik.touched.insuranceCompanyName &&
            Boolean(formik.errors.insuranceCompanyName)
          }
          helperText={
            formik.touched.insuranceCompanyName &&
            formik.errors.insuranceCompanyName
          }
        />
        <TextField
          fullWidth
          id='insurancePlan'
          name='insurancePlan'
          label='Insurance Plan'
          margin='normal'
          value={formik.values.insurancePlan}
          onChange={formik.handleChange}
          error={
            formik.touched.insurancePlan && Boolean(formik.errors.insurancePlan)
          }
          helperText={
            formik.touched.insurancePlan && formik.errors.insurancePlan
          }
        />
        <TextField
          fullWidth
          id='insurerName'
          name='insurerName'
          label='Insurer Name'
          margin='normal'
          value={formik.values.insurerName}
          onChange={formik.handleChange}
          error={
            formik.touched.insurerName && Boolean(formik.errors.insurerName)
          }
          helperText={formik.touched.insurerName && formik.errors.insurerName}
        />
        <TextField
          fullWidth
          id='sumAssured'
          name='sumAssured'
          label='Sum Assured'
          margin='normal'
          value={formik.values.sumAssured}
          onChange={formik.handleChange}
          error={formik.touched.sumAssured && Boolean(formik.errors.sumAssured)}
          helperText={formik.touched.sumAssured && formik.errors.sumAssured}
        />
        <TextField
          fullWidth
          id='premiumMode'
          name='premiumMode'
          label='Premium Mode'
          margin='normal'
          value={formik.values.premiumMode}
          onChange={formik.handleChange}
          error={
            formik.touched.premiumMode && Boolean(formik.errors.premiumMode)
          }
          helperText={formik.touched.premiumMode && formik.errors.premiumMode}
        />
        <TextField
          fullWidth
          id='premiumAmount'
          name='premiumAmount'
          label='Premium Amount'
          margin='normal'
          value={formik.values.premiumAmount}
          onChange={formik.handleChange}
          error={
            formik.touched.premiumAmount && Boolean(formik.errors.premiumAmount)
          }
          helperText={
            formik.touched.premiumAmount && formik.errors.premiumAmount
          }
        />
        <TextField
          fullWidth
          id='description'
          name='description'
          label='Description'
          margin='normal'
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
        <Grid container justifyContent='space-between'>
          <Button
            className={classes.btn}
            color='primary'
            variant='outlined'
            type='button'
            onClick={onClose}
          >
            Cancel
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
    </Box>
  );
};
