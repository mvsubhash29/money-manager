import React from 'react';
import {Button, Grid, Paper, Typography} from '@material-ui/core';
import {useStyles} from './LedgerDetail.styles';
import {LedgerDetailProps} from './types';

export const LedgerDetail: React.FC<LedgerDetailProps> = (props) => {
  const {onEdit, onBack, date, ledger} = props;
  const {amount, description, isExpense} = ledger;

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h5'> {description}</Typography>
        </Grid>

        <Grid
          className={classes.mtb16}
          item
          container
          direction='row'
          justify='space-between'
        >
          <Grid item>
            <Typography variant='body2' color='textSecondary'>
              Category
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              Amount
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              Date
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              Description
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body2'>
              {isExpense ? 'Expense' : 'Income'}
            </Typography>
            <Typography variant='body2'>{amount}</Typography>
            <Typography variant='body2'>{date}</Typography>
            <Typography variant='body2'>{description}</Typography>
          </Grid>
        </Grid>

        <Grid item container xs={12} justify='space-between'>
          <Button
            color='primary'
            variant='outlined'
            size='small'
            onClick={onBack}
          >
            Back
          </Button>
          <Button color='primary' variant='contained' onClick={onEdit}>
            Edit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
