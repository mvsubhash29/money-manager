import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import {Story, Meta} from '@storybook/react/types-6-0';
import {action} from '@storybook/addon-actions';
import {Provider} from 'react-redux';

import {LedgerForm as LedgerFormComponent} from './LedgerForm';
import {LedgerFormProps} from './types';

const store = {
  getState: () => {
    return {
      categories: {
        expense: [
          {type: 'expense', title: 'Food', name: 'food', icon: 'food'},
          {
            type: 'expense',
            title: 'Transport',
            name: 'transport',
            icon: 'transport'
          }
        ],
        income: [
          {type: 'income', title: 'Salary', name: 'salary', icon: 'salary'}
        ]
      }
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any;

export default {
  title: 'Components/LedgerForm',
  component: LedgerFormComponent,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  argTypes: {onSubmit: {action: 'formSubmit'}, onCancel: {action: 'cancel'}}
} as Meta;

const Template: Story<LedgerFormProps> = (args) => (
  <LedgerFormComponent {...args} />
);

export const LedgerForm = Template.bind({});
LedgerForm.args = {
  initialValues: {
    categoryName: 'transport',
    amount: 200,
    description: 'Transport',
    ledgerType: 'expense'
  }
};
