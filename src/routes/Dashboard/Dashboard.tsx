import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Paper} from '@material-ui/core';

import {MoneyInfoCard} from '../../components/MoneyInfoCard';
import {fetchLedgerDetails} from './redux/actions/dashboard.action';
import {LedgerDetailsType, LedgerPayloadType} from './types';
import {RootState} from '../../redux/rootReducer';
import {MoneyInfoDetailCard} from '../../components/MoneyInfoDetailCard/MoneyInfoDetailCard';
import {clearLedgerEntry} from './redux/actions/selectedLedger.action';
import {EntryForm} from '../../components/EntryForm/EntryForm';
import {useStyles} from './Dashboard.styles';

export const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {ledgerDetails, selectedLedgerEntry} = useSelector(
    (state: RootState) => state.dashboard
  );

  const [showForm, setShowForm] = useState(false);

  const [initialValues, setInitialValues] = useState({
    description: '',
    amount: 0
  });

  useEffect(() => {
    setInitialValues(selectedLedgerEntry.ledger || {});
  }, [selectedLedgerEntry]);

  const {ledger, date} = selectedLedgerEntry;

  const [
    selectedMonthAndYear,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSelectedMonthAndYear
  ] = React.useState<LedgerPayloadType>({
    month: 'mar',
    year: 2020
  });

  function onMoneyInfoDetailCardBack() {
    dispatch(clearLedgerEntry());
  }

  function onMoneyInfoDetailCardEdit() {
    setShowForm(!showForm);
  }

  useEffect(() => {
    dispatch(fetchLedgerDetails(selectedMonthAndYear));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onAddLedgerEntry() {
    setShowForm(!showForm);
  }

  return (
    <Paper elevation={0} className={classes.root}>
      <Button onClick={onAddLedgerEntry}>{showForm ? 'Cancel' : 'Add'}</Button>
      {showForm && <EntryForm initialValues={initialValues} />}
      {!showForm &&
        ledgerDetails &&
        selectedLedgerEntry &&
        !selectedLedgerEntry.showDetailInfo &&
        ledgerDetails.map((ledgerItem: LedgerDetailsType) => (
          <MoneyInfoCard {...ledgerItem} key={ledgerItem.date} />
        ))}
      {!showForm &&
        selectedLedgerEntry &&
        selectedLedgerEntry.showDetailInfo && (
          <MoneyInfoDetailCard
            ledger={ledger}
            date={date}
            onBack={onMoneyInfoDetailCardBack}
            onEdit={onMoneyInfoDetailCardEdit}
          />
        )}
    </Paper>
  );
};
