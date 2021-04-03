import {CategoryResponseType} from '../actions/types';

export function fetchCategoryService(): Promise<CategoryResponseType> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return new Promise((resolve, reject) => {
    resolve({
      expense: [
        {
          type: 'expense',
          title: 'Food',
          name: 'food',
          icon: 'star'
        },
        {
          type: 'expense',
          title: 'Transport',
          name: 'transport',
          icon: 'transport'
        }
      ],
      income: [
        {
          type: 'income',
          title: 'Salary',
          name: 'salary',
          icon: 'salary'
        }
      ]
    });
  });
}
