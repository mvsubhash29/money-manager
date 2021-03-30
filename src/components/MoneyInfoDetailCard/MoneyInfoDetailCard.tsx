import {Grid, Paper, Typography} from '@material-ui/core';
import React from 'react';
import {useStyles} from './MoneyInfoDetailCard.style';

interface MoneyInfoDetailCardProps {
  categoryName: string;
}

export const MoneyInfoDetailCard: React.FC<MoneyInfoDetailCardProps> = (
  props
) => {
  const classes = useStyles();
  const {categoryName} = props;

  return (
    <Paper className={classes.paper}>
      <Grid container xs={12}>
        <Typography variant='h5'> {categoryName}</Typography>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction='column' spacing={2}>
            <Grid item xs>
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
              <Typography variant='body2' style={{cursor: 'pointer'}}>
                Edit
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant='body2'>$19.00</Typography>
            <Typography variant='body2'>29/01/1990</Typography>
            <Typography variant='body2'>For Food</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
