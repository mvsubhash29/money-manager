import React from 'react';
import {
  Box,
  Card,
  CardContent,
  createStyles,
  Divider,
  makeStyles,
  Theme,
  Typography
} from '@material-ui/core';
import {MoneyInfo} from '../MoneyInfo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 14
    },
    categoryName: {
      marginLeft: theme.spacing(1)
    },
    container: {
      padding: theme.spacing(1)
    },
    root: {
      marginBottom: theme.spacing(2)
    }
  })
);

export interface MoneyInfoCardProps {
  date: string;
  isIncome: boolean;
  totalAmount: number;
}

export const MoneyInfoCard = (props: MoneyInfoCardProps) => {
  const {date, isIncome, totalAmount} = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box display='flex' justifyContent='space-between'>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            {date}
          </Typography>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            {isIncome ? 'Income' : 'Expenses'} {totalAmount}
          </Typography>
        </Box>
        <Divider />
        <MoneyInfo amount={100} isExpense={false} categoryName='Food' />
        <Divider light />
        <MoneyInfo amount={1000} isExpense={false} categoryName='Transport' />
        <Divider light />
      </CardContent>
    </Card>
  );
};
