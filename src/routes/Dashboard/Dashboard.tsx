import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MoneyInfoCard} from '../../components/MoneyInfoCard';
import {fetchLedgerDetails} from './redux/actions/dashboard.action';
import {LedgerDetailsType, LedgerPayloadType} from './types';
import {RootState} from '../../redux/rootReducer';

export const Dashboard = () => {
  const ledgerDetails = useSelector(
    (state: RootState) => state.dashboard.ledgerDetails
  );

  const [
    selectedMonthAndYear,
    setSelectedMonthAndYear
  ] = React.useState<LedgerPayloadType>({
    month: 'mar',
    year: 2020
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLedgerDetails(selectedMonthAndYear));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {ledgerDetails &&
        ledgerDetails.map((ledger: LedgerDetailsType) => (
          <MoneyInfoCard {...ledger} key={ledger.date} />
        ))}
    </>
  );
};
