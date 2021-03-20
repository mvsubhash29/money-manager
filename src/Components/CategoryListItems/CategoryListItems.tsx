// import {Interface} from 'node:readline';
import React from 'react';
import {CategoryItem, CategoryItemProps} from './CategortyItem/CategoryItem';

interface CategoryItemListProps {
  categoryList: CategoryItemProps[];
}

// props: CategoryItemListProps
export const CategoryListItems = (props: CategoryItemListProps) => {
  const {categoryList} = props;
  //   const items = [
  // {
  //   label: 'Bills',
  //   icon: 'ABC'
  // },
  // {label: 'Home', icon: 'ABC'},
  // {label: 'Car', icon: 'ABC'}
  //   ];

  // const {label,icon}=props
  return (
    <>
      {categoryList.map((category) => {
        return (
          <CategoryItem
            onRemove={() => {}}
            key={category.label}
            label={category.label}
            icon={category.icon}
          />
        );
      })}
    </>
  );
};
