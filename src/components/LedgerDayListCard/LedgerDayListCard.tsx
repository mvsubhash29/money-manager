import React from 'react';
import {useDispatch} from 'react-redux';
import {Box, Card, CardContent, Divider, Typography} from '@material-ui/core';

import {LedgerTile} from '../LedgerTile';
import {
  LedgerDailyDetails,
  LedgerDetailsType
} from '../../routes/Dashboard/types';
import {selectedLedgerEntry} from '../../routes/Dashboard/redux/actions/selectedLedger.action';
import {useStyles} from './LedgerDayListCard.style';

export const LedgerDayListCard = (props: LedgerDetailsType) => {
  const {date, income, expense, details} = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  function onLedgerEntryClick(ledger: LedgerDailyDetails) {
    dispatch(selectedLedgerEntry({date, ledger, showDetailInfo: true}));
  }

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
          {expense && (
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
            >
              Expenses {expense}
            </Typography>
          )}
        </Box>
        <Divider />
        {details &&
          details.map((ledger, index) => (
            <LedgerTile
              onLedgerEntryClick={onLedgerEntryClick}
              ledger={ledger}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            />
          ))}
      </CardContent>
    </Card>
  );
};
