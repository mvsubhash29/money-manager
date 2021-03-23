import React from 'react';
import {MoneyInfoCard} from '../../components/MoneyInfoCard';

export const Dashboard = () => {
  const info = {
    date: '12/2021 Sun',
    isIncome: true,
    totalAmount: 1000.87
  };
  return (
    <>
      <MoneyInfoCard {...info} />
      <MoneyInfoCard {...info} />
    </>
  );
};
