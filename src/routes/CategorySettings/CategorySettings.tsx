import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/rootReducer';
import {CategoryType} from './redux/actions/types';

export const CategorySettings = () => {
  const categories = useSelector((state: RootState) => state.categories);

  return (
    <>
      <h1>CategorySettings Page</h1>
      {categories &&
        categories.expense.map(
          (category: CategoryType) => category.categoryName
        )}
    </>
  );
};
