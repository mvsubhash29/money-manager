import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Paper} from '@material-ui/core';

import {fetchLedgerDetails} from './redux/actions/dashboard.action';
import {LedgerDetailsType, LedgerPayloadType} from './types';
import {RootState} from '../../redux/types';
import {clearLedgerEntry} from './redux/actions/selectedLedger.action';
import {LedgerForm, LedgerFormValues} from '../../components/LedgerForm';
import {useStyles} from './Dashboard.styles';
import {ledgerFormSubmit} from './redux/actions/ledgerForm.action';
import {LedgerDetail} from '../../components/LedgerDetail';
import {LedgerDayListCard} from '../../components/LedgerDayListCard';

export const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {ledgerDetails, selectedLedgerEntry} = useSelector(
    (state: RootState) => state.dashboard
  );

  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState('add');

  const [initialValues, setInitialValues] = useState({
    description: '',
    amount: 0,
    ledgerType: 'expense',
    categoryName: ''
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
    setFormMode('edit');
  }

  function onSubmit(payload: LedgerFormValues) {
    dispatch(ledgerFormSubmit({payload, formMode}));
  }

  useEffect(() => {
    dispatch(fetchLedgerDetails(selectedMonthAndYear));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onAddLedgerEntry() {
    setInitialValues({
      description: '',
      amount: 0,
      ledgerType: 'expense',
      categoryName: ''
    });
    setShowForm(!showForm);
    setFormMode('add');
  }

  return (
    <Paper elevation={0} className={classes.root}>
      <Button onClick={onAddLedgerEntry}>{showForm ? 'Cancel' : 'Add'}</Button>
      {showForm && (
        <LedgerForm
          onCancel={() => {}}
          onSubmit={onSubmit}
          initialValues={initialValues}
        />
      )}
      {!showForm &&
        ledgerDetails &&
        selectedLedgerEntry &&
        !selectedLedgerEntry.showDetailInfo &&
        ledgerDetails.map((ledgerItem: LedgerDetailsType) => (
          <LedgerDayListCard {...ledgerItem} key={ledgerItem.date} />
        ))}
      {!showForm &&
        selectedLedgerEntry &&
        selectedLedgerEntry.showDetailInfo && (
          <LedgerDetail
            ledger={ledger}
            date={date}
            onBack={onMoneyInfoDetailCardBack}
            onEdit={onMoneyInfoDetailCardEdit}
          />
        )}
    </Paper>
  );
};
