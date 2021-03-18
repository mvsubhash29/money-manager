import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/rootReducer';
import {fetchCategories} from './redux/actions/categorySettings.action';

export const CategorySettings = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>CategorySettings Page</h1>
      {categories && categories.map((category: string) => category)}
    </>
  );
};
