import {CategoryItemProps} from '../../../../Components/CategoryListItems/CategortyItem/CategoryItem';

export function fetchCategoryService(): Promise<CategoryItemProps[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return new Promise((resolve, reject) => {
    resolve([
      {
        label: 'Bills',
        icon: 'star'
      },
      {label: 'Home', icon: 'star'},
      {label: 'Car', icon: 'home'}
    ]);
  });
}
