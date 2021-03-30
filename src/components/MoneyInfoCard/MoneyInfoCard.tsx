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
import {LedgerDetailsType} from '../../routes/Dashboard/types';

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
      marginBottom: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500
    }
  })
);

export const MoneyInfoCard = (props: LedgerDetailsType) => {
  const {date, income, expenses, details} = props;
  const classes = useStyles();

  return (
    // TODO: Need to change card to paper ?
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
          {income && (
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
            >
              Income {income}
            </Typography>
          )}
          {expenses && (
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
            >
              Expenses {expenses}
            </Typography>
          )}
        </Box>
        <Divider />
        {details &&
          details.map((eachDayItemLedger, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <MoneyInfo {...eachDayItemLedger} key={index} />
          ))}
      </CardContent>
    </Card>
  );
};
