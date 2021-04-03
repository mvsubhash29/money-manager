import {CategoryResponseType} from '../actions/types';

export function fetchCategoryService(): Promise<CategoryResponseType> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return new Promise((resolve, reject) => {
    resolve({
      expense: [
        {
          type: 'expense',
          categoryName: 'Food',
          icon: 'star'
        },
        {
          type: 'expense',
          categoryName: 'Transport',
          icon: 'transport'
        }
      ],
      income: [
        {
          type: 'income',
          categoryName: 'Salary',
          icon: 'salary'
        }
      ]
    });
  });
}
