import React, {useEffect, useReducer} from 'react';
import {AnyAction} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Paper} from '@material-ui/core';

import {fetchLedgerDetails} from './redux/actions/dashboard.action';
import {DashboardStateType, LedgerDetailsType} from './types';
import {RootState} from '../../redux/types';
import {clearLedgerEntry} from './redux/actions/selectedLedger.action';
import {LedgerForm, LedgerFormValues} from '../../components/LedgerForm';
import {useStyles} from './Dashboard.styles';
import {ledgerFormSubmit} from './redux/actions/ledgerForm.action';
import {LedgerDetail} from '../../components/LedgerDetail';
import {LedgerDayListCard} from '../../components/LedgerDayListCard';

const initialDashboardState = {
  formMode: 'add',
  showForm: false,
  selectedMonthAndYear: {
    month: 'mar',
    year: 2020
  },
  formValues: {
    description: '',
    amount: 0,
    ledgerType: 'expense',
    categoryName: ''
  },
  view: 'ldlc' // ledger dashboard
};

export const Dashboard = () => {
  const classes = useStyles();
  const dispatchReduxAction = useDispatch();

  function reducer(state: DashboardStateType, action: AnyAction) {
    switch (action.type) {
      case 'ADD_LEDGER_ENTRY':
        return {...state, formMode: 'add', view: 'lf'}; // add ledger
      case 'EDIT_LEDGER_ENTRY':
        return {...state, formMode: 'edit', view: 'lf'}; // edit ledger
      case 'MONTH_YEAR_CHANGE':
        return {...state, selectedMonthAndYear: {...action.payload}};
      case 'LEDGER_DASHBOARD':
        return {...state, view: 'ldlc'};
      case 'LEDGER_FORM_CANCEL':
        return {...state, view: state.formMode === 'edit' ? 'ld' : 'ldlc'};
      case 'SET_LEDGER_VALUE':
        return {...state, formValues: action.payload, view: 'ld'};
      default:
        return initialDashboardState;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialDashboardState);

  const {ledgerDetails, selectedLedgerEntry} = useSelector(
    (rootstate: RootState) => rootstate.dashboard
  );

  useEffect(() => {
    if (selectedLedgerEntry.ledger)
      dispatch({
        type: 'SET_LEDGER_VALUE',
        payload: selectedLedgerEntry.ledger || {}
      });
  }, [selectedLedgerEntry]);

  const {ledger, date} = selectedLedgerEntry;

  function onMoneyInfoDetailCardBack() {
    dispatch(clearLedgerEntry());
  }

  function onMoneyInfoDetailCardEdit() {
    dispatch({type: 'EDIT_LEDGER_ENTRY'});
  }

  function onFormSubmit(payload: LedgerFormValues) {
    dispatchReduxAction(ledgerFormSubmit({payload, formMode: state.formMode}));
  }

  function onFormCancel() {
    dispatch({type: 'LEDGER_FORM_CANCEL'});
  }

  useEffect(() => {
    dispatchReduxAction(fetchLedgerDetails(state.selectedMonthAndYear));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Paper elevation={0} className={classes.root}>
      {state.view === 'ldlc' && (
        <Button onClick={() => dispatch({type: 'ADD_LEDGER_ENTRY'})}>
          Add
        </Button>
      )}

      {state.view === 'lf' && (
        <LedgerForm
          onCancel={onFormCancel}
          onSubmit={onFormSubmit}
          initialValues={state.formValues}
        />
      )}

      {state.view === 'ldlc' &&
        ledgerDetails &&
        ledgerDetails.map((ledgerItem: LedgerDetailsType) => (
          <LedgerDayListCard {...ledgerItem} key={ledgerItem.date} />
        ))}

      {state.view === 'ld' && (
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
