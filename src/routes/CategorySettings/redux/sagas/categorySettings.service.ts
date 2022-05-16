import axios from 'axios';

import {CategoryResponseType} from '../actions/types';

export function fetchCategoryService(): Promise<CategoryResponseType> {
  return axios
    .get('http://localhost:3001/api/v1/money-manager/categories')
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
}
