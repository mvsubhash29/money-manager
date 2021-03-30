import {LedgerDetailsType} from '../../types';

export function fetchLedgerDetailsService(): Promise<LedgerDetailsType[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return new Promise((resolve, reject) => {
    resolve([
      {
        date: '03/01 Sun',
        income: 500,
        expenses: 40,
        details: [
          {
            description: 'Salary',
            amount: 500,
            isExpense: false
          },
          {
            description: 'Food', // categoryName if not description was entered by the user
            amount: 10,
            isExpense: true
          },
          {
            description: 'Transport',
            amount: 30,
            isExpense: true
          }
        ]
      },
      {
        date: '04/01 Sun',
        expenses: 100,
        details: [
          {
            description: 'Food', // categoryName if not description was entered by the user
            amount: 40,
            isExpense: true
          },
          {
            description: 'Transport',
            amount: 60,
            isExpense: true
          }
        ]
      }
    ]);
  });
}
