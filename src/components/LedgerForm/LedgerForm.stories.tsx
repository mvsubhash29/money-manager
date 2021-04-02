import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import {Story, Meta} from '@storybook/react/types-6-0';
import {LedgerForm as LedgerFormComponent} from './LedgerForm';
import {LedgerFormProps} from './types';

export default {
  title: 'Components/LedgerForm',
  component: LedgerFormComponent,
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
    ledgerType: 'Expense'
  }
};
