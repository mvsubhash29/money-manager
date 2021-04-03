import React, {useEffect, useRef, useState} from 'react';
import {useFormik} from 'formik';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField
} from '@material-ui/core';
import {useSelector} from 'react-redux';

import {validationSchema} from './LedgerForm.schema';
import {useStyles} from './LedgerForm.style';
import {LedgerFormProps, LedgerFormValues} from './types';
import {RootState} from '../../redux/types';
import {
  CategoryResponseType,
  CategoryType
} from '../../routes/CategorySettings/redux/actions/types';

export const LedgerForm: React.FC<LedgerFormProps> = (props) => {
  const {initialValues, onSubmit, onCancel} = props;
  const classes = useStyles();

  const categories = useSelector((state: RootState) => state.categories);

  const [categoryItems, setCategoriesItems] = useState<CategoryType[]>();

  function onFormSubmit(values: LedgerFormValues) {
    onSubmit(values);
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onFormSubmit
  });

  const ref = useRef(formik.values.ledgerType);

  if (ref.current !== formik.values.ledgerType) {
    ref.current = formik.values.ledgerType;
  }

  useEffect(() => {
    if (ref.current) {
      setCategoriesItems(categories[ref.current as keyof CategoryResponseType]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return (
    <Paper className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl component='fieldset'>
          <FormLabel component='legend'>
            Choose your Ledger entry type
          </FormLabel>
          <RadioGroup
            aria-label='ledger type'
            name='ledgerType'
            row
            value={formik.values.ledgerType}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value='expense'
              control={<Radio />}
              label='Expense'
            />
            <FormControlLabel
              value='income'
              control={<Radio />}
              label='Income'
            />
          </RadioGroup>
        </FormControl>
        <FormControl
          component='fieldset'
          fullWidth
          error={
            formik.touched.categoryName && Boolean(formik.errors.categoryName)
          }
        >
          <InputLabel id='category'>Category Name</InputLabel>
          <Select
            labelId='category'
            id='category'
            fullWidth
            name='categoryName'
            value={formik.values.categoryName}
            onChange={formik.handleChange}
          >
            {categoryItems &&
              categoryItems.map((category: CategoryType) => {
                return (
                  <MenuItem key={category.name} value={category.name}>
                    {category.title}
                  </MenuItem>
                );
              })}
          </Select>
          <FormHelperText>
            {formik.touched.categoryName && formik.errors.categoryName}
          </FormHelperText>
        </FormControl>
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
            type='button'
            onClick={onCancel}
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
